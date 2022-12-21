import React, { useEffect } from "react";
import AppRoutes from "./routes/Routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
