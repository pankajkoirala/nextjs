import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MouseEventHandler } from "react";

function ActiveLink(props: {
  children: React.ReactNode;
  href: string;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) {
  const { children, href, onClick } = props;
  const router = useRouter();
  const style: React.CSSProperties | undefined = {
    cursor: "pointer",
    padding: "0px 10px 0px 10px",
    borderBottom: router.asPath === href ? "2px solid white" : "",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
    onClick && onClick(e);
  };

  return (
    <Link href={href}>
      <Flex
        justify={"center"}
        alignContent="center"
        _hover={{ borderBottom: "2px solid white", bg: "green.900" }}
        onClick={handleClick}
        h="100%"
        style={style}
        alignItems="center"
        margin={[
          "2px 10px 2px 10px",
          "2px 10px 2px 10px",
          "0px 10px 0px 10px",
          "0px 10px 0px 10px",
        ]}
      >
        {children}
      </Flex>
    </Link>
  );
}

export default ActiveLink;
