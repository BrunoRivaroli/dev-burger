export default {
	secret: process.env.JWT_SECRET || "dev-secret-troque-em-producao",
	expiresIn: "7d",
};
