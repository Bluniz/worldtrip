import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";

interface SwiperSlideContentProps {
  image: string;
  title: string;
  description: string;
}

export function SwiperSlideContent({ image, title, description }) {
  return (
    <Box position="relative">
      <Image src={image} alt={title} />
      <Flex
        maxH={450}
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        direction="column"
        align="center"
        justify="center"
        bg="rgba(0,0,0,0.5)"
      >
        <Heading color="gray.100">{title}</Heading>
        <Text color="gray.100">{description}</Text>
      </Flex>
    </Box>
  );
}
