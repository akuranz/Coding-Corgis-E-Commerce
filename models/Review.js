const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const reviewSchema = new Schema({
  review: {
    type: Number,
    required: false,
  },
  reviewer: {
    type: String,
    required: false,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
