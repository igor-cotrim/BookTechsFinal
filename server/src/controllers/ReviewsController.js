const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const [count] = await connection("reviews").count(); //função para contar o total de itens

    const reviews = await connection("reviews").select("*"); //guarda tdos os registros do bd na variavel reviews

    response.header("x-total-count", count["count(*)"]); //mostra quantos intes tem cadastrados

    return response.json(reviews);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body; //cada variavel recebe os parametros

    const id = crypto.randomBytes(4).toString("HEX"); //o id vai receber criptografado e convertindo para uma string de bits.

    await connection("reviews").insert({
      //não consegui compilar com await
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id }); //retorna o id da ong cadastrada e gerada random
  },
};
