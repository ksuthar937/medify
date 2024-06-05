import React from "react";

import styles from "./Contact.module.css";

import mobileImage from "../../assets/mobileApp.png";

import playStoreImage from "../../assets/google_play.png.svg";
import appleStoreImage from "../../assets/apple_store.png.svg";

import arrowImage from "../../assets/Vector.svg";

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <img src={mobileImage} alt="mobile app" width={450} />
      <img
        className={styles.arrow}
        src={arrowImage}
        alt="mobile app"
        width={60}
      />

      <div className={styles.container}>
        <h1 className={styles.heading}>Download the</h1>
        <h1 className={styles.heading}>
          <span>Medify</span> App
        </h1>
        <p>Get the link to download the app</p>
        <div className={styles.userInputs}>
          <div>
            <input
              className={styles.input1}
              type="text"
              defaultValue="+91"
              disabled
            />
            <input
              className={styles.input2}
              type="text"
              placeholder="Enter Phone Number"
            />
          </div>
          <button>Send SMS</button>
        </div>
        <div className={styles.stores}>
          <img src={playStoreImage} alt="playStoreImage" width={150} />
          <img src={appleStoreImage} alt="appleStoreImage" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
