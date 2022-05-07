import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { getIcon } from "../../../Utils/IconManager";

export default function Error(props: { setStep: Dispatch<any> }) {
  const { setStep } = props;
  return (
    <Flex flexDir={"column"} alignItems={"center"}>
      <Box fontWeight={"bold"} color={"white"} fontSize={"2xl"}>
        Payment
      </Box>
      <Box pt={"10%"} pb={"10%"}>
        {getIcon("error")}
      </Box>
      <Box fontWeight={"bold"} color={"#ff4d4d"} fontSize={"2xl"}>
        Error
      </Box>
      <Text color={"white"} fontSize={"medium"} align={"center"}>
        We are unable to process your payment. Please try again.
      </Text>
      <Box fontWeight={"bold"} color={"white"} fontSize={"xl"}>
        Sorry.
      </Box>
      <HStack
        onClick={() => setStep("PAYMENT_METHOD")}
        _hover={{ textDecoration: "underline" }}
        pt={"5%"}
      >
        <Text
          fontWeight={"bold"}
          cursor={"pointer"}
          color={"green.900"}
          fontSize={"small"}
        >
          TRY AGAIN
        </Text>
      </HStack>
    </Flex>
  );
}
