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
  coder: {
    type: String,
    required: true,
  },
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
