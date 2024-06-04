import React from "react";

import styles from "./FAQ.module.css";

import FAQIamge from "../../assets/FAQ.png";

import FAQIcon1 from "../../assets/FAQ_Icon1.png";
import FAQIcon2 from "../../assets/FAQ_Icon2.png";

import PlusIcon from "../../assets/plusIcon.svg";

const FAQ = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.subHeading}>Get Your Answer</h3>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <img
            src={FAQIamge}
            alt="Dr and patient laughing while talking"
            className={styles.gridItem1}
          />
          <img src={FAQIcon1} alt="sticker" className={styles.gridItem2} />
          <img src={FAQIcon2} alt="sticker" className={styles.gridItem3} />
        </div>
        <div className={styles.questions}>
          <div className={styles.question}>
            <p>Why choose our medical for your family?</p>
            <span>
              <img src={PlusIcon} alt="plus icon" width={18} />
            </span>
          </div>
          <div className={styles.question}>
            <p>Why we are different from others?</p>
            <span>
              <img src={PlusIcon} alt="plus icon" width={18} />
            </span>
          </div>
          <div className={styles.question}>
            <p>Trusted & experience senior care & love</p>
            <span>
              <img src={PlusIcon} alt="plus icon" width={18} />
            </span>
          </div>
          <div className={styles.question}>
            <p>How to get appointment for emergency cases?</p>
            <span>
              <img src={PlusIcon} alt="plus icon" width={18} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
