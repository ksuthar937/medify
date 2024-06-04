import React from "react";

import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import NewsBlogs from "../components/News/NewsBlogs";
import Summary from "../components/Summary/Summary";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
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
