const db = require("../models");

// Defining methods for the serviceController
module.exports = {
  findAll: function (req, res) {
    db.Service.find({})
      .populate("review")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // findById: function (req, res) {
  //   db.Checkout.findById(req.params.id)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // update: function (req, res) {
  //   db.Checkout.findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // create: function (req, res) {
  //   // process would be EXACTLY the same for shipping address as well
  //   // if billingAddress is a model of an address (address not stored in db)
  //   if (req.body.billingAddress.street) {
  //     // store the address information in the database
  //     // take address._id and associate with user making purchase
  //     // take address._id and associate with checkout billing address attribute
  //   }
  //   // if only a Address Id is passed in req.body (address already exists in db and user associated)
  //   else if (req.body.billingAddressId) {
  //     // pass the id to the checkout billing address attribute
  //   }
  //   db.Book.create(req.body)
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
  // //do we want this one?
  // remove: function (req, res) {
  //   db.Checkout.findById({ _id: req.params.id })
  //     .then((dbModel) => dbModel.remove())
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },
};
