const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  text: { type: String, required: true },
});

const Todo = mongoose.model("Service", serviceSchema, "Service");

module.exports = Service;
