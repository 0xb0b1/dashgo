import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { MenuProvider } from "../contexts/MenuDrawerContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </ChakraProvider>
  );
}

export default MyApp;
