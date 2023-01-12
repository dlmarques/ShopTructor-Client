import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//components
import { Button, Input } from "@chakra-ui/react";
import { CountryDropdown } from "react-country-region-selector";

//styles
import styles from "./create-project.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { registerUser } from "../../../services/auth-services";
import { registerProject } from "../../../services/project-service";
import { checkUser } from "../../../services/app-services";

const CreateFirstProject = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [projectName, setProjectName] = useState("");
  const [country, setCountry] = useState("");
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [isThirdParty, setIsThirdParty] = useState(false);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    checkAuthMethod();
    initApp();
  }, [isLoading, isAuthenticated, isThirdParty]);

  const initApp = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await checkUser(user?.email || "");

      if (response) {
        navigate("/app/dashboard");
      }
    }
  };

  const checkAuthMethod = () => {
    user?.sub?.includes("auth0")
      ? setIsThirdParty(false)
      : setIsThirdParty(true);
  };

  const registerUserStep = async () => {
    setFormIsLoading(true);
    const currentUser = {
      name: isThirdParty ? user?.name : username,
      email: user?.email,
      picture: user?.picture,
      email_verified: user?.email_verified,
      locale: country,
    };
    const response = await registerUser(currentUser);
    if (response === 200) {
      setTimeout(() => {
        setFormIsLoading(false);
        registerProjectStep();
      }, 4000);
    } else {
      setTimeout(() => {
        setFormIsLoading(false);
        toast.error(response.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }, 4000);
    }
  };

  const registerProjectStep = async () => {
    setFormIsLoading(true);
    const project = {
      email: user?.email,
      name: projectName,
    };
    const response = await registerProject(project);
    if (response === 200) {
      toast.success("Project created!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/app/dashboard");
    } else {
      toast.error(response.data, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className={styles.createProject}>
      <div className={styles.left}>
        <h1>ShopTructor</h1>
        <h4>Build the most powerful e-commerce with us</h4>
      </div>
      <div className={styles.right}>
        <div
          className={styles.box}
          style={{ height: isThirdParty ? "380px" : "450px" }}
        >
          <h3>ShopTructor</h3>
          <div className={styles.form}>
            {!isThirdParty && (
              <>
                <div className={styles.input}>
                  <label htmlFor="username" className={styles.label}>
                    Choose an username.
                  </label>

                  <Input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Choose an username."
                    css={{
                      borderRadius: "50px",
                      border: "2px solid #EE712B",
                    }}
                    _hover={{
                      border: "2px solid #EE712B",
                    }}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </>
            )}
            <div className={styles.input}>
              <label htmlFor="projectName" className={styles.label}>
                What's your project name?
              </label>

              <Input
                type="text"
                name="projectName"
                id="projectName"
                placeholder="What's your project name?"
                css={{
                  borderRadius: "50px",
                  border: "2px solid #EE712B",
                }}
                _hover={{
                  border: "2px solid #EE712B",
                }}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>

            <div className={styles.country}>
              <label htmlFor="projectName" className={styles.label}>
                Select your country
              </label>

              <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)}
                showDefaultOption={true}
              />
            </div>

            <Button
              colorScheme="teal"
              variant="solid"
              css={{
                borderRadius: "50px",
                background: "#EE712B",
                transition: "all .3s ease",
              }}
              _hover={{
                background: "#EE712B",
                transition: "all .3s ease",
              }}
              onClick={() => registerUserStep()}
              isLoading={formIsLoading}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFirstProject;
