const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  service: [
    {
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
      reviews: [
        {
          review: {
            type: String,
            required: false,
          },
          reviewer: {
            type: String,
            required: false,
          },
        },
      ],
    },
  ],
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
