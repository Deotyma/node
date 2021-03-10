const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: String,
  surname: String,
  adress: ObjectId,
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;
