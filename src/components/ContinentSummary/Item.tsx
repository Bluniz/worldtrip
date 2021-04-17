import { Box, Text } from "@chakra-ui/react";

export interface ItemProps {
  title: string;
  description: string;
}

export function Item({ title, description }: ItemProps) {
  return (
    <Box margin="0 30px" textAlign="center">
      <Text fontSize="36px" fontWeight="bold" color="#FFBA08">
        {title}
      </Text>
      <Text>{description}</Text>
    </Box>
  );
}
