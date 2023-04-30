const fs = require("fs");
const knex = require("knex")(require("../../knexfile"));

const books = JSON.parse(fs.readFileSync("src/database/jsons/books.json"));
const reviews = JSON.parse(fs.readFileSync("src/database/jsons/reviews.json"));

const popularTable = async () => {
  try {
    await knex("books").insert(books);
    await knex("reviews").insert(reviews);
    console.log("Dados inseridos com sucesso!");
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
  }
};

popularTable();
