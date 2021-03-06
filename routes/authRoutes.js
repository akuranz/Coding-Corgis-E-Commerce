const express = require("express");
const router = express.Router();
const User = require("../models/User");
const passport = require("../config/passport");

router.post("/", (req, res) => {
  console.log("user signup");

  const { username, password } = req.body;
  // ADD VALIDATION
  User.findOne({ username: username }, (err, user) => {
    if (err) {
      console.log("User.js post error: ", err);
    } else if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
    } else {
      const newUser = new User({
        username: username,
        password: password,
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        res.json(savedUser);
      });
    }
  });
});

router.post(
  "/login",
  function (req, res, next) {
    console.log("routes/authRoutes.js, login, req.body: ");
    console.log(req.body);
    next();
  },
  passport.authenticate("local"),
  (req, res) => {
    var userInfo = {
      // _id: req.user._id,
      // username: req.user.username,
      // services: req.user.services,
      // billingAddress: req.user.billingAddress,
      ...req.user,
    };
    console.log("logged in", userInfo);
    delete userInfo.password;
    res.send(userInfo);
  }
);

router.get("/", (req, res, next) => {
  console.log("===== user!!======");
  console.log(req.user);

  if (req.user) {
    res.json({ user: req.user });
  } else {
    res.json({ user: {} });
  }
});

router.post("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: "logging out" });
  } else {
    res.send({ msg: "no user to log out" });
  }
});

module.exports = router;
