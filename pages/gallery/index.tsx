import { Box, Container } from "@chakra-ui/react";

export default function Blog() {
  return (
    <Container
      maxW={"100vw"}
      minH={"calc(100vh - 180px)"}
      background={"green.100"}
    >
      <Box>blog</Box>
    </Container>
  );
}
