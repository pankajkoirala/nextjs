import {
  Box,
  Collapse,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import ActiveLink from "./NavLink";
import { getIcon } from "../../Utils/IconManager";
import Search from "../Field/Search";
import Link from "next/link";

export default function NavBar() {
  const navList = [
    {
      name: "Home",
      href: "/home",
    },
    {
      name: "Product",
      href: "/product",
    },
    {
      name: "Contact",
      href: "/contact",
    },

    {
      name: "Gallery",
      href: "/gallery",
    },
  ];
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Container
      pos={"fixed"}
      zIndex={999}
      bg={"green.700"}
      h={["auto", "auto", "12", "12"]}
      paddingX={["3", "3", "5", "5"]}
      paddingY={["3", "3", "0", "0"]}
      maxW={"100vw"}
    >
      <Flex
        display={["none", "none", "flex", "flex"]}
        h={"100%"}
        alignContent={"center"}
        justify={"space-between"}
      >
        <HStack>
          <Flex
            borderRadius={"full"}
            justify={"center"}
            align={"center"}
            h={"9"}
            w={"9"}
            bg={"white"}
            cursor={"pointer"}
          >
            <Link href={"/home"}>{getIcon("leaf")}</Link>
          </Flex>
        </HStack>
        <Flex
          justify={"center"}
          alignContent={"center"}
          align={"center"}
          h={"100%"}
        >
          {navList.map((each, index) => (
            <ActiveLink key={index} href={each?.href}>
              {each?.name}
            </ActiveLink>
          ))}
        </Flex>
        <HStack>
          <Box>
            <Search />
          </Box>
          <Box cursor={"pointer"}>{getIcon("cart")}</Box>
        </HStack>
      </Flex>
      <Flex
        display={["flex", "flex", "none", "none"]}
        flexDir={"column"}
        h={"100%"}
        alignContent={"center"}
        justify={"space-between"}
      >
        <HStack w={"100%"} justify={"space-between"}>
          <HStack>
            <Link href={"/home"}>
              <Flex
                borderRadius={"full"}
                justify={"center"}
                align={"center"}
                h={"9"}
                w={"9"}
                bg={"white"}
                cursor={"pointer"}
                onClick={isOpen ? onToggle : undefined}
              >
                {getIcon("leaf")}
              </Flex>
            </Link>
          </HStack>
          <HStack>
            <Box>
              <Search />
            </Box>
          </HStack>
          <HStack onClick={onToggle}>{getIcon("hamburger")}</HStack>
        </HStack>

        <Collapse in={isOpen} animateOpacity>
          <Flex
            transitionDelay={"0.5s"}
            justify={"center"}
            alignContent={"center"}
            align={"center"}
            flexDir={"column"}
            h={"100%"}
          >
            {navList.map((each, index) => (
              <ActiveLink onClick={onToggle} key={index} href={each?.href}>
                {each?.name}
              </ActiveLink>
            ))}
          </Flex>
        </Collapse>
      </Flex>
    </Container>
  );
}
