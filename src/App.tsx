import React, { useEffect } from "react";
import AppRoutes from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL);
  }, []);

  return (
    <>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
