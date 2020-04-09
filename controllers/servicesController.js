const db = require("../models");

// Defining methods for the serviceController
module.exports = {
  findAll: function (req, res) {
    db.Service.find({})
      //.populate("reviews")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
