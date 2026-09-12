module.exports = {
  dialect: "postgres", //imagem utilizada
  host: "localhost", //endereço do banco
  port: 5432, //porta
  username: "admin", //usuario do banco
  password: "28102022", //senha do banco
  database: "dev-burger-db", //database do banco
  define: {
    timestamps: true, //grava data e hora das inclusões e alterações no banco
    underscored: true, // padroniza nome de colunas
    underscoredAll: true, //padroniza nome de colunas
  },
};