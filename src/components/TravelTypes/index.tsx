import { Flex, Image } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
  return (
    <Flex w="100%" align="center" justify="space-evenly">
      <TravelItem src="/images/icons/cocktail.svg" title="vida noturna" />
      <TravelItem src="/images/icons/surf.svg" title="praia" />
      <TravelItem src="/images/icons/building.svg" title="moderno" />
      <TravelItem src="/images/icons/museum.svg" title="clássico" />
      <TravelItem src="/images/icons/earth.svg" title="e mais..." />
    </Flex>
  );
}
