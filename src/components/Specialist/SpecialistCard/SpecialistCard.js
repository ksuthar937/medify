import React from "react";

import styles from "./SpecialistCard.module.css";

const SpecialistCard = ({ name, department, picture }) => {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        <img src={picture} alt="dr1" width={240} height={280} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.department}>{department}</p>
      </div>
    </div>
  );
};

export default SpecialistCard;
