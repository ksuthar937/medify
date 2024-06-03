import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Slider />
      <Specialisation />
      <Specialist />
    </>
  );
};

export default Home;
