import { Image, VStack, Text } from "@chakra-ui/react";

interface TravelItemProps {
  src: string;
  title: string;
}

export function TravelItem({ src, title }: TravelItemProps) {
  return (
    <VStack padding="10px">
      <Image src={src} alt={title} w="55px" h="55px" />
      <Text>{title}</Text>
    </VStack>
  );
}
