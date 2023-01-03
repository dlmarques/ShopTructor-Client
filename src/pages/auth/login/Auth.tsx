import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const Auth = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <div>
      <Navigate to="/dashboard" />
    </div>
  );
};

export default Auth;
