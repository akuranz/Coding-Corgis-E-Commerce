const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Todos collection and inserts the todos below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fullstackservices"
);

const serviceSeed = [
  {
    text: "Vanilla Javascript",
  },
];

db.Service.remove({})
  .then(() => db.Service.collection.insertMany(serviceSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
