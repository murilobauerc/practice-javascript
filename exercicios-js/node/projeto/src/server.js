const database = require("./database");

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const porta = 8080;

app.use(bodyParser.urlencoded({ extended: true })); // retorna uma função middleware que faz um parse no body da requisição
// app.use(bodyParser.json())

app.get("/produtos", (req, res, next) => {
  res.send(database.getProdutos); // send() converte para JSON
});

app.get("/produtos/:id", (req, res, next) => {
  const { id } = req.params;
  res.send(database.getProduto(id));
});

app.put("/produtos/:id", (req, res, next) => {
  const { id } = req.params;
  res.send(database.updateProduto(id));
});

app.post("/produtos", (req, res, next) => {
  res.send(
    database.salvarProduto({ nome: req.body.nome, preco: req.body.preco })
  );
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`);
});
