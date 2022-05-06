import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { getIcon } from "../../../Utils/IconManager";

export default function Search() {
  return (
    <InputGroup>
      <Input
        h={"8"}
        border="none"
        width={"0px"}
        cursor={"pointer"}
        _focus={{
          minW: ["100px", "100px", "200px", "200px"],
          transition: "0.1s",
          border: "1px solid green.200",
          bg: "white",
        }}
        type="text"
        placeholder="Search"
      />
      <InputRightElement
        height={"100%"}
        pointerEvents="none"
        children={<Box>{getIcon("search")}</Box>}
      />
    </InputGroup>
  );
}
