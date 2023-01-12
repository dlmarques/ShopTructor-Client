import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LandingPage from "../pages/landing page/LandingPage";
import Auth from "../pages/auth/login/Auth";
import App from "../pages/app/App";

const AppRoutes = () => {
  console.log(process.env.REACT_APP_REDIRECT_URL);
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<Auth />} />
        <Route
          path="/app/*"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
