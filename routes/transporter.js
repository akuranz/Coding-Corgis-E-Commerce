var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

var transport = {
  host: "smtp.gmail.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.firstName;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${firstName} ${lastName} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: firstName,
    to: "akuranz@gmail.com", //Change to email address that you want to receive messages on
    subject: "Thansk for ordering from Coding Corgis!",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

module.exports = router;
