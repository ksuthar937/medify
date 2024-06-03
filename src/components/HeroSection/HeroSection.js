import React from "react";

import style from "./HeroSection.module.css";

import heroImage from "../../assets/hero-image.png";

const HeroSection = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.outline}>
        <h2 className={style.header1}>Skip the travel! Find Online</h2>
        <h1 className={style.header2}>
          Medical
          <span className={style.highlight}> Centers</span>
        </h1>

        <p className={style.tagline}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <button className={style.btn}>Find Centers</button>
      </div>
      <img src={heroImage} alt="hero" width={500} />
    </div>
  );
};

export default HeroSection;
