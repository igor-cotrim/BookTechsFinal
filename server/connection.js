const knex = require("knex");
const configuration = require("./knexfile"); // buscando o conf para o BD

// const connection = knex(configuration.development); //conexao de desenvolvimento
let connection = null;
if (process.env.NODE_ENV === "test") {
  connection = knex(configuration.test);
} else {
  connection = knex(configuration.development);
}

module.exports = connection; // exporta o connection
