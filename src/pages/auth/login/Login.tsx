import React, { useState } from "react";

//components
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

//icons
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineGoogle } from "react-icons/ai";

//styles
import styles from "./login.module.scss";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <div className={styles.signin}>
      <div className={styles.left}>
        <h1>ShopTructor</h1>
        <h4>Build the most powerful e-commerce with us</h4>
      </div>
      <div className={styles.right}>
        <div className={styles.box}>
          <h3>ShopTructor</h3>
          <div className={styles.form}>
            <Input
              type="text"
              placeholder="Username or email"
              css={{
                borderRadius: "50px",
                border: "2px solid #EE712B",
              }}
              _hover={{
                border: "2px solid #EE712B",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  css={{ borderRadius: "50px", border: "2px solid #EE712B" }}
                  _hover={{
                    border: "2px solid #EE712B",
                  }}
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
              <a href="/forgot-password" style={{ paddingTop: "5px" }}>
                Forgot password?
              </a>
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
            >
              Sign in
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
            >
              <AiOutlineGoogle />
              Sign in with Google
            </Button>
          </div>
          <a href="/sign-up">Don't have an account? Create here!</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
