import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { getIcon } from "../../Utils/IconManager";
const footerImage = "./../../public/teaGarden.png";

export default function Footer() {
  return (
    <Container
      paddingX={["3", "3", "5", "5"]}
      paddingY={"3"}
      // bg={"green.600"}
      minH={"52"}
      maxW={"100vw"}
      backgroundImage={"/teaGarden.png"}
    >
      <Flex
        alignItems={"center"}
        justify={"center"}
        w={"100%"}
        h={"100%"}
        flexDir={"column"}
        color={"white"}
      >
        <VStack w={"50%"} textAlign={"center"}>
          <Box fontWeight={"bold"} fontSize={"2xl"} fontStyle={"oblique"}>
            Online Tea Shop
          </Box>
          <Text
            fontWeight={"bold"}
            color={"white"}
            fontSize={"large"}
            align={"center"}
            fontStyle={"oblique"}
          >
            Tea contains “polyphenols” that repair cells and in doing so, may
            help our bodies fight help us fend off cardiovascular diseases,
            cancers, osteoporosis, diabetes mellitus and other maladies.
          </Text>
          <HStack>
            <Flex
              justify={"center"}
              alignItems={"center"}
              bg={"green.700"}
              h={"12"}
              w={"12"}
              borderRadius={"full"}
            >
              {getIcon("facebook")}
            </Flex>
            <Flex
              justify={"center"}
              alignItems={"center"}
              bg={"green.700"}
              h={"12"}
              w={"12"}
              borderRadius={"full"}
            >
              {getIcon("instagram")}
            </Flex>

            <Flex
              justify={"center"}
              alignItems={"center"}
              bg={"green.700"}
              h={"12"}
              w={"12"}
              borderRadius={"full"}
            >
              {getIcon("google")}
            </Flex>

            <Flex
              justify={"center"}
              alignItems={"center"}
              bg={"green.700"}
              h={"12"}
              w={"12"}
              borderRadius={"full"}
            >
              {getIcon("youtube")}
            </Flex>

            <Flex
              justify={"center"}
              alignItems={"center"}
              bg={"green.700"}
              h={"12"}
              w={"12"}
              borderRadius={"full"}
            >
              {getIcon("location")}
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </Container>
  );
}
