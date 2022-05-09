import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import BTN from "./../../Component/Button/index";
import { useState } from "react";
import { useRouter } from "next/router";
import SELECT from "./../../Component/Field/Select/index";
import { useForm } from "react-hook-form";

export default function Product() {
  const router = useRouter();
  const { register, watch, control } = useForm();
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "ILLAM SPECIAL TEA",
      color: "red",
      i: "https://m.media-amazon.com/images/I/81D0zC2A7wL._SL1500_.jpg",
      pricePerUnit: 1200,
      totalPrice: 1200,
      quantity: 1,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      id: 2,
      name: "CHHURPI",
      color: "blue",
      quantity: 1,
      i: "https://assets.petco.com/petco/image/upload/c_pad,dpr_1.0,f_auto,q_auto,h_636,w_636/c_pad,h_636,w_636/2729840-center-2",
      pricePerUnit: 1400,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      totalPrice: 1400,
    },
    {
      id: 3,
      name: "ALAICHI",
      color: "pink",
      quantity: 1,
      i: "https://static-01.daraz.com.np/p/c34e32176790da71bc4f80f8b748cec5.jpg",
      pricePerUnit: 1000,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      totalPrice: 1000,
    },
    {
      id: 4,
      name: "AKABARA",
      color: "pink",
      quantity: 1,
      i: "https://munaabazar.com/wp-content/uploads/2021/05/60.jpg",
      pricePerUnit: 1000,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      totalPrice: 1000,
    },
  ]);

  return (
    <Container
      maxW={"100vw"}
      minH={"calc(100vh - 180px)"}
      background={"green.100"}
      p={0}
    >
      {productList?.map((each, i) => (
        <Flex
          w={"100%"}
          height={["auto", "auto", "80vh", "80vh"]}
          // bg={"white"}
          borderX={"1px solid green.100"}
          flexDir={
            i % 2 === 0
              ? ["column", "column", "row", "row"]
              : ["column", "column", "row-reverse", "row-reverse"]
          }
        >
          <Box w={["100%", "100%", "70%", "70%"]}>
            <Image
              // objectFit="cover"
              h={"100%"}
              w={"100%"}
              bgRepeat={"no-repeat"}
              bgPosition="center"
              src={each?.i}
            />
          </Box>
          <Flex
            flexDir={"column"}
            h={"100%"}
            bg={"green.100"}
            p={"4"}
            w={["100%", "100%", "30%", "30%"]}
            justify={"space-between"}
          >
            <Box>
              <Box
                fontStyle={"oblique"}
                color={"green.700"}
                fontSize={"2xl"}
                fontWeight={"bold"}
              >
                {each?.name}
              </Box>
              <Box
                fontStyle={"oblique"}
                color={"green.700"}
                fontWeight={"bold"}
                marginY={"2"}
              >
                Rs. {each?.pricePerUnit}
              </Box>
              <Text fontStyle={"oblique"} mt={"8"}>
                {each?.about}
              </Text>
            </Box>
            <Box id="test"></Box>
            <Flex w={"100%"} justify={"center"} flexDir={"column"}>
              <HStack justify={"space-between"} marginY={"4"}>
                <VStack w={"50%"}>
                  <Text fontStyle={"oblique"}>Quantity</Text>

                  <SELECT
                    list={[
                      {
                        label: "1",
                        value: "1",
                      },
                      {
                        label: "2",
                        value: "2",
                      },
                      {
                        label: "3",
                        value: "3",
                      },
                      {
                        label: "4",
                        value: "4",
                      },
                    ]}
                    w={"100%"}
                    control={control}
                    fieldName={"test"}
                    register={register}
                    customeOnChange={(e: any) => {
                      let newArray = [];
                      let updateObj = {
                        ...each,
                        totalPrice: parseInt(e) * each.pricePerUnit,
                        quantity: parseInt(e),
                      };
                      productList?.map((item) => {
                        if (item.id === each.id) {
                          newArray.push(updateObj);
                        } else {
                          newArray.push(item);
                        }
                      });
                      setProductList(newArray);
                    }}
                    defaultValue={"1"}
                    _focus={{ outline: "none" }}
                    placeholder="Select Quantity"
                    h={"8"}
                  />
                </VStack>
                <VStack w={"50%"}>
                  <Text fontStyle={"oblique"}>Amount</Text>
                  <Input
                    disabled
                    _disabled={{ bg: "white" }}
                    value={each.totalPrice}
                    w={"100%"}
                    h={"8"}
                    bg={"white"}
                    _focus={{ outline: "none" }}
                  />
                </VStack>
              </HStack>
              <Center>
                <BTN
                  borderRadius={"full"}
                  bg={"green.700"}
                  _hover={{ bg: "green.600" }}
                  w={"80%"}
                  name="BUY"
                  onClick={() =>
                    router.push({
                      pathname: `/payment/USER_DETAIL`,
                      query: each,
                    })
                  }
                />
              </Center>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Container>
  );
}
