const mongoose = require("mongoose");

const adressSchema = new mongoose.Schema({
  streetName: String,
  streetNumber: String,
  postCode: String,
  city: String,
});

const adressModel = mongoose.model("adress", adressSchema);

module.exports = adressModel;
