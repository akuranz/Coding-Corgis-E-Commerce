require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const compression = require("compression");

const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 3001;

//var db = require("./models"); //do I need to define/import models and database here?

require("./config/passport/localStrategy");

// Define middleware here
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(session({ secret: "keyboard", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("./client/public")); //is this right?
}

// Add routes
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fullstackservices"
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = app;
