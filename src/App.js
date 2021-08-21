import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import Routes from './Route/Routes';

function App() {
  return (
    <Provider store={Store}>
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
    </Provider>
  );
}

export default App;
