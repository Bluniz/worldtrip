import { Flex, Box, Text, Heading, Image, VStack } from "@chakra-ui/react";

export interface CardProps {
  image: string;
  icon: string;
  title: string;
  subtitle: string;
}

export function Card({ image, icon, title, subtitle }: CardProps) {
  return (
    <Box bg="gray.50" border="1px solid #FFBA08" borderRadius="6px 6px 0px 0px">
      <Image src={image} alt={title} w="100%" />
      <Flex align="center" padding="20px" justify="space-around">
        <VStack align="left">
          <Heading fontSize="20px"> {title}</Heading>
          <Text color="gray.500">{subtitle}</Text>
        </VStack>
        <Image src={icon} alt={subtitle} />
      </Flex>
    </Box>
  );
}
