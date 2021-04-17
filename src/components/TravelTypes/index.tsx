import { Flex, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { TravelItem } from "./TravelItem";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });
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
      <SimpleGrid columns={[2, 5]} spacing={["50px", "130px"]}>
        <TravelItem
          src={
            isWideVersion
              ? "/images/icons/cocktail.svg"
              : "images/icons/elipse.svg"
          }
          title="vida noturna"
        />
        <TravelItem
          src={
            isWideVersion ? "/images/icons/surf.svg" : "images/icons/elipse.svg"
          }
          title="praia"
        />
        <TravelItem
          src={
            isWideVersion
              ? "/images/icons/building.svg"
              : "images/icons/elipse.svg"
          }
          title="moderno"
        />
        <TravelItem
          src={
            isWideVersion
              ? "/images/icons/museum.svg"
              : "images/icons/elipse.svg"
          }
          title="clássico"
        />
        <TravelItem
          src={
            isWideVersion
              ? "/images/icons/earth.svg"
              : "images/icons/elipse.svg"
          }
          title="e mais..."
        />
      </SimpleGrid>
    </Flex>
  );
}
