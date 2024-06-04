import React from "react";

import styles from "./Footer.module.css";

import FBIcon from "../../assets/facebook-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import YouTubeIcon from "../../assets/youtube-icon.svg";
import PicsArtIcon from "../../assets/picsart-icon.svg";

import Logo from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.insideWrapper}>
        <div className={styles.leftPart}>
          <Logo />
          <div className={styles.socialSites}>
            <img src={FBIcon} alt="facebook" />
            <img src={TwitterIcon} alt="twitter" />
            <img src={YouTubeIcon} alt="youtube" />
            <img src={PicsArtIcon} alt="picsart" />
          </div>
        </div>
        <div className={styles.rightPart}>
          <ul>
            <li>About Us</li>
            <li>Our Pricing</li>
            <li>Our Gallery</li>
            <li>Appointment</li>
            <li>Privacy Policy</li>
          </ul>
          <ul>
            <li>Orthology</li>
            <li>Neurology</li>
            <li>Dental Care</li>
            <li>Opthalmology</li>
            <li>Cardiology</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </footer>
  );
};
