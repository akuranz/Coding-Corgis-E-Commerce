const db = require("../models");

// Defining methods for the serviceController
module.exports = {
  create: function (req, res) {
    console.log(req.body);
    if (req.body.billingAddress.street) {
      db.Checkout.create(req.body.billingAddress).then((newAddress) => {
        console.log("newAddress", newAddress);
        db.User.findByIdAndUpdate(
          { _id: req.params.id },
          req.body
        ).then((dbModel) => res.json(dbModel));
        // .catch((err) => res.status(422).json(err));
      });
    }
  },
};
