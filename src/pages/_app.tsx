import { AppProps } from "next/app";

import { ReactQueryDevtools } from "react-query/devtools";

import { ChakraProvider } from "@chakra-ui/react";
import { MenuProvider } from "../contexts/MenuDrawerContext";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

import { theme } from "../styles/theme";
import { makeServer } from "../services/mirage";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
