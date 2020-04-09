const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Todos collection and inserts the todos below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fullstackservices"
);

const serviceSeed = [
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
];

const userSeed = {
  username: "me",
  password: "1234",
};

const seedDB = async () => {
  try {
    await db.Service.remove({});
    await db.User.remove({});
    const inserted = await db.Service.collection.insertMany(serviceSeed);
    const serviceIds = Object.values(inserted.insertedIds);
    const newUser = await db.User.create(userSeed);
    await db.User.findByIdAndUpdate(newUser._id, {
      $push: { services: { $each: serviceIds } },
    });

    const demo = await db.User.findById(newUser._id).populate("services");
    console.log(demo);
  } catch (error) {
    console.log(error);
  }
};

seedDB();
// db.Service.remove({})
//   .then(() => db.Service.collection.insertMany(serviceSeed))
//   .then((data) => {
//     const serviceIds = Object.values(data.insertedIds);
//     console.log(data.result.n + " records inserted!");

//     db.User.create(userSeed).then((newUser) => {
//       db.User.findByIdAndUpdate(newUser._id, {
//         $push: { services: { $each: serviceIds } },
//       })
//         .then((dbResult) => {
//           console.log("RESULT", dbResult);
//         })
//         .catch((err) => {
//           console.error(err);
//           //process.exit(1);
//         });
//     });
//     //process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     //process.exit(1);
//   });
