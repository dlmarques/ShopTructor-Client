import React from "react";

import styles from "./forgot-password.module.scss";
import { Button, Input } from "@chakra-ui/react";

const ForgotPassword = () => {
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
              Recovery password
            </Button>
          </div>
          <div className={styles.line}></div>
          <a href="/sign-in">Sign in!</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
