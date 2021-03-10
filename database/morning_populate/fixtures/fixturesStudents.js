const mongoose = require("mongoose");
const studentModel = require("../models/students");
const adressModel = require("../models/adress");

mongoose.connect("mongodb://localhost:27017/university", () => {
  console.log("BD connecté");
});
