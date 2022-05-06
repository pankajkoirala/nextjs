import { Box, Center, Container, Flex, HStack, VStack } from "@chakra-ui/react";
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

export default function Payment() {
  const router = useRouter();
  const { query } = router;

  const resolver = useYupValidationResolver(validationSchema);
  const [step, setStep] = useState(null);

  useEffect(() => {
    setStep(query?.params);
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
      onSuccess: () => setStep("2"),
    }
  );

  const onSubmit = (data) => {
    // postUser(data);
    setStep("PAYMENT_METHOD");
  };
  const paymentStep = (key) => {
    switch (key) {
      case "USER_DETAIL":
        return (
          <UserDetail
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            quantity={query?.quantity as string}
            totalPrice={query?.totalPrice as string}
          />
        );

      case "PAYMENT_METHOD":
        return <Esewa />;
      case "PAYMENT_SUCCESS":
        return <Box>Payment Successful</Box>;
      case "PAYMENT_FAILED":
        return <Box>Payment Failed</Box>;
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
            minH={"md"}
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
