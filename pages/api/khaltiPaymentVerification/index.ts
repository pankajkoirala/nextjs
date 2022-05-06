import axios from "axios";

export default function handler(req, res) {
  const { method } = req;

  axios({
    method: "POST",
    url: "https://khalti.com/api/v2/payment/verify",
    headers: {
      Authorization: "Key test_secret_key_375c7b8d4572469c8d83833fcd933255",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
    data: {
      token: "mU8DsNadH3f4PpFCuKVkCK",
      amount: 1000,
    },
  })
    .then((result) => {
      res
        .status(200)
        .json({ name: "khalti payment verification", data: result });
      console.log("gandu", result);
    })
    .catch((err) => {
      res.status(402).json({ name: "khalti payment verification", data: err });
      console.log("🚀 ~ file: index.ts ~ line 27 ~ handler ~ err", err);
    });
}
