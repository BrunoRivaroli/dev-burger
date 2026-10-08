const url = process.env.DATABASE_URL;

module.exports = {
  dialect: "postgres",
  ...(url
    ? {
        url,
        dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
      }
    : {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USER || "admin",
        password: process.env.DB_PASSWORD || "28102022",
        database: process.env.DB_NAME || "dev-burger-db",
      }),
  define: {
    timestamps: true, //grava data e hora das inclusões e alterações no banco
    underscored: true, // padroniza nome de colunas
    underscoredAll: true, //padroniza nome de colunas
  },
};
