import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "../../modules/app-dashboard/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import { checkUser } from "../../services/app-services";
import LoadingScreen from "../../components/loading/Loading";
import { ToastContainer } from "react-toastify";

//styles
import "react-toastify/dist/ReactToastify.css";
import CreateFirstProject from "../auth/create-first-project/CreateFirstProject";

const App = () => {
  const [requestIsLoading, setRequestIsLoading] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, isLoading } = useAuth0();

  //Verify if user is new or not
  useEffect(() => {
    setRequestIsLoading(true);
    initApp();
  }, [isAuthenticated, isLoading]);

  const initApp = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await checkUser(user?.email || "");
      setRequestIsLoading(false);
      if (!response) {
        navigate("/app/create-first-project");
      } else if (response) {
        navigate("/app/dashboard");
      }
    }
  };

  return (
    <>
      {requestIsLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          ></ToastContainer>
          <Routes>
            <Route
              path="/create-first-project"
              element={<CreateFirstProject />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
