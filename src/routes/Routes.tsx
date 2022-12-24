import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import ForgotPassword from "../pages/auth/forgot-password/ForgotPassword";
import SetPassword from "../pages/auth/set-password/SetPassword";
import Dashboard from "../modules/dashboard/Dashboard";
import CreateFirstProject from "../pages/auth/create-first-project/CreateFirstProject";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/sign-up" element={<Register />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-first-project" element={<CreateFirstProject />} />
        <Route path="/finish-register" element={<SetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
