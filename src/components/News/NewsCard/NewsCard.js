import React from "react";

import NewsBlogImage from "../../../assets/blogImage.png";
import DrImage from "../../../assets/blogDrImage.jpg";

import styles from "./NewsCard.module.css";

const NewsCard = () => {
  return (
    <div className={styles.cardWrapper}>
      <img src={NewsBlogImage} alt="NewsBlog" width={400} />
      <div className={styles.text}>
        <p className={styles.date}>Medical | March 31,2022</p>
        <p className={styles.heading}>
          6 Tips To Protect Your Mental Health When You’re Sick
        </p>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <img src={DrImage} alt="Rebecca Lee" width={32} />
          </div>
          <p className={styles.name}>Rebecca Lee</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
