const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password

// req.body.username, req.body.password
const localStrat = new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    // req,body.email INSTEAD username
    usernameField: "username", // change callback parameter two to email from username
  },
  function (email, password, done) {
    console.log("INSIDE PASSPORT", email, password);
    // When a user tries to sign in this code runs
    User.findOne({
      username: email,
    }).then(function (dbUser) {
      console.log(dbUser);
      // If there's no user with the given email
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email.",
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.checkPassword(password)) {
        return done(null, false, {
          message: "Incorrect password.",
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
);

// Exporting our configured passport
module.exports = localStrat;
