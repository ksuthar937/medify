import React from "react";

import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import NewsBlogs from "../components/News/NewsBlogs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Slider />
      <Specialisation />
      <Specialist />
      <PatientCaring />
      <NewsBlogs />
    </>
  );
};

export default Home;
