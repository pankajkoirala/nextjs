import { Box, ChakraProvider } from "@chakra-ui/react";
import NavBar from "../Component/NavBar";
import theme from "../theme";
import Footer from "./../Component/Footer/index";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const fiveMinutesInMs = 5 * 60 * 1000;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        cacheTime: fiveMinutesInMs,
        staleTime: fiveMinutesInMs,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          // newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <NavBar />
        <Box pt={["16", "16", "12", "12"]}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
