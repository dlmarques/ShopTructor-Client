import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//components
import {
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
} from "@chakra-ui/react";

//icons

import { AiOutlineGoogle } from "react-icons/ai";

//styles
import styles from "./register.module.scss";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  //errors
  const [usernameError, setUsernameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();

  const validations = async () => {
    //validate username
    if (
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(
        username
      )
    ) {
      setUsernameError("Emojis not allowed");
    }
    if (username.length < 6) {
      setUsernameError("Username must be greater than 6 characters");
    }

    //validate email
    if (
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(
        email
      )
    ) {
      setEmailError("Emojis not allowed");
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Email must be valid");
    }
  };

  const handleRegister = () => {
    validations();

    if (!usernameError && !emailError) {
      setIsLoading(true);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("email", email);
      setTimeout(() => {
        setIsLoading(false);
        navigate("/create-project");
      }, 4000);
    } else {
      console.log("error");
    }
  };

  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        <h1>ShopTructor</h1>
        <h4>Build the most powerful e-commerce with us</h4>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <h3>ShopTructor</h3>
          <div className={styles.form}>
            <div style={{ position: "relative" }}>
              <Input
                type="text"
                placeholder="Username"
                css={{
                  borderRadius: "50px",
                  border: "2px solid #EE712B",
                }}
                _hover={{
                  border: "2px solid #EE712B",
                }}
                onChange={(e: any) => setUsername(e.target.value)}
                isInvalid={usernameError !== undefined}
              />
              {usernameError !== undefined && (
                <FormLabel
                  fontSize="12px"
                  pl="10px"
                  color="#E53E3E"
                  position="absolute"
                >
                  {usernameError}
                </FormLabel>
              )}
            </div>
            <div
              style={
                usernameError
                  ? { marginTop: "5px", position: "relative" }
                  : { position: "relative" }
              }
            >
              <Input
                type="email"
                placeholder="Email"
                css={{ borderRadius: "50px", border: "2px solid #EE712B" }}
                _hover={{
                  border: "2px solid #EE712B",
                }}
                isInvalid={emailError !== undefined}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              {emailError !== undefined && (
                <FormLabel
                  fontSize="12px"
                  pl="10px"
                  color="#E53E3E"
                  position="absolute"
                >
                  {emailError}
                </FormLabel>
              )}
            </div>
            <div
              style={
                emailError
                  ? { marginTop: "5px", position: "relative" }
                  : { position: "relative" }
              }
            ></div>
            <Button
              isLoading={isLoading}
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
              onClick={() => handleRegister()}
            >
              Sign up
            </Button>
          </div>
          <div className={styles.line}></div>
          <div className={styles.sso}>
            <Button
              colorScheme="teal"
              variant="solid"
              css={{
                borderRadius: "50px",
                background: " #EE712B",
                transition: "all .3s ease",
              }}
              _hover={{
                background: " #EE712B",
                transition: "all .3s ease",
              }}
              isDisabled={isLoading}
            >
              <AiOutlineGoogle />
              Sign up with Google
            </Button>
          </div>
          <a href="/sign-in">Already have an account?</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
