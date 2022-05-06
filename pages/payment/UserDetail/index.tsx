import { Box, Center, Divider, HStack, Input, VStack } from "@chakra-ui/react";
import {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldValues,
  FieldErrors,
} from "react-hook-form";
import BTN from "../../../Component/Button";
import Field from "./../../../Component/Field/InputField/index";
interface IProps {
  register?: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  quantity?: string;
  totalPrice?: string;
}
export default function UserDetail({
  register,
  errors,
  quantity,
  totalPrice,
}: IProps) {
  return (
    <Box w={["100%", "100%", "100%", "100%"]}>
      <Box
        color={"white"}
        textAlign={"center"}
        fontSize={"larger"}
        fontWeight={"bold"}
      >
        User Information
      </Box>
      <Box>
        <Field
          h={"8"}
          _focus={{ outline: "none" }}
          bg={"white"}
          label={"Fill Name"}
          w={"100%"}
          register={register}
          errors={errors}
          placeholder="Enter Your Name"
          type="text"
          fieldName="fullName"
        />
      </Box>
      <Box>
        <Field
          h={"8"}
          _focus={{ outline: "none" }}
          placeholder="Enter Your address"
          bg={"white"}
          label={"Address"}
          errors={errors}
          register={register}
          w={"100%"}
          type="text"
          fieldName="address"
        />
      </Box>
      <Box>
        <Field
          h={"8"}
          _focus={{ outline: "none" }}
          bg={"white"}
          label={"Mobile No"}
          register={register}
          errors={errors}
          placeholder="Enter Your Mobile No."
          w={"100%"}
          fieldName="mobileNo"
          type="text"
        />
      </Box>
      <Box>
        <Field
          h={"9"}
          _focus={{ outline: "none" }}
          bg={"white"}
          label={"Email"}
          register={register}
          errors={errors}
          placeholder="Enter Your Email"
          w={"100%"}
          fieldName="email"
          type="text"
        />
      </Box>
      <VStack w={"100%"} p={"2"}>
        <HStack justify={"space-between"} width={"100%"}>
          <Divider w={"30%"} border={"2px"} borderColor={"white"} />
          <Box
            w={"40%"}
            fontSize={"large"}
            fontWeight={"bold"}
            color={"white"}
            textAlign={"center"}
          >
            Order
          </Box>
          <Divider w={"30%"} border={"2px"} borderColor={"white"} />
        </HStack>
        <HStack w={"100%"} justify={"space-between"}>
          <Box fontWeight={"bold"} color={"white"}>
            Quantity
          </Box>
          <Box color={"white"} fontWeight={"semibold"}>
            {quantity} Unit/KG
          </Box>
        </HStack>
        <HStack w={"100%"} justify={"space-between"}>
          <Box fontWeight={"bold"} color={"white"}>
            Total Price
          </Box>
          <Box color={"white"} fontWeight={"semibold"}>
            Rs. {totalPrice}{" "}
          </Box>
        </HStack>
        <Center w={"100%"}>
          <BTN
            // disable={step === 3 ? true : false}
            borderRadius={"full"}
            _disabled={{ bg: "green.500" }}
            marginTop={"8"}
            bg={"green.700"}
            _hover={{ bg: "green.600" }}
            w={"100%"}
            name="Next"
            type="submit"
          />
        </Center>
      </VStack>
    </Box>
  );
}
