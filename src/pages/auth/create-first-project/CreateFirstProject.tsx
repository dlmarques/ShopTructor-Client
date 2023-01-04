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
  const [projectName, setProjectName] = useState("");
  const [country, setCountry] = useState("");
  const [formIsLoading, setFormIsLoading] = useState(false);

  useEffect(() => {
    initApp();
  }, [isLoading, isAuthenticated]);

  const initApp = async () => {
    if (!isLoading && isAuthenticated) {
      const response = await checkUser(user?.email || "");

      if (response) {
        navigate("/app/dashboard");
      }
    }
  };

  const registerUserStep = async () => {
    setFormIsLoading(true);
    const currentUser = {
      name: user?.name,
      email: user?.email,
      picture: user?.picture,
      email_verified: user?.email_verified,
      locale: user?.locale,
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
      }, 4000);
    }
  };

  const registerProjectStep = async () => {
    setFormIsLoading(true);
    const project = {
      email: user?.email,
      name: projectName,
      country: country,
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
      console.log("error");
    }
  };

  return (
    <div className={styles.createProject}>
      <div className={styles.left}>
        <h1>ShopTructor</h1>
        <h4>Build the most powerful e-commerce with us</h4>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <h3>ShopTructor</h3>
          <div className={styles.form}>
            <div className={styles.projectName}>
              <label htmlFor="projectName" className={styles.projectNameLabel}>
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
              <label htmlFor="projectName" className={styles.countryLabel}>
                Select your country
              </label>

              <CountryDropdown
                value={country}
                onChange={(val) => setCountry(val)}
                showDefaultOption={false}
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
