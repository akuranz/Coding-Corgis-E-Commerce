const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
mongoose.promise = Promise;

const userSchema = new Schema({
  username: {
    type: String,
    unique: false,
    required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: false,
    // required: true,
  },
  firstName: {
    type: String,
    unique: false,
    // required: true,
  },
  lastName: {
    type: String,
    unique: false,
    // required: true,
  },
  password: {
    type: String,
    unique: false,
    required: true,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    }
  ],
  billingAddress: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  // shippingAddress: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Address",
  //   },
  // ],
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
};

userSchema.pre("save", function (next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");

    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
