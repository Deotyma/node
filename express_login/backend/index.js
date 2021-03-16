const express = require("express");
const mongoose = require("mongoose");
const userModel = require("./models/user");
const port = 8000;

const app = express();

app.listen(port, () => {
  console.log("Serveur connecté");
});

mongoose.connect(
  "mongodb://localhost:27017/login",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("BD connectée");
  }
);
