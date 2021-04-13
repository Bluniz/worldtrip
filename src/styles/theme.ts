import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "gray.600": "#000000", // Black
      "gray.500": "#47585B", // Heading and Text
      "gray.400": "#999999", // Info -> 50% de opacidade ou n
      "gray.200": "#DADADA", // Info light
      "gray.100": "#F5F8FA", // Heading and Text Light
      "gray.50": "#FFFFFF", // White
    },
    yellow: {
      "yellow.600": "#FFBA08", //tem versão de 50% tb
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    body: {
      bg: "gray.100",
      color: "gray.500",
    },
  },
});
