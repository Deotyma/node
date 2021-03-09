const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/garage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("BD connectée");
  }
);

const charactersSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});

const characterModel = mongoose.model("cars", charactersSchema);

/* characterModel.deleteMany({}).then(() =>
  characterModel
    .create([
      {
        brand: "Renault",
        model: "Espace",
        year: 1999,
      },
      {
        brand: "Peugeot",
        model: "308",
        year: 2017,
      },
      {
        brand: "Renault",
        model: "Scenic",
        year: 2004,
      },
    ])
    .then((response) => console.log(response))
); */

/* characterModel
  .findById({
    _id: "604644b302bd1e1b4e8a3127",
  })
  .then((response) => console.log(response));
 */

/* characterModel
  .updateOne(
    {
      brand: "Renault",
      model: "Espace",
    },
    {
      year: 2000,
    }
  )
  .then((response) => console.log(response)); */

/* characterModel
  .deleteMany({
    brand: "Renault",
  })
  .then((response) => {
    console.log(response);
  }); */

// BONUS

/* const cars = [
  { brand: "Aston Martin", model: "DB9", year: 2010 },
  { brand: "Range Rover", model: "Discovery Sport", year: 2017 },
];
characterModel.insertMany(cars, function (error, docs) {});


characterModel.find;
 */
