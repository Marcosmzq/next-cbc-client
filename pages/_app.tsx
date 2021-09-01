import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/config/apollo";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../src/context/userAuth";
import { theme } from "../styles/theme";
import { NavBar } from "../src/components/NavBar";
import "@fontsource/work-sans";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS={true} theme={theme}>
        <AuthProvider>
          <NavBar />
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </ApolloProvider>
  );
}
export default MyApp;
