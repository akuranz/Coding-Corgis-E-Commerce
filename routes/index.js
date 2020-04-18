const router = require("express").Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

router.use("/api", require("./apiRoutes"));
router.use("/auth", require("./authRoutes"));

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};
try {
  // var transporter = nodemailer.createTransport(transport);
  // transporter.verify((error, success) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take messages");
  //   }
  // });
} catch (error) {
  // console.log(error);
}

module.exports = router;
