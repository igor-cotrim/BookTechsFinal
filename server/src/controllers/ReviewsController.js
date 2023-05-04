const connection = require("../../connection");

module.exports = {
  async index(request, response) {
    const [count] = await connection("reviews").count(); //função para contar o total de itens

    const reviews = await connection("reviews").select("*"); //guarda tdos os registros do bd na variavel reviews

    response.header("x-total-count", count["count(*)"]); //mostra quantos intes tem cadastrados

    return response.json(reviews);
  },
};
