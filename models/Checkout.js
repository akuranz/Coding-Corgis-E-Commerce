const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkoutSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  billingAddress: {
    type: Schema.Types.ObjectId,
    ref: "Address",
    // required: true,
  },

  service: [

    {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
