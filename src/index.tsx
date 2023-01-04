import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import AppRoutes from "./routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN || ""}
      clientId={process.env.REACT_APP_CLIENT_ID || ""}
      redirectUri={process.env.REACT_APP_REDIRECT_URL || ""}
      audience={process.env.REACT_APP_AUDIENCE || ""}
      scope={process.env.REACT_APP_SCOPE || ""}
    >
      <Provider store={store}>
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
