import { Box, Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" align="center" justify="center" h="100px">
      <Image src="/images/Logo.svg" alt="logo" />
    </Flex>
  );
}
