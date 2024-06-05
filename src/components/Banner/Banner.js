import React from "react";

import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </p>
    </div>
  );
};

export default Banner;
