import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
//components
import { Button, Input } from "@chakra-ui/react";
import { CountryDropdown } from "react-country-region-selector";

//styles
import styles from "./create-project.module.scss";
import axios from "axios";
import { authActions } from "../../../store/auth/auth";

const CreateFirstProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStep = () => {
    const tokenId = sessionStorage.getItem("google-tokenId");
    if (tokenId) {
      handleGoogleLogin();
    } else {
      setIsLoading(true);
      sessionStorage.setItem("projectName", projectName);
      sessionStorage.setItem("country", country);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/finish-register");
      }, 4000);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    const userGoogle = {
      tokenId: sessionStorage.getItem("google-tokenId"),
      accessToken: sessionStorage.getItem("google-accessToken"),
      username: sessionStorage.getItem("google-username"),
      email: sessionStorage.getItem("google-email"),
      avatar: sessionStorage.getItem("google-avatar"),
      projectName: projectName,
      country: country,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}auth/register`, {
        username: userGoogle.username,
        email: userGoogle.email,
        projectName: userGoogle.projectName,
        country: userGoogle.country,
        isGoogleAuth: true,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(1);
          sessionStorage.removeItem("google-username");
          sessionStorage.removeItem("google-email");
          sessionStorage.removeItem("google-avatar");
          sessionStorage.removeItem("google-accessToken");
          sessionStorage.removeItem("google-tokenId");
          localStorage.setItem("authToken", userGoogle.accessToken || "");
          dispatch(authActions.login());
          setTimeout(() => {
            setIsLoading(false);
            navigate("/auth-callback");
          }, 4000);
        }
      })
      .catch((err) => {
        sessionStorage.setItem("error", err.response.data);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/auth-error");
        }, 4000);
      });
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
              onClick={() => handleStep()}
              isLoading={isLoading}
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
