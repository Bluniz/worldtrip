import { Box, Flex, Image, Heading, VStack, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box w="100%" h="320">
      <Flex
        align="center"
        justify="space-evenly"
        bgImage="url('/images/bannerBG.svg')"
        bgRepeat="no-repeat"
        h="280"
        maxH="280"
        w="100%"
      >
        <VStack align="flex-start">
          <Heading color="gray.100" mb={4} size="lg" fontWeight="Medium">
            5 Continentes,
            <br /> infinitas possibilidades.
          </Heading>

          <Text color="gray.100" fontWeight="normal" fontSize="xl">
            Chegou a hora de tirar do papel a viagem que você <br />
            sempre sonhou.
          </Text>
        </VStack>
        <Image
          src="/images/Airplane.svg"
          alt="airplane"
          w="400px"
          h="250px"
          paddingTop="10px"
          marginTop="70px"
        />
      </Flex>
    </Box>
  );
}
