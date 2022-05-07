import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Spinner,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { getIcon } from "../../Utils/IconManager";
import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import { useForm } from "react-hook-form";
import { validationSchema } from "../../Utils/validation/validation/userInformationValidate";
import Esewa from "./PaymentMode";
import { useMutation } from "react-query";
import { fetchUserList } from "../../Utils/apiList";
import { useYupValidationResolver } from "../../Utils/validation";
import Success from "./paymentResponse/success";
import Error from "./paymentResponse/error";
import { addUserInfo, deleteUserInfo } from "../../redux/action/userInfo";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../redux/accessors";

export default function Payment() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { query } = router;
  console.log("🚀 ~ file: [params].tsx ~ line 32 ~ Payment ~ query", query);
  console.log("date date", Date.now());

  const resolver = useYupValidationResolver(validationSchema);
  const [step, setStep] = useState(null);
  const userData = useSelector(userInfo);

  useEffect(() => {
    if (query?.params === "USER_DETAIL") {
      setStep(query?.params);
    }
    if (query?.params === "PAYMENT_SUCCESS") {
      postUser(userData);
      dispatch(deleteUserInfo());
    }
  }, [query]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  const { data, mutateAsync: postUser } = useMutation(
    "CreateUser",
    fetchUserList,
    {
      onSuccess: () => setStep(query?.params),
    }
  );

  const onSubmit = (data) => {
    // setuserInfo(data);
    dispatch(addUserInfo(data));
    setStep("PAYMENT_METHOD");
  };
  const paymentStep = (key) => {
    switch (key) {
      case "USER_DETAIL":
        return (
          <UserDetail
            register={register}
            errors={errors}
            quantity={query?.quantity as string}
            totalPrice={query?.totalPrice as string}
          />
        );

      case "PAYMENT_METHOD":
        return <Esewa />;
      case "PAYMENT_SUCCESS":
        return <Success />;
      case "PAYMENT_FAILED":
        return <Error setStep={setStep} />;
      default:
        return (
          <VStack minH={"96"} alignItems={"center"} justifyContent={"center"}>
            <Spinner size="xl" color="white" />
            <Box fontSize={"lg"} fontWeight={"bold"} color={"white"}>
              Loading...
            </Box>
          </VStack>
        );
    }
  };
  return (
    <Container
      maxW={"100vw"}
      minH={["auto", "auto", "calc(100vh - 180px)", "calc(100vh - 180px)"]}
      background={"green.100"}
      paddingX={"4"}
      pb={"4"}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
          <HStack
            justify={"space-between"}
            m={"6"}
            w={["100%", "100%", "50%", "50%"]}
          >
            <Flex opacity={1} fontWeight={"bold"} color={"green.700"}>
              step 1
            </Flex>
            <Box>{getIcon("next")}</Box>
            <Box
              opacity={
                step === "PAYMENT_METHOD" || step === "PAYMENT_SUCCESS"
                  ? 1
                  : 0.5
              }
              fontWeight={"bold"}
              color={"green.700"}
            >
              Step 2
            </Box>
            <Box>{getIcon("next")}</Box>
            <Box
              opacity={step === "PAYMENT_SUCCESS" ? 1 : 0.5}
              fontWeight={"bold"}
              color={"green.700"}
            >
              Step 3
            </Box>
          </HStack>
        </Center>

        <Center>
          <Box
            minH={"96"}
            bg={"green.600"}
            padding={"4"}
            borderRadius={"2xl"}
            boxShadow={"dark-lg"}
            w={["95%", "95%", "50%", "30%"]}
          >
            {paymentStep(step)}
          </Box>
        </Center>
      </form>
    </Container>
  );
}
