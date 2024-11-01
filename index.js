// const express = require("express");

// const app = express();

// let lojas = [
//   { id: 1, nomeLoja: "UOL" },
//   { id: 2, nomeLoja: "Jeiel Informática" },
//   { id: 3, nomeLoja: "Google" },
//   { id: 4, nomeLoja: "Eclipse" },
// ];

// app.get("/lojas", (request, response) => {
//   return response.json({ lojas });
// });

// // SHOW
// app.get("/lojas/:id", (request, response) => {
//   const id = parseInt(request.params.id);
//   const loja = lojas.find((item) => item.id === id);
//   const status = loja ? 200 : 404;

//   //console.log() // Informativa
//   console.log("GET :: /lojas/:id ", loja); // ou ao invés de "loja", colocar "JSON.stringify(loja)"
//   // SEMPRE IDENTIFICAR O MÉTODO E A ROTA
//   //console.warn() // Informativa com um pouco mais de atenção
//   //console.error() // ERRO
//   //console.debug() // Informações detalhadas

//   return response.status(status).json(loja);
// });

// app.post("/lojas", (request, response) => {
//   const { nomeLoja } = request.body;
//   const id = lojas[lojas.length - 1].id + 1;

//   const newLoja = { id, nomeLoja };
//   lojas.push(newLoja);

//   return response.status(201).json(newLoja);
// });

// app.delete("/lojas", (request, response) => {
//   // Caso seja "/lojas/:id" faço o comentário abaixo
//   // const id = parseInt(request.params.id) // passe o id no parametro de rota
//   const { id } = request.body;
//   const index = lojas.findIndex((item) => item.id === id);
//   const status = index >= 0 ? 200 : 404;

//   if (index >= 0) {
//     lojas.splice(index, 1);
//   }

//   return response.status(status).json("Loja excluída com sucesso!");
// });

// app.put("/lojas/:id", (request, response) => {
//   const id = parseInt(request.params.id);
//   const { nomeLoja } = request.body;
//   const index = lojas.findIndex((item) => item.id === id);
//   const status = index >= 0 ? 200 : 404;

//   if (index >= 0) {
//     lojas[index] = { id: parseInt(id), nomeLoja };
//   }

//   return response.status(status).json();
// });

// app.listen(3333);
