import { Box, Center, Flex, Image } from "@chakra-ui/react";
import KhaltiCheckout from "khalti-checkout-web";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

export default function Esewa() {
  const router = useRouter();

  //----------------------------------------esewa---------------------------------------

  var path = "https://uat.esewa.com.np/epay/main";
  var params = {
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: Math.random(),
    scd: "EPAYTEST",
    su: "http://localhost:3000/payment/PAYMENT_SUCCESS",
    fu: "http://localhost:3000/payment/PAYMENT_FAILED",
  };

  function post(path, params) {
    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  }
  //----------------------------------------khalti---------------------------------------

  let config = {
    // replace this key with yours
    publicKey: "test_public_key_041bc167df62409fa852d5931713e17a",
    productIdentity: Math.random(),
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        console.log(
          "🚀 ~ file: index.tsx ~ line 51 ~ onSuccess ~ payload",
          payload
        );
        axios({
          method: "POST",
          url: "https://khalti.com/api/v2/payment/verify/",
          headers: {
            Authorization: "test_secret_key_375c7b8d4572469c8d83833fcd933255",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          data: { token: payload.token, amount: payload.amount },
        }).then((res) => {
          console.log("gandu", res);

          router.push({
            pathname: `/payment/PAYMENT_SUCCESS`,
          });
        });
      },
      // onError handler is optional
      onError(error) {
        console.log(
          "🚀 ~ file: index.tsx ~ line 53 ~ onError ~ error",
          JSON.stringify(error?.response)
        );
        // handle errors
        router.push({
          pathname: `/payment/PAYMENT_FAILED`,
        });
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: [
      "KHALTI",
      // "EBANKING",
      "MOBILE_BANKING",
      // "CONNECT_IPS",
      // "SCT",
    ],
  };

  let checkout = typeof window !== "undefined" && new KhaltiCheckout(config);
  const khalti = () => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: 1000 });
  };
  return (
    <Box w={"100%"}>
      <Box
        height={"20%"}
        color={"white"}
        textAlign={"center"}
        fontSize={"2xl"}
        paddingY={"8"}
        fontWeight={"bold"}
      >
        Payment Mode
      </Box>
      <Flex flexWrap={"wrap"} w={"100%"} mt={"8"}>
        <Center w={"50%"} cursor={"pointer"} onClick={() => post(path, params)}>
          <Image
            src="https://p7.hiclipart.com/preview/261/608/1001/esewa-zone-office-bayalbas-google-play-iphone-iphone-thumbnail.jpg"
            height={"100px"}
            width={"100px"}
            borderRadius={"full"}
          />
        </Center>
        <Center w={"50%"} cursor={"pointer"} onClick={() => khalti()}>
          <Image
            src="https://www.trendingnetnepal.com/wp-content/uploads/2019/04/khaltiwa.png"
            height={"100px"}
            width={"100px"}
            borderRadius={"full"}
          />
        </Center>
      </Flex>
    </Box>
  );
}
