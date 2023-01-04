import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoadingScreen from "../components/loading/Loading";

const PrivateRoute = ({ children }: any) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
