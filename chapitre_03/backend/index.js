const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const bodyParser = require("body-parser");

app.listen(port, () => {
  console.log("Server started on port " + port);
});

app.use(bodyParser.json());
app.use(cors());

const students = [
  { name: "Ala" },
  { name: "Ela" },
  { name: "Ola" },
  { name: "Ula" },
  { name: "Tola" },
];

app.get("/students", (req, res) => {
  console.log(students);
  res.json(students);
});

app.post("/students", (req, res) => {
  students.push(req.body);
  res.send("Etudiant ajouté");
});
