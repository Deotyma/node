const { response } = require("express");
const express = require("express");
const authors = require("./data");

const app = express();
app.listen(8000, () => {
  console.log("Serveur lancé");
});

app.get("/", (request, response) => {
  response.send("Authors API");
});

app.get("/authors/:id", (request, response) => {
  console.log(request.params.id);
  if (request.params.id <= authors.length) {
    response.send(
      `${authors[request.params.id - 1].author}, ${
        authors[request.params.id - 1].nationality
      }`
    );
  } else {
    response.send("author not found");
  }
});

app.get("/authors/:id/books", (request, response) => {
  console.log(request.params.id);
  if (request.params.id <= authors.length) {
    response.send(`${authors[request.params.id - 1].books}`);
  } else {
    response.send("books not found");
  }
});

app.get("*", (request, response) => {
  response.send("route non existente");
});
