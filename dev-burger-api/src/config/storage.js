// Envia o arquivo recebido pelo multer para o Supabase Storage quando
// SUPABASE_URL e SUPABASE_SERVICE_KEY estão definidas (ex.: deploy na Vercel,
// onde o disco é somente leitura). Sem essas variáveis, não faz nada e o
// multer continua gravando em disco, como no ambiente local.
import { v4 } from "uuid";

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/+$/, "");
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
export const STORAGE_BUCKET = process.env.SUPABASE_BUCKET || "dev-burger";

export const useSupabaseStorage = Boolean(SUPABASE_URL && SUPABASE_SERVICE_KEY);

export function publicFileUrl(path) {
	return `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}/${encodeURIComponent(path)}`;
}

function authHeaders() {
	const headers = { apikey: SUPABASE_SERVICE_KEY };
	// Chaves legadas (service_role) são JWT e também vão no Authorization.
	if (SUPABASE_SERVICE_KEY.startsWith("eyJ")) {
		headers.Authorization = `Bearer ${SUPABASE_SERVICE_KEY}`;
	}
	return headers;
}

export async function uploadToStorage(request, response, next) {
	if (!useSupabaseStorage || !request.file) return next();

	const safeName = request.file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
	const filename = `${v4()}-${safeName}`;

	try {
		const result = await fetch(
			`${SUPABASE_URL}/storage/v1/object/${STORAGE_BUCKET}/${filename}`,
			{
				method: "POST",
				headers: {
					...authHeaders(),
					"Content-Type": request.file.mimetype,
					"x-upsert": "false",
				},
				body: request.file.buffer,
			},
		);

		if (!result.ok) {
			console.error("Supabase Storage upload failed:", await result.text());
			return response.status(502).json({ error: "File upload failed" });
		}

		request.file.filename = filename;
		return next();
	} catch (err) {
		console.error("Supabase Storage upload error:", err);
		return response.status(502).json({ error: "File upload failed" });
	}
}
