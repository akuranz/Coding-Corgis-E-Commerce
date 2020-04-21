const db = require("../models");

// Defining methods for the serviceController
module.exports = {
  // findOrders: async (req, res) => {
  //   try {
  //     await db.User.aggregate([
  //       {
  //         $lookup: {
  //           from: "services",
  //           localField: "services",
  //           foreignField: "_id",
  //           as: "servicedetails",
  //         },
  //       },
  //     ]).then((dbModel) => res.json(dbModel));

  //     console.log("Purchased Services: " + res.json(dbModel));
  //   } catch (error) {
  //     console.log(error);
  //     res.sendStatus(500);
  //   }
  // },
  findOrders: async function (req, res) {
    try {
      const orders = await db.Checkout.find({ User: req.user._id }).populate(
        "service"
      );
      res.json(orders);
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

// // Route for retrieving a Product by id and populating it's Review.
// app.get("/products/:id", function(req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   db.Product.findOne({ _id: req.params.id })
//     // ..and populate all of the notes associated with it
//     .populate("review")
//     .then(function(dbProduct) {
//       // If we were able to successfully find an Product with the given id, send it back to the client
//       res.json(dbProduct);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });
