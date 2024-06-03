import React from "react";

import styles from "./SpecialisationCard.module.css";

const SpecialisationCard = ({ name, logo }) => {
  return (
    <div className={styles.box}>
      <img src={logo} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SpecialisationCard;
