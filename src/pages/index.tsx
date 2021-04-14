import { Flex, Text, VStack } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex w="100%" h="auto" direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <VStack justify="center" pt={10} marginBottom="20px" w="100%">
        <Text fontWeight="medium" fontSize={["15px, 36px"]}>
          Vamos nessa?
        </Text>
        <Text fontWeight="medium" fontSize="36px" textAlign="center">
          Então escolha seu continente
        </Text>
      </VStack>
      <Carousel />
    </Flex>
  );
}
