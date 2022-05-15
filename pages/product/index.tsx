import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import BTN from "./../../Component/Button/index";
import { useState } from "react";
import { useRouter } from "next/router";
import SELECT from "./../../Component/Field/Select/index";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

export default function Product() {
  const router = useRouter();
  const { register, watch, control } = useForm();
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "ILLAM SPECIAL TEA",
      color: "red",
      i: "https://www.designerpeople.com/wp-content/uploads/2021/04/black-tea-packaging-design-3.jpg",
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
      i: "https://s.yimg.com/ny/api/res/1.2/cxg4959tjxSSx_BteaErmw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQwNA--/https://s.yimg.com/uu/api/res/1.2/WeK08i7tGX5R9JzIZx1S4g--~B/aD00ODU7dz03Njg7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_sg/News/AFP/edb9ff4b812946301fe0500162dd997ace0e11d1.jpg",
      pricePerUnit: 1400,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      totalPrice: 1400,
    },
    {
      id: 3,
      name: "ALAICHI",
      color: "pink",
      quantity: 1,
      i: "https://cookedbest.com/wp-content/uploads/2021/08/cardamom-pods-1024x768.jpg",
      pricePerUnit: 1000,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      totalPrice: 1000,
    },
    {
      id: 4,
      name: "AKABARA",
      color: "pink",
      quantity: 1,
      i: "https://foodiesfamily.com/wp-content/uploads/2022/03/Cascabel-Chile-Pepper-1024x683.jpeg",
      pricePerUnit: 1000,
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      totalPrice: 1000,
    },
  ]);

  return (
    <Container
      maxW={"100vw"}
      minH={"calc(100vh - 180px)"}
      background={"blackAlpha.900"}
      p={0}
    >
      <Flex
        flexDir={["column", "column", "row", "row"]}
        minH={"96"}
        width={"100%"}
      >
        <VStack width={["100%", "100%", "50%", "50%"]}>
          <Box h={"lg"} w={"100%"}>
            <Image
              padding={"8"}
              w={"100%"}
              h={"100%"}
              src="https://www.designerpeople.com/wp-content/uploads/2021/04/black-tea-packaging-design-3.jpg"
            />
          </Box>
          <Flex
            flexDir={"row"}
            justify={"space-around"}
            width={"100%"}
            paddingX={"8"}
            flexWrap={"wrap"}
            display={["none", "none", "flex", "flex"]}
          >
            <Box py={"2"} h={"150px"} width={"150px"}>
              <Image
                h={"100%"}
                src="https://www.designerpeople.com/wp-content/uploads/2021/04/black-tea-packaging-design-3.jpg"
              />
            </Box>
            <Box py={"2"} h={"150px"} width={"150px"}>
              <Image
                h={"100%"}
                src="https://www.designerpeople.com/wp-content/uploads/2021/04/black-tea-packaging-design-3.jpg"
              />
            </Box>
            <Box py={"2"} h={"150px"} width={"150px"}>
              <Image
                h={"100%"}
                src="https://www.designerpeople.com/wp-content/uploads/2021/04/black-tea-packaging-design-3.jpg"
              />
            </Box>
            <Box py={"2"} h={"150px"} width={"150px"}>
              <Image
                h={"100%"}
                src="https://www.designerpeople.com/wp-content/uploads/2021/04/black-tea-packaging-design-3.jpg"
              />
            </Box>
          </Flex>
        </VStack>
        <Flex
          marginY={["4", "4", "4", "4"]}
          justify={"flex-start"}
          flexDir={"column"}
          width={["100%", "100%", "50%", "50%"]}
        >
          <Box  paddingX={["8","8","0","0"]} w={['100%','100%','80%','80%']}>

          <Box
            fontStyle={"oblique"}
            fontWeight={"medium"}
            fontSize={"2xl"}
            color={"white"}
          >
            Tea plant
          </Box>

          <Box>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={10}
              size={30}
              activeColor="#ffd700"
            />
          </Box>

          <Box
            marginY={["4", "4", "4", "4"]}
            fontWeight={"bold"}
            fontSize={"2xl"}
            color={"white"}
            fontStyle={"oblique"}
          >
            Rs.1200 - Rs. 1500
          </Box>
          <Box
            fontWeight={"bold"}
            color={"white"}
            fontStyle={"oblique"}
            marginY={["4", "4", "4", "4"]}
            textAlign={'justify'}

           
          >
            Tea is an aromatic beverage prepared by pouring hot or boiling water
            over cured or fresh leaves of Camellia sinensis, an evergreen shrub
            native to China, India and other East Asian countries. Tea is also
            rarely made from the leaves of Camellia taliensis.
          </Box>
          <HStack  justify={"space-between"} marginY={"4"}>
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
                // customeOnChange={(e: any) => {
                //   let newArray = [];
                //   let updateObj = {
                //     ...each,
                //     totalPrice: parseInt(e) * each.pricePerUnit,
                //     quantity: parseInt(e),
                //   };
                //   productList?.map((item) => {
                //     if (item.id === each.id) {
                //       newArray.push(updateObj);
                //     } else {
                //       newArray.push(item);
                //     }
                //   });
                //   setProductList(newArray);
                // }}
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
                value={1200}
                w={"100%"}
                h={"8"}
                bg={"white"}
                _focus={{ outline: "none" }}
                />
            </VStack>
          </HStack>
                </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
