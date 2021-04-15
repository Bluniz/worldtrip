import {
  Box,
  Flex,
  Image,
  Heading,
  VStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box w="100%" h="320">
      <Flex
        align="center"
        justify="space-evenly"
        bgImage="url('/images/bannerBG.svg')"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="280"
        maxH="280"
      >
        <VStack align="flex-start" margin={!isWideVersion && "10px"}>
          <Heading
            color="gray.100"
            mb={4}
            size="lg"
            fontWeight="Medium"
            maxW="238px"
          >
            5 Continentes, infinitas possibilidades.
          </Heading>

          <Text color="gray.100" fontWeight="normal" fontSize="xl" maxW="333px">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </VStack>
        {isWideVersion && (
          <Image
            src="/images/Airplane.svg"
            alt="airplane"
            w="400px"
            h="250px"
            paddingTop="10px"
            marginTop="70px"
          />
        )}
      </Flex>
    </Box>
  );
}
