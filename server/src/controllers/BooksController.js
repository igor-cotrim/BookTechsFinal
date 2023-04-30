const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const [count] = await connection("books").count(); //função para contar o total de itens

    const books = await connection("books").select("*"); //guarda tdos os registros do bd na variavel books

    response.header("x-total-count", count["count(*)"]); //mostra quantos intes tem cadastrados

    return response.json(books);
  },
};
