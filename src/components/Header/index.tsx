import { Box, Flex, Image, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";
import Link from "next/link";

export function Header() {
  const router = useRouter();
  const isNotInHome = router.pathname !== "/";

  return (
    <Flex
      as="header"
      align="center"
      justify="center"
      h="100px"
      p={[5, 10]}
      w="100%"
      position="relative"
    >
      {isNotInHome && (
        <Box position="absolute" top="auto" bottom="auto" left="0" pl={10}>
          <Link href="/" passHref>
            <IconButton
              as="a"
              icon={<BsChevronLeft />}
              fontSize="16px"
              fontWeight="bold"
              aria-label="Go Back"
              bg="transparent"
            />
          </Link>
        </Box>
      )}
      <Image src="/images/Logo.svg" alt="logo" />
    </Flex>
  );
}
