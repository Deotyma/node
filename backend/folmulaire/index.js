const express = require("express");
const app = express();
const port = 8000;
const expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server started on port " + port);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/page", (req, res) => {
  res.render("page");
});

app.use(express.urlencoded({ extended: true }));
app.post("/home", (req, res) => {
  console.log(req.body);
  res.redirect("/page");
});
