import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormLabel,
} from "@chakra-ui/react";

import PasswordStrengthBar from "react-password-strength-bar";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

//styles
import styles from "./set-password.module.scss";
import axios from "axios";

const SetPassword = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const email = sessionStorage.getItem("email");
    const projectName = sessionStorage.getItem("projectName");
    const country = sessionStorage.getItem("country");

    if (!username || !email || !projectName || !country) {
      navigate("/sign-up");
      window.location.reload();
    }
  }, []);

  const handleClick = () => setShow(!show);

  const validations = async () => {
    //validate password
    if (password.length < 6) {
      setPasswordError("Password must be greater than 6 characters");
    }
  };

  const finishRegister = () => {
    validations();
    if (!passwordError) {
      const username = sessionStorage.getItem("username");
      const email = sessionStorage.getItem("email");
      const projectName = sessionStorage.getItem("projectName");
      const country = sessionStorage.getItem("country");

      if (username && email && projectName && country) {
        try {
          axios
            .post(`${process.env.REACT_APP_API_URL}auth/register`, {
              username: username,
              email: email,
              password: password,
              projectName: projectName,
              country: country,
            })
            .then((res) => {
              if (res.status === 200) {
                setIsLoading(true);
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("projectName");
                sessionStorage.removeItem("country");
                setTimeout(() => {
                  setIsLoading(false);
                  navigate("/dashboard");
                }, 4000);
              }
            });
        } catch (error) {
          console.error(error);
        }
      }
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
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Choose your password"
                  css={{
                    borderRadius: "50px",
                    border: "2px solid #EE712B",
                  }}
                  _hover={{
                    border: "2px solid #EE712B",
                  }}
                  onChange={(e: any) => setPassword(e.target.value)}
                  isInvalid={passwordError !== undefined}
                />

                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleClick}
                    css={{
                      backgroundColor: "transparent",
                      fontSize: "20px",
                    }}
                    _hover={{
                      background: "transparent",
                    }}
                  >
                    {show ? (
                      <ViewOffIcon css={{ color: "#EE712B" }} />
                    ) : (
                      <ViewIcon css={{ color: "#EE712B" }} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {passwordError !== undefined && (
                <FormLabel
                  fontSize="12px"
                  pl="10px"
                  color="#E53E3E"
                  position="absolute"
                >
                  {passwordError}
                </FormLabel>
              )}
              <PasswordStrengthBar
                style={
                  passwordError ? { marginTop: "5px" } : { marginTop: "20px" }
                }
                password={password}
                className={styles.advisor}
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
              onClick={() => finishRegister()}
              isLoading={isLoading}
              loadingText="Almost there..."
            >
              Finish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
