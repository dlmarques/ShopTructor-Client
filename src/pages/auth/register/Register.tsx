import React, { useState } from "react";

//components
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import PasswordStrengthBar from "react-password-strength-bar";

//icons
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AiOutlineGoogle } from "react-icons/ai";

//styles
import styles from "./register.module.scss";

const Register = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errors: { field: string; error: string }[] = [];
  const handleClick = () => setShow(!show);

  const handleRegister = () => {
    //validate username
    if (
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(
        username
      )
    ) {
      errors.push({ field: "username", error: "emojis" });
      console.log("emojis not allowed");
    }
    if (username.length < 6) {
      errors.push({ field: "username", error: "length" });
      console.log("username must have more than 6 characters");
    }

    //validate email
    if (
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/.test(
        email
      )
    ) {
      errors.push({ field: "email", error: "emojis" });
      console.log("emojis not allowed");
    }

    //validate password
    if (password.length < 6) {
      errors.push({ field: "password", error: "length" });
      console.log("password must have more than 6 characters");
    }

    if (!errors.length) {
      console.log("success");
    } else {
      console.log(errors);
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
            />
            <Input
              type="email"
              placeholder="Email"
              css={{ borderRadius: "50px", border: "2px solid #EE712B" }}
              _hover={{
                border: "2px solid #EE712B",
              }}
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <div>
              <InputGroup>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  css={{ borderRadius: "50px", border: "2px solid #EE712B" }}
                  _hover={{
                    border: "2px solid #EE712B",
                  }}
                  onChange={(e: any) => setPassword(e.target.value)}
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
              <PasswordStrengthBar
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
            >
              <AiOutlineGoogle />
              Sign up with Google
            </Button>
          </div>
          <a href="/sign-in">Already have an account!</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
