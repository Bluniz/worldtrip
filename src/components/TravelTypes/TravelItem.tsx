import {
  Image,
  VStack,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface TravelItemProps {
  src: string;
  title: string;
}

export function TravelItem({ src, title }: TravelItemProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
  return (
    <>
      {isWideVersion ? (
        <VStack>
          <Image src={src} alt={title} w="55px" h="55px" />
          <Text>{title}</Text>
        </VStack>
      ) : (
        <HStack>
          <Image src={src} alt={title} w="15px" h="15px" />
          <Text>{title}</Text>
        </HStack>
      )}
    </>
  );
}
