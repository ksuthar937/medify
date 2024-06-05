import React from "react";

import styles from "./ItemCard.module.css";

const ItemCard = ({ name, logo }) => {
  return (
    <div className={styles.box}>
      <img src={logo} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default ItemCard;
