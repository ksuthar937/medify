import React, { useState } from "react";

import styles from "./HospitalCard.module.css";

import HospitalLogo from "../../assets/hospitalCardLogo.svg";
import LikeLogo from "../../assets/like.svg";
import BookingSlots from "../BookingSlots/BookingSlots";

const HospitalCard = ({ data }) => {
  const [slotsView, setSlotsView] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.detailsWrapper}>
        <img src={HospitalLogo} alt="hospital logo" width={140} />

        <div className={styles.details}>
          <h2 className={styles.heading}>{data["Hospital Name"]}</h2>
          <p className={styles.place}>
            {data["Address"]}, {data["City"]}
          </p>
          <p className={styles.type}>{data["Hospital Type"]} + 1 more</p>
          <p className={styles.fee}>
            <span className={styles.text1}>FREE</span>
            <span className={styles.text2}>INR500</span>
            Consultation fee at clinic
          </p>
          <hr className={styles.line} />
          <div className={styles.likes}>
            <img src={LikeLogo} alt="thumbsup" width={13} />
            <p className={styles.likesCount}>
              {data["Hospital overall rating"]}
            </p>
          </div>
        </div>
        {!slotsView && (
          <div className={styles.booking}>
            <p className={styles.text3}>Available Today</p>
            <button onClick={() => setSlotsView((prev) => !prev)}>
              Book FREE Visit
            </button>
          </div>
        )}
      </div>
      {slotsView && (
        <div className={styles.slotsWrapper}>
          <BookingSlots />
        </div>
      )}
    </div>
  );
};

export default HospitalCard;
