const nodemailer = require("nodemailer");

// Creating Transport for Nodemailer
// export const sender = nodemailer.createTransport({
//   host: "smtp.sendgrid.net",
//   port: 587,
//   auth: {
//     user: "apikey",
//     pass: "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",
//   },
// });

export const sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pankaj.developer.77@gmail.com",
    pass: "9843765501",
  },
});
