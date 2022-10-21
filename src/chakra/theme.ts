import { extendTheme } from "@chakra-ui/react";

const colors = {
  main: "#313642",
  secondary: "#1E1E1E",
};

const fonts = {
  body: `'Lato', sans-serif`,
};

export const theme = extendTheme({ colors, fonts });
