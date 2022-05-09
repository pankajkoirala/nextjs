import {
  Box,
  Button,
  Container,
  Image,
  Text,
  VStack,
  HStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import BTN from "./../../Component/Button/index";
import { useRouter } from "next/router";
import { getIcon } from "../../Utils/IconManager";

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const constraintsRef = useRef(null);
  const router = useRouter();

  const scale = useTransform(scrollYProgress, [1, 0], [0.5, 1]);
  const product = [
    {
      name: "Tea",
      description:
        "It takes around 2,000 tiny leaves to make just one poundof finished tea.",
      image:
        "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVhJTIwY3VwfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
    {
      name: "Churpi",
      description:
        "Churpi is typically made within the mountain region of Nepal. Yak milk is typically preferred to form Churpi.",

      image:
        "https://cdn.tasteatlas.com/images/ingredients/26bf39e64a9441f4824c1a682171528b.jpg?w=600&h=450",
    },
    {
      name: "Aalichi",
      description:
        " Cardamom is rich in essential oils and has strong antioxidant and diuretic properties. It has an antibacterial and anti-inflammatory effect.",
      image:
        "https://cdn3.eyeem.com/thumb/e505daefe2cb18a0e9628c868babaef479c9b9c7-1525602258041/w/800",
    },
    {
      name: "Akabara",
      description:
        "Dalle Khursani has a range of 1,00,000 to 3,50,000 SHU (Scoville Heat Units) and is considered one of the hottest chillies in the world.",
      image: "https://munaabazar.com/wp-content/uploads/2021/05/60.jpg",
    },
  ];

  return (
    <motion.div ref={constraintsRef}>
      <Container
        minH={"calc(100vh - 180px)"}
        p={0}
        m={0}
        maxW={"full"}
        background={"green.100"}
      >
        <Box
          w={"100%"}
          minH={"calc(100vh - 48px)"}
          bgImage="/home.jpg"
          bgRepeat={"no-repeat"}
          bgPosition="center"
          bgSize={"cover"}
          p={0}
          m={0}
        >
          <motion.div style={{ scale }}>
            <VStack justify={"center"} textAlign={"center"} color={"white"}>
              <Box>
                <Text pt={"24"} fontStyle={"oblique"} fontSize={48}>
                  Wellcome To The Nepal First Tea Garden
                </Text>
                <Text fontStyle={"oblique"}>
                  We provide all kind of special tea which are produce locally
                  with all grade at most reasonable price.
                </Text>
                <Text fontStyle={"oblique"}>Please click below to order</Text>
              </Box>
              <Box>
                <Image
                  h={"40"}
                  w={"40"}
                  src={
                    "https://c.tenor.com/Uq_-tDUQlJkAAAAi/hot-beverage-joypixels.gif"
                  }
                />
              </Box>
              <BTN
                h={"12"}
                w={"40"}
                borderRadius={"full"}
                bg={"green.700"}
                _hover={{ bg: "green.600" }}
                name={"Click me to Order"}
                onClick={() => router.push("/product")}
              />
            </VStack>
          </motion.div>
        </Box>

        <Box paddingY={"6"}>
          <Center>
            <Text
              textShadow={"2px 2px 5px black"}
              textAlign={"center"}
              color={"green.700"}
              fontSize={"4xl"}
              fontStyle={"oblique"}
              fontWeight={"bold"}
            >
              Products
            </Text>
          </Center>
          <Flex
            justify={"space-evenly"}
            flexDir={["column", "column", "row", "row"]}
            paddingY={"4"}
          >
            {product?.map((each, i) => (
              <Box
                key={i}
                marginY={["2", "2", "0", "0"]}
                w={["100%", "100%", "20%", "20%"]}
                pos={"relative"}
                _hover={{
                  "#test": { h: "100%" },
                }}
                h={"80"}
              >
                <Image
                  // borderRadius={"xl"}
                  h={"100%"}
                  w={"100%"}
                  // display={"block"}
                  fit={"cover"}
                  src={each?.image}
                />
                <Box
                  id="test"
                  pos={"absolute"}
                  bottom={0}
                  left={0}
                  right={0}
                  bg={"rgba(0, 0, 0, 0.8)"}
                  overflow={"hidden"}
                  w={"100%"}
                  transition={"0.5s ease"}
                  h={"0%"}
                >
                  <Flex
                    justify={"center"}
                    alignItems={"center"}
                    h={"100%"}
                    w={"100%"}
                    color={"white"}
                  >
                    <Box>
                      <Text
                        fontWeight={"bold"}
                        textAlign={"center"}
                        fontSize={"2xl"}
                        fontStyle={"oblique"}
                      >
                        {each?.name}
                      </Text>
                      <Text fontStyle={"oblique"} textAlign={"center"}>
                        {each?.description}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            ))}
          </Flex>
        </Box>

        <VStack minH={"96"}>
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row"]}
            alignItems={"flex-start"}
            w={"100%"}
          >
            <VStack p={"4"} w={["100%", "100%", "50%", "50%"]}>
              <Box>
                <Text
                  fontStyle={"oblique"}
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  color={"green.700"}
                  textAlign={"left"}
                >
                  Who We Are
                </Text>
              </Box>
              <Box
                fontStyle={"oblique"}
                textAlign={"justify"}
                fontSize={"large"}
                lineHeight={"140%"}
              >
                Tea is an aromatic beverage prepared by pouring hot or boiling
                water over cured or fresh leaves of Camellia sinensis, an
                evergreen shrub native to China, India and other East Asian
                countries. Tea is also rarely made from the leaves of Camellia
                taliensis.
              </Box>
            </VStack>
            <Box h={"100%"} w={["100%", "100%", "50%", "50%"]}>
              <Image h={"100%"} w={"100%"} src="/teaStan.jpg" />
            </Box>
          </Flex>
        </VStack>
        <VStack minH={"96"}>
          <Flex
            flexDir={["column", "column", "row", "row"]}
            alignItems={"flex-start"}
            w={"100%"}
          >
            <Box h={"100%"} w={["100%", "100%", "50%", "50%"]}>
              <Image h={"100%"} w={"100%"} src="/teaPlant.jpg" />
            </Box>

            <VStack p={"4"} w={["100%", "100%", "50%", "50%"]}>
              <Box>
                <Text
                  fontStyle={"oblique"}
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  color={"green.700"}
                  textAlign={"left"}
                >
                  Who We Are
                </Text>
              </Box>
              <Box
                fontStyle={"oblique"}
                textAlign={"justify"}
                fontSize={"large"}
                lineHeight={"140%"}
              >
                Tea is an aromatic beverage prepared by pouring hot or boiling
                water over cured or fresh leaves of Camellia sinensis, an
                evergreen shrub native to China, India and other East Asian
                countries. Tea is also rarely made from the leaves of Camellia
                taliensis.
              </Box>
            </VStack>
          </Flex>
        </VStack>

        <VStack minH={"96"}>
          <Flex
            flexDir={["column-reverse", "column-reverse", "row", "row"]}
            alignItems={"flex-start"}
            w={"100%"}
          >
            <VStack p={"4"} w={["100%", "100%", "50%", "50%"]}>
              <Box>
                <Text
                  fontStyle={"oblique"}
                  fontSize={"2xl"}
                  fontWeight={"bold"}
                  color={"green.700"}
                  textAlign={"left"}
                >
                  Who We Are
                </Text>
              </Box>
              <Box
                fontStyle={"oblique"}
                textAlign={"justify"}
                fontSize={"large"}
                lineHeight={"140%"}
              >
                Tea is an aromatic beverage prepared by pouring hot or boiling
                water over cured or fresh leaves of Camellia sinensis, an
                evergreen shrub native to China, India and other East Asian
                countries. Tea is also rarely made from the leaves of Camellia
                taliensis.
              </Box>
            </VStack>
            <Box h={"100%"} w={["100%", "100%", "50%", "50%"]}>
              <Image h={"100%"} w={"100%"} src="/hotTea.jpg" />
            </Box>
          </Flex>
        </VStack>

        <VStack bg={"white"} w={"100%"} paddingY={"4"}>
          <Text
            textShadow={"2px 2px 5px black"}
            textAlign={"center"}
            color={"green.700"}
            fontSize={"4xl"}
            fontStyle={"oblique"}
            fontWeight={"bold"}
          >
            Payment Methods
          </Text>
          <HStack w={"100%"} pt={"8"} mb={"4"} justify={"space-around"}>
            <motion.div
              animate={{ x: 100 }}
              initial={{ x: -100 }}
              transition={{ duration: 1 }}
            >
              <Box>{getIcon("cashPayment")}</Box>
            </motion.div>
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{ duration: 1 }}
            >
              <Box>{getIcon("phonePay")}</Box>
            </motion.div>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              transition={{ duration: 1 }}
            >
              <Box>{getIcon("cash")}</Box>
            </motion.div>
          </HStack>
        </VStack>
      </Container>
      {/* asfasgsagsagasgags */}
    </motion.div>
  );
}
{
  /* <motion.div ref={constraintsRef}>
    <motion.div
      drag
      dragConstraints={constraintsRef}
    />
  </motion.div> */
}
