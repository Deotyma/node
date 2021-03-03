const express = require("express");
const expressHandlebars = require("express-handlebars");
const port = 8000;

const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server started on port " + port);
});

app.get("/:lang?", (req, res) => {
  switch (req.params.lang) {
    case "en":
      res.render("home", { title: "Hello, how are you", lang: "english" });
      break;
    case "fr":
      res.render("home", { title: "Bonjour, ça va?", lang: "français" });
      break;
    case "es":
      res.render("home", { title: "Hola que tal?", lang: "esagnol" });
      break;
    default:
      res.render("home", { title: "Bonjour, ça va?", lang: "français" });
  }
});
