import { Box, ChakraProvider } from "@chakra-ui/react";
import NavBar from "../Component/NavBar";
import theme from "../theme";
import Footer from "./../Component/Footer/index";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import rootReducer from "./../redux";
import { saveState } from "../redux/saveInLocal";
import { debounce } from "debounce";
// import { store } from "app/store";

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

  rootReducer.subscribe(
    debounce(() => {
      saveState(rootReducer.getState());
    }, 800)
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={rootReducer}>
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
          <Box bg={"#000000"}>
            <NavBar />
            <Box overflowY="auto" pt={["16", "16", "12", "12"]}>
              <Component {...pageProps} />
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
