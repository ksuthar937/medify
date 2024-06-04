import React from "react";

import styles from "./Logo.module.css";

import LogoIcon from "../../assets/Logo.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoImage}>
        <img src={LogoIcon} alt="logo" width={24} />
      </div>
      <h1>Medify</h1>
    </div>
  );
};

export default Logo;
