import React from "react";

import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

import styles from "./BookingSlots.module.css";

const BookingSlots = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dates}>
        <img src={leftArrow} alt="left arrow" />
        <div>
          <p className={styles.text1}>Today</p>
          <p className={styles.text2}>11 Slots Available</p>
        </div>
        <img src={rightArrow} alt="right arrow" />
      </div>
      <div className={styles.times}>
        <div className={styles.shift}>
          <p className={styles.shiftText}>Morning</p>
          <p className={styles.time}>11:30 AM</p>
        </div>

        <div className={styles.shift}>
          <p className={styles.shiftText}>Afternoon</p>
          <p className={styles.time}>12:00 PM</p>
          <p className={styles.time}>12:30 PM</p>
          <p className={styles.time}>01:30 PM</p>
          <p className={styles.time}>02:00 PM</p>
          <p className={styles.time}>02:30 PM</p>
        </div>
        <div className={styles.shift}>
          <p className={styles.shiftText}>Evening</p>
          <p className={styles.time}>06:00PM</p>
          <p className={styles.time}>06:30PM</p>
          <p className={styles.time}>07:00PM</p>
          <p className={styles.time}>07:30PM</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSlots;
