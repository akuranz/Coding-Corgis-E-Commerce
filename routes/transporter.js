// var express = require("express");
// var router = express.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/config");
const fs = require("fs");
const path = require("path");
const libPath = path.join(__dirname, "../config/emailTemplates");

function sendMail(obj, arr) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: creds.USER,
        pass: creds.PASS,
      },
    });

    transporter.verify(async (error, success) => {
      if (error) {
        console.log(error);
      } else {
        const html = await parseMail(obj, arr);
        transporter.sendMail(html, (err, data) => {
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
      return new Promise((resolve, reject) => {
        fs.readFile(
          path.resolve(libPath, "purchaseOrder.html"),
          "utf8",
          (err, data) => {
            if (err) return reject(err);

            const pageModel = {
              ...obj,
              sumTotal: arr.reduce((a, item) => (a += item.price), 0),
            };
            Object.keys(pageModel).forEach((key) => {
              data = data.replace("{{" + key + "}}", pageModel[key]);
            });

            fs.readFile(
              path.resolve(libPath, "purchaseItem.html"),
              "utf8",
              (err, itemT) => {
                if (err) return reject(err);
                const items = arr.map((item) => {
                  let copyT = itemT;

                  const dataObj = item.toObject();

                  Object.keys(dataObj).forEach((key, i) => {
                    copyT = copyT.replace("{{index}}", i + 1);
                    copyT = copyT.replace("{{" + key + "}}", dataObj[key]);
                  });
                  return copyT;
                });

                data = data.replace("{{#arr}}", items.join(""));
                resolve({
                  from: "Coding Corgies",
                  to: [obj.email, "CodingCorgis@gmail.com"],
                  subject: "Thank you for ordering from Coding Corgis!",
                  html: data,
                });
              }
            );
          }
        );
      });
    }
  });
}

module.exports = sendMail;
