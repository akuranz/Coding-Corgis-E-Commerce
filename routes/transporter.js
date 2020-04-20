// var express = require("express");
// var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");
// const logo = require("../client/src/images/coding-corgi-logo-192h.png");

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
      var content = `
      <p><!-- Hidden Text --><span style="color:transparent;visibility:hidden;display:none;opacity:0;height:0;width:0;font-size:0;">We look forward to working with you.<span> <!-- END Hidden Text --></span></span></p>
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="row" role="presentation banner" style="border-collapse:collapse; text-align:left; border-spacing:0; max-width:100%; border-bottom: 0px solid #ccc;" width="600">
	      <tbody>
		      <tr>
            <td style="text-align: center;"><img alt="Coding Corgis Logo" border="0" class="emailImage" 
            data-ratio-lock="true" data-unit="px" 
            src="cid:coding-corgi-logo-192h.png" style="height: 260px; width: 600px;" /></a></td>
		      <tr>
	      </tbody>
      </table>
      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="row" role="presentation banner" style="border-collapse:collapse; text-align:left; border-spacing:0; max-width:100%; border-bottom: 0px solid #ccc;" width="600">
	      <tbody>
        <tr style="border: 1px solid #e4e4e4;">
              <td class="title" style="padding-top:15px; padding-right:30px; 
              padding-bottom:5px; padding-left:30px;">
              <p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;"> 
                We appreciate your order, ${obj.firstName} ${obj.lastName}!
              </span></span></p>
              <p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;">
                Thanks for choosing Coding Corgis -- we'll be in touch soon to process your payment! 
              </span></span></p>
              </td>
              </tr>
              <tr style="border: 1px solid #e4e4e4;">
              <td style="padding-top:15px; padding-right:30px; 
              padding-bottom:5px; padding-left:30px;">
              <p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;">
                YOUR ORDER:
              </span></span></p>
              </td>
              </tr>
              <tr style="border: 1px solid #e4e4e4;">
              <td style="padding-top:15px; padding-right:30px; 
              padding-bottom:5px; padding-left:30px;">
              ${arr
                .map((item, i) => {
                  return `<p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;">${
                    i + 1
                  }: ${item.language}: $${item.price} </span></span></p>`;
                })
                .join("")}
              </td>
              </tr>
              <tr style="border: 1px solid #e4e4e4;">
              <td style="padding-top:15px; padding-right:30px; 
              padding-bottom:5px; padding-left:30px;">
              <p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;">
                TOTAL: $${arr.reduce((a, item) => (a += item.price), 0)}
              </span></span></p>
              </td>
              </tr>
              <tr style="border: 1px solid #e4e4e4;">
              <td style="padding-top:15px; padding-right:30px; 
              padding-bottom:5px; padding-left:30px;">
              <p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;">
               If you have any questions please contact us @ 
              </span></span></p>
              <p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:16px;">
                 The Coding Corgi Team
              </span></span></p>
            </td>
          <tr>
	      </tbody>
      </table>
      <footer>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="row" role="presentation" style="border-collapse:collapse; text-align:left; border-spacing:0; max-width:100%;" width="600">
        <tbody>
          <tr style="background-color: #e4e4e4;">
            <td>
            <p style="font-family: Verdana, sans-serif; font-size: 12px; text-align: center;"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:14px;"><span style="color: #63666a;">2260 Baseline Road, Suite 200, Boulder, CO 80302 303.444.1188</span></span></span></p>

            <p style="font-family: Verdana, sans-serif; font-size: 12px; text-align: center;"><span style="font-size:12px;"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="color: #63666a;"><span style="text-align: center;">You are receiving this email because you have purchased services from Coding Corgis. </span></span></span></span></p>

            <p style="font-family: Verdana, sans-serif; font-size: 12px; text-align: center;"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:14px;"><a href="HEROKU LINK" style="text-decoration: underline;">Coding Corgis</a></span></span></p>

            <p style="text-align: center;"><span style="font-size:14px;"><span style="font-family:Arial,Helvetica,sans-serif;"><a href="privacy poliyc" style="text-decoration: underline;" target="_blank">Please read our full privacy policy.</a></span></span></p>
            </td>
          </tr>
        </tbody>
      </table>
      <footer>
    `;
      return {
        from: "Coding Corgi's",
        to: [obj.email, "akuranz@gmail.com"],
        subject: "Thank you for ordering from Coding Corgi's!",
        html: content,
        // attachments: [{
        //   filename: "coding-corgi-logo-192h.png",
        //   path: "../client/src/images/coding-corgi-logo-192h.png",
        //   cid: "coding-corgi-logo-192h.png"
        // }]
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
