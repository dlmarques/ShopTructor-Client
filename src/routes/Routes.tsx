import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/Dashboard";
import CreateFirstProject from "../pages/auth/create-first-project/CreateFirstProject";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../pages/landing page/LandingPage";
import Auth from "../pages/auth/login/Auth";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<Auth />} />
        <Route path="/create-first-project" element={<CreateFirstProject />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
