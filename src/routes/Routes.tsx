import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import LandingPage from "../pages/landing page/LandingPage";
import Auth from "../pages/auth/login/Auth";
import App from "../pages/app/App";

const AppRoutes = () => {
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
