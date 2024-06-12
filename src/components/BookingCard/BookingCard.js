import React from "react";

import styles from "./BookingCard.module.css";

import HospitalLogo from "../../assets/hospitalCardLogo.svg";
import LikeLogo from "../../assets/like.svg";

const BookingCard = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailsWrapper}>
        <img src={HospitalLogo} alt="hospital logo" width={140} />

        <div className={styles.details}>
          <h2 className={styles.heading}>{data["HospitalName"]}</h2>
          <p className={styles.place}>
            {data["Address"]}, {data["City"]}
          </p>
          <p className={styles.type}>{data["HospitalType"]} + 1 more</p>
          <p className={styles.fee}>
            <span className={styles.text1}>FREE</span>
            <span className={styles.text2}>INR500</span>
            Consultation fee at clinic
          </p>
          <hr className={styles.line} />
          <div className={styles.likes}>
            <img src={LikeLogo} alt="thumbsup" width={13} />
            <p className={styles.likesCount}>{data["Hospitaloverallrating"]}</p>
          </div>
        </div>
        <div className={styles.timing}>
          <p className={styles.time}>10:30 PM</p>
          <p className={styles.date}>20 April 2024</p>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
