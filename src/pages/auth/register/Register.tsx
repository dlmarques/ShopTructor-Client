import React, { useState, Fragment } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//components
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  FormLabel,
} from "@chakra-ui/react";
import PasswordStrengthBar from "react-password-strength-bar";

//icons
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineGoogle } from "react-icons/ai";

//styles
import styles from "./register.module.scss";

const Register = () => {
  const [show, setShow] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  //fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //errors
  const [usernameError, setUsernameError] = useState<string>();
  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();

  const handleClick = () => setShow(!show);

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

    //validate password
    if (password.length < 6) {
      setPasswordError("Password must be greater than 6 characters");
    }
  };

  const handleRegister = () => {
    validations();

    if (!usernameError && !passwordError && !emailError) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        try {
          axios
            .post(`${process.env.REACT_APP_API_URL}auth/register`, {
              username: username,
              email: email,
              password: password,
            })
            .then((res) => {
              if (res.status === 200) {
                setRegistered(true);
                setTimeout(() => {
                  navigate("/sign-in");
                }, 4000);
              }
            });
        } catch (error) {
          console.error(error);
        }
      }, 2000);
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
        <div
          className={styles.box}
          style={registered ? { height: "450px" } : {}}
        >
          <h3>ShopTructor</h3>
          {!registered ? (
            <>
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
                >
                  <InputGroup>
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Password"
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
                    style={passwordError ? { marginTop: "5px" } : {}}
                    password={password}
                    className={styles.advisor}
                  />
                </div>
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
            </>
          ) : (
            <>
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                width="500px"
                mt="50px"
                fontFamily="Nunito, sans-serif"
                background="transparent"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Successfully registered!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  You will be redirect to sign-in page in a moment.
                </AlertDescription>
                <Button
                  isLoading
                  colorScheme="teal"
                  variant="outline"
                  border="none"
                  fontSize="50px"
                  mt="20px"
                ></Button>
              </Alert>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
