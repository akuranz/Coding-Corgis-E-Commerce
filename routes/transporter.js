// var express = require("express");
// var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");

function sendMail(obj, arr) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: creds.USER,
        pass: creds.PASS,
      },
    });

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        transporter.sendMail(parseMail(obj, arr), (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
            transporter.close();
          }
        });
      }
    });

    function parseMail(obj, arr) {
      var content = `Hi ${obj.firstName} ${obj.lastName} \n
    \n Thanks for choosing Coding Corgis! 
    \n We'll be in touch soon to process your payment! 
    \n Your ORDER:
    \n ${arr
      .map((item, i) => {
        return `${i + 1}: ${item.language} \t \t $${item.price} \n`;
      })
      .join("")}
    \n Total: $${arr.reduce((a, item) => (a += item.price), 0)} \n
    \n If you have any questions please contact us @ `;
      return {
        from: "Coding Corgies",
        to: [obj.email, "akuranz@gmail.com"],
        subject: "Thansk for ordering from Coding Corgis!",
        text: content,
      };
    }
  });
}

// var transport = {
//   host: "smtp.gmail.com",
//   auth: {
//     user: creds.USER,
//     pass: creds.PASS,
//   },
// };

// var transporter = nodemailer.createTransport(transport);

// transporter.verify((error, success) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Server is ready to take messages");
//   }
// });

// router.post("/send", (req, res, next) => {
//   var firstName = req.body.firstName;
//   var lastName = req.body.lastName;
//   var email = req.body.email;
//   // var message = req.body.message;
//   var content = `Hi ${firstName} ${lastName} \n
//   \n Thanks for choosing Coding Corgis!
//   \n We'll be in touch soon to process your payment!
//   \n If you have any questions please contact us @ `;

//   var mail = {
//     from: "Coding Corgies",
//     to: [email, "akuranz@gmail.com"],
//     subject: "Thansk for ordering from Coding Corgis!",
//     text: content,
//   };

//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         msg: "fail",
//       });
//     } else {
//       res.json({
//         msg: "success",
//       });
//     }
//   });
// });

module.exports = sendMail;
