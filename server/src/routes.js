const express = require("express"); //importando o express para o routes

// const BooksController = require("./controllers/IncidentController"); //importa o arquivo
const BooksController = require("./controllers/BooksController"); //importa o arquivo
const ReviewsController = require("./controllers/ReviewsController"); //importa o arquivo
const routes = express.Router(); //desacoplando o modo de rotas em uma nova variavel

routes.get("/books", BooksController.index);
routes.get("/reviews", ReviewsController.index);

module.exports = routes; //exporta tudo que esta em  variavel routes
