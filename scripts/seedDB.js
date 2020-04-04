const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Todos collection and inserts the todos below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fullstackservices"
);

const serviceSeed = [
  {
    service: [
      {
        language: "Vanilla JavaScript",
        price: 75,
        selected: false,
        coder: "Amber",
        reviews: [
          {
            review: "cool",
            reviewer: "Abby",
          },
        ],
      },
    ],
  },
  {
    service: [
      {
        language: "HTML",
        price: 25,
        selected: false,
        coder: "Amber",
        reviews: [
          {
            review: "cool",
            reviewer: "Abby",
          },
        ],
      },
    ],
  },
  {
    service: [
      {
        language: "CSS",
        price: 50,
        selected: false,
        coder: "Amber",
        reviews: [
          {
            review: "cool",
            reviewer: "Abby",
          },
        ],
      },
    ],
  },
];

const customerSeed = [
  {
    customer: [
      {
        username: "me",
        password: "1234",
        service: [
          {
            language: "CSS",
            price: 50,
            selected: false,
            coder: "Amber",
            reviews: [
              {
                review: "cool",
                reviewer: "Abby",
              },
            ],
          },
        ],
      },
    ],
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

db.Customer.remove({})
  .then(() => db.Customer.collection.insertMany(customerSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
