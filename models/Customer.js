const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer: [
    {
      username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      services: [
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
    },
  ],
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
