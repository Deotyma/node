const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userModel = require("./models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("./config");

const app = express();

app.listen(config.port, () => {
  console.log("Serveur connecté");
});

mongoose.connect(
  config.mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("BD connectée");
  }
);

app.use(bodyParser.json());

app.post("/users", async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (user) {
      res.status(400).send(`This email ${req.body.email} arleady exists`);
      return;
    }

    if (req.body.password.length < 8) {
      res.status(400).send("password is too short");
      return;
    }
    await userModel.create({
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password),
      firstName: req.body.firstName,
      surname: req.body.surname,
      dateOfBirth: new Date(req.body.dateOfBirth),
    });
    res.send("New user create");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.post("/login", async (req, res) => {
  const user = await userModel
    .findOne({
      email: req.body.email,
    })
    .exec();

  if (bcryptjs.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      config.secret,
      {
        expiresIn: 3600,
      }
    );
    res.status(200).json({
      message: "You are conected",
      token: token,
    });
  } else {
    res.status(402).send("Invalid password");
  }
});
