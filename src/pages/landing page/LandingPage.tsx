import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LandingPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>open app</button>
    </div>
  );
};

export default LandingPage;
