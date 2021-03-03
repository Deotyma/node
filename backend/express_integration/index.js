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

app.get("/", (req, res) => {
  res.render("home", { css: "/css/homepage.css" });
});

app.get("/equipe", (req, res) => {
  res.render("team", { css: "/css/team.css" });
});

app.get("/equipe-membre", (req, res) => {
  res.render("team-membre", { css: "/css/team-member.css" });
});

app.get("/blog", (req, res) => {
  res.render("recipe", { css: "/css/recipe.css" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { css: "/css/contact.css" });
});

app.get("/post", (req, res) => {
  res.render("post", { css: "/css/post.css" });
});

app.get("/page2", (req, res) => {
  res.render("page2", { css: "/css/homepage.css" });
});
