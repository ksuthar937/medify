import React from "react";

import styles from "./Home.module.css";

import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import NewsBlogs from "../components/News/NewsBlogs";
import Summary from "../components/Summary/Summary";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import SearchBox from "../components/SearchBox/SearchBox";

const Home = () => {
  return (
    <>
      {/* <div className={styles.container}>
        <div className={styles.firstComponent}>
          <HeroSection />
        </div>
        <div className={styles.secondComponent}>
          <SearchBox />
        </div>
        <div className={styles.thirdComponent}>
          <Slider />
        </div>
      </div> */}
      <HeroSection />
      <SearchBox />
      <Slider />
      <Specialisation />
      <Specialist />
      <PatientCaring />
      <NewsBlogs />
      <Summary />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
