const mongoose = require("mongoose");
const adressModel = require("../models/adress");

mongoose.connect(
  "mongodb://localhost:27017/university",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("BD connecté");
  }
);

adressModel.deleteMany({}).then(() => {
  adressModel.create([
    {
      streetName: "Wandy",
      streetNumber: "1A",
      postCode: "43-567",
      city: "Zabrze",
    },
  ]);
});
