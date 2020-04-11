const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  language: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  coder: {
    type: String,
    required: true,
  },
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: false,
    },
  ],
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
