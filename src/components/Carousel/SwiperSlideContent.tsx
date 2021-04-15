import { Flex, Image, Box, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperSlideContentProps {
  image: string;
  title: string;
  description: string;
  url?: string;
}

export function SwiperSlideContent({ image, title, description, url = "/" }) {
  return (
    <Link href={url} passHref>
      <Box position="relative" cursor={url !== "/" ? "pointer" : "default"}>
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
    </Link>
  );
}
