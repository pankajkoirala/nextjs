import { sender } from "../../../lib/nodemailer";
import { prepareMail } from "../../../lib/nodemailer/mailMessage";

const mongoose = require("mongoose");
const db = require("./../../../lib/dbConnection");

const {
  user,
  createUserValidator,
  updateUserValidator,
} = require("./schema.ts");
const getAll = (req, res) => {
  user
    .find()
    .then((data) => res.status(200).send({ status: true, data: data }))
    .catch((err) => {
      res.send(err);
    });
};

const createFunction = (req, res) => {
  console.log(req.body);
  const { error } = createUserValidator(req.body);
  if (error)
    return res
      .status(402)
      .send({ status: false, data: null, message: error.details[0].message });

  // var mailData = {
  //   email: req.body.email,
  //   fullName: req.body.fullName,
  // };
  // const emailBody = prepareMail(mailData);
  // sender.sendMail(emailBody, function (err, done) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("EMail Sent", done);
  //   }
  // });

  let data = new user(req.body);
  data
    .save()
    .then((data) =>
      res.status(200).send({
        status: true,
        data: data,
        message: "User Created Successfully",
      })
    )
    .catch((err) => {
      res.send({ status: false, data: null, message: err });
    });
};

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      createFunction(req, res);
      break;
    case "GET":
      getAll(req, res);
      break;
  }
  // mongoose.connection.close()
}
