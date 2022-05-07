import {
  Box,
  Button,
  Container,
  Image,
  Text,
  VStack,
  HStack,
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
          bgImage="https://cdn.pixabay.com/photo/2020/07/28/20/18/field-5446230_960_720.jpg"
          bgRepeat={"no-repeat"}
          bgPosition="center"
          bgSize={"cover"}
          p={0}
          m={0}
        >
          <motion.div style={{ scale }}>
            <VStack justify={"center"} textAlign={"center"} color={"white"}>
              <Box>
                <Text pt={"24"} fontSize={48}>
                  Wellcome To The Nepal First Tea Garden
                </Text>
                <Text>
                  We provide all kind of special tea which are produce locally
                  with all grade at most reasonable price.
                </Text>
                <Text>Please click below to order</Text>
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
        <VStack w={"100%"} paddingY={"4"}>
          <Text
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
