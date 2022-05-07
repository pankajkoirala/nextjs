import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { getIcon } from "../../../Utils/IconManager";

export default function Success() {
  const router = useRouter();

  return (
    <Flex flexDir={"column"} alignItems={"center"}>
      <Box fontWeight={"bold"} color={"white"} fontSize={"2xl"}>
        Payment
      </Box>
      <Box pt={"10%"} pb={"10%"}>
        {getIcon("success")}
      </Box>
      <Box fontWeight={"bold"} color={"white"} fontSize={"2xl"}>
        Successful
      </Box>
      <Text color={"white"} fontSize={"medium"} align={"center"}>
        We recived your purchase request. please check your mail for more
        information.
      </Text>
      <Box fontWeight={"bold"} color={"white"} fontSize={"xl"}>
        Thank You.
      </Box>
      <HStack
        onClick={() => router.push("/home")}
        _hover={{ textDecoration: "underline" }}
        pt={"5%"}
      >
        {getIcon("back")}
        <Text
          fontWeight={"bold"}
          cursor={"pointer"}
          color={"green.900"}
          fontSize={"small"}
        >
          GO BACK
        </Text>
      </HStack>
    </Flex>
  );
}
