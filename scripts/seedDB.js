const mongoose = require("mongoose");
const db = require("../models");

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
    language: "React.js",
    price: 150,
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
    language: "Node.js",
    price: 125,
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
    language: "MySQL",
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
    language: "MongoDB",
    price: 100,
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

const reviewSeed = [
  {
    review: "cool",
    reviewer: "me",
  },
  {
    review: "even cooler",
    reviewer: "me",
  },
];

const seedDB = async () => {
  try {
    await db.Review.remove({});
    await db.Service.remove({});
    await db.User.remove({});
    //connect reviews to services
    const insertedReviews = await db.Review.collection.insertMany(reviewSeed);
    const reviewIds = Object.values(insertedReviews.insertedIds);
    const insertedServices = await db.Service.collection.insertMany(
      serviceSeed
    );
    const serviceIds = Object.values(insertedServices.insertedIds);
    // new variable, loop over newService, filter by id of user
    // const newServiceById = newService.map((service) => service._id);
    const newUser = await db.User.create(userSeed);

    await db.User.findByIdAndUpdate(newUser._id, {
      $push: { services: { $each: serviceIds } },
    });
    await db.Service.update(
      {},
      {
        $push: { review: { $each: reviewIds } },
      },
      {
        multi: true,
      }
    );
    const __Users = await db.User.findById(newUser._id).populate({
      path: "services",
      populate: {
        path: "review",
      },
    });
    console.log(__Users.services[0]);

    // console.log("newService", newService);
    // console.log("newServiceByID", newServiceById);
    // const demo2 = await db.User.findById(newServicebyId).populate("review");
    // console.log("demo2", demo2);

    // //connect services to user
    // const inserted = await db.Service.collection.insertMany(serviceSeed);
    // const serviceIds = Object.values(inserted.insertedIds);
    // // const newUser = await db.User.create(userSeed);
    // await db.User.findByIdAndUpdate(newUser._id, {
    //   $push: { services: { $each: serviceIds } },
    // });

    // const demo = await db.User.findById(newUser._id).populate("services");
    // console.log("demo", demo);
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
