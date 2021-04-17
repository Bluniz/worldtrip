import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Item, ItemProps } from "./Item";

interface ContinentSummaryProps {
  text: string;
  data: ItemProps[];
}

export function ContinentSummary({ text, data }: ContinentSummaryProps) {
  return (
    <SimpleGrid columns={[1, 2]} spacing="30px" m="50px">
      <Text textAlign="justify">{text}</Text>
      <Flex justify="center" align="center">
        {data.map((item, index) => {
          return (
            <Item
              title={item.title}
              description={item.description}
              key={index}
            />
          );
        })}
      </Flex>
    </SimpleGrid>
  );
}
