import { Flex } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-evenly"
      pt={5}
      paddingBottom={10}
      position="relative"
      _after={{
        content: `""`,
        position: "absolute",
        bottom: 0,
        left: "auto",
        marginLeft: "20px",
        backgroundColor: "gray.500",
        height: "3px",
        width: "90px",
      }}
    >
      <TravelItem src="/images/icons/cocktail.svg" title="vida noturna" />
      <TravelItem src="/images/icons/surf.svg" title="praia" />
      <TravelItem src="/images/icons/building.svg" title="moderno" />
      <TravelItem src="/images/icons/museum.svg" title="clássico" />
      <TravelItem src="/images/icons/earth.svg" title="e mais..." />
    </Flex>
  );
}
