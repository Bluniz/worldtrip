import { Flex, Box, SimpleGrid, Text, Heading } from "@chakra-ui/react";
import { Card, CardProps } from "../Card/index";

interface CardListProps {
  data: CardProps[];
}

export function CardList({ data }: CardListProps) {
  return (
    <SimpleGrid columns={[1, 4]} spacing="40px" mb="20px">
      {data.map((item) => {
        return (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            image={item.image}
            key={item.title}
          />
        );
      })}
    </SimpleGrid>
  );
}
