import axios from "axios";

function VerifyPayment(req, res) {
  const { token, amount } = req.body;

  axios({
    method: "POST",
    url: "https://khalti.com/api/v2/payment/verify/",
    headers: {
      Authorization: "Key test_secret_key_ecf3bb0ded294f38b956211f60009ed5",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    data: {
      token: token,
      amount: amount,
    },
  })
    .then((result) => {
      res.status(200).json({ status: true, data: result, message: "success" });
    })
    .catch((err) => {
      res.status(402).json({ status: false, data: err, message: "failed" });
    });
}

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      VerifyPayment(req, res);
      break;
    case "GET":
      res
        .status(200)
        .json({ status: true, data: "khalti get", message: "success" });

      break;
  }
  // mongoose.connection.close()
}
