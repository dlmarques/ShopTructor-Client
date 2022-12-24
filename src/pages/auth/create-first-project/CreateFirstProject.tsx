import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import { Button, Input } from "@chakra-ui/react";
import { CountryDropdown } from "react-country-region-selector";

//styles
import styles from "./create-project.module.scss";

const CreateFirstProject = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleStep = () => {
    if (projectName && country) {
      setIsLoading(true);
      sessionStorage.setItem("projectName", projectName);
      sessionStorage.setItem("country", country);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/finish-register");
      }, 4000);
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
