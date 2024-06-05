import React from "react";

import styles from "./HospitalCard.module.css";

import HospitalLogo from "../../assets/hospitalCardLogo.svg";
import LikeLogo from "../../assets/like.svg";

const HospitalCard = () => {
  return (
    <div className={styles.wrapper}>
      <img src={HospitalLogo} alt="hospital logo" width={140} />

      <div className={styles.details}>
        <h2 className={styles.heading}>Fortis Hospital Richmond Road</h2>
        <p className={styles.place}>Banglore, Karnataka</p>
        <p className={styles.type}>
          Smilessence Center for Advanced Dentistry + 1 more
        </p>
        <p className={styles.fee}>
          <span className={styles.text1}>FREE</span>
          <span className={styles.text2}>INR500</span>
          Consultation fee at clinic
        </p>
        <hr className={styles.line} />
        <div className={styles.likes}>
          <img src={LikeLogo} alt="thumbsup" width={13} />
          <p className={styles.likesCount}>5</p>
        </div>
      </div>

      <div className={styles.booking}>
        <p className={styles.text3}>Available Today</p>
        <button>Book FREE Center Visit</button>
      </div>
    </div>
  );
};

export default HospitalCard;
