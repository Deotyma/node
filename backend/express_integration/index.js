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
  res.render("home", {
    css: "/css/homepage.css",
    title: "Cui'zine Acceuil",
    activeHome: true,
  });
});

app.get("/equipe", (req, res) => {
  res.render("team", {
    css: "/css/team.css",
    title: "équipe",
    activeEquipe: true,
  });
});

app.get("/equipe-membre", (req, res) => {
  res.render("team-membre", {
    css: "/css/team-member.css",
    title: "membre",
    activeEquipe: true,
  });
});

app.get("/blog", (req, res) => {
  res.render("recipe", {
    css: "/css/recipe.css",
    title: "blog",
    activeBlog: true,
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    css: "/css/contact.css",
    title: "contact",
    activeContact: true,
  });
});

app.get("/post", (req, res) => {
  res.render("post", { css: "/css/post.css", title: "post", active: true });
});

app.get("/page2", (req, res) => {
  res.render("page2", { css: "/css/homepage.css", title: "page2" });
});
