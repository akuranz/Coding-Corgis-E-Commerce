// router.post("/send", (req, res, next) => {
//   var name = req.body.name;
//   var email = req.body.email;
//   var message = req.body.message;
//   var content = `name: ${name} \n email: ${email} \n message: ${message} `;

//   var mail = {
//     from: name,
//     to: "akuranz@gmail.com", //Change to email address that you want to receive messages on
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
