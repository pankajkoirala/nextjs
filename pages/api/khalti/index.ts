import axios from "axios";

function VerifyPayment(req, res) {
  const { token, amount } = res.body;
  axios({
    method: "POST",
    url: "https://khalti.com/api/v2/payment/verify/",
    headers: {
      Authorization: "Key test_secret_key_375c7b8d4572469c8d83833fcd933255",
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
      //   getAll(req, res);
      break;
  }
  // mongoose.connection.close()
}
