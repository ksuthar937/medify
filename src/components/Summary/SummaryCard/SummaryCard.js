import React from "react";

import styles from "./SummaryCard.module.css";

const SummaryCard = ({ image, value, name }) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={image} alt="logo" />
      <h1>{value}+</h1>
      <p>{name}</p>
    </div>
  );
};

export default SummaryCard;
