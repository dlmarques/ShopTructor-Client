import React from "react";
import { Loading } from "@nextui-org/react";
import styles from "./loading.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingContainer}>
      <Loading
        loadingCss={{
          $$loadingSize: "100px",
          $$loadingBorder: "10px",
          $$loadingColor: "#EE712B",
        }}
      >
        <span className={styles.loadingLabel}>Just a moment...</span>
      </Loading>
    </div>
  );
};

export default LoadingScreen;
