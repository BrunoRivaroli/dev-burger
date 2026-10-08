const multer = require("multer");
const { resolve } = require("node:path");
const { randomUUID } = require("node:crypto");

// Com Supabase Storage configurado (deploy), o arquivo fica em memória e é
// enviado pelo middleware uploadToStorage. Localmente, grava em ./uploads.
const useSupabaseStorage = Boolean(
	process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_KEY,
);

module.exports = {
	storage: useSupabaseStorage
		? multer.memoryStorage()
		: multer.diskStorage({
				destination: resolve(__dirname, "..", "..", "uploads"),
				filename: (_request, file, callback) => {
					const uniqueName = randomUUID().concat(`-${file.originalname}`);
					return callback(null, uniqueName);
				},
			}),
	limits: { fileSize: 4 * 1024 * 1024 },
};
