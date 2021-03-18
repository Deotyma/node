const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  surname: String,
  dateOfBirth: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
