import { Box, Center, Flex, Image } from "@chakra-ui/react";
import KhaltiCheckout from "khalti-checkout-web";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

export default function Esewa() {
  const router = useRouter();
  const { query } = router;
  console.log("🚀 ~ file: index.tsx ~ line 10 ~ Esewa ~ query", query);

  //----------------------------------------esewa---------------------------------------

  var path = "https://uat.esewa.com.np/epay/main";
  var params = {
    amt: query?.totalPrice,
    psc: 0,
    pdc: 100,
    txAmt: 0,
    tAmt: parseInt(query?.totalPrice as string) + 100,
    pid: Math.random(),
    scd: "EPAYTEST",
    su: "https://teashopnepal.netlify.app/payment/PAYMENT_SUCCESS",
    fu: "https://teashopnepal.netlify.app/payment/PAYMENT_FAILED",
    // su: "http://localhost:3000/payment/PAYMENT_SUCCESS",
    // fu: "http://localhost:3000/payment/PAYMENT_FAILED",
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
    publicKey: "test_public_key_a88f891886f54c18b6774d67a76d843c",
    productIdentity: Math.random(),
    productName: "test",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        //payment verification from merchant side
        // axios({
        //   method: "POST",
        //   url: "https://teashopnepal.netlify.app/api/khalti",
        //    url: "http://localhost:3000/api/khalti",
        //   data: { token: payload.token, amount: payload.amount },
        // })
        //   .then((res) => {
        //     console.log("gandu", res);

        //   })
        //   .catch((err) => {
        //     console.log(err.response);
        //   });
        router.push({
          pathname: `/payment/PAYMENT_SUCCESS`,
        });
      },
      onError(error) {
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
      // "MOBILE_BANKING",
      // "EBANKING",
      // "CONNECT_IPS",
      // "SCT",
    ],
  };

  let checkout = typeof window !== "undefined" && new KhaltiCheckout(config);
  const khalti = () => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({
      // amount: (parseInt(query?.totalPrice as string) + 100) * 100,
      amount: 10000,
    });
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
