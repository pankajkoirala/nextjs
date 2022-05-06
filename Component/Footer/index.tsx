import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { getIcon } from "../../Utils/IconManager";

export default function Footer() {
  return (
    <Container
      paddingX={["3", "3", "5", "5"]}
      paddingY={"3"}
      bg={"green.600"}
      h={"auto"}
      maxW={"100vw"}
    >
      <Flex alignItems={"center"} w={"100%"} flexDir={"column"} color={"white"}>
        <VStack w={"50%"} textAlign={"center"}>
          <Box fontWeight={"bold"}>Online Tea Shop</Box>
          <Box>
            Tea contains “polyphenols” that repair cells and in doing so, may
            help our bodies fight help us fend off cardiovascular diseases,
            cancers, osteoporosis, diabetes mellitus and other maladies.
          </Box>
          <HStack>
            {getIcon("facebook")}
            {getIcon("instagram")}
            {getIcon("google")}
            {getIcon("youtube")}
            {getIcon("location")}
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
}
