const db = require("../models");

// Defining methods for the serviceController
module.exports = {
  create: async (req, res) => {
    try {
      await db.User.findByIdAndUpdate(req.body._id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        $push: { services: req.body.purchased_service_ids },
      });
      await db.Checkout.create({
        User: req.body._id,
        billingAddress: req.body.billingAddress,
        service: req.body.purchased_service_ids,
      });
      const User = await db.User.findById(req.body._id).populate(
        "billingAddress"
      );
      res.json(User);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  },
};
