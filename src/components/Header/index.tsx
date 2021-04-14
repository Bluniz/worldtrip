import { Box, Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h={["300px", "100px"]}
      p={[5, 10]}
      w="100%"
    >
      <Image src="/images/Logo.svg" alt="logo" />
    </Flex>
  );
}
