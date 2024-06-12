import styles from "./Home.module.css";

import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import NewsBlogs from "../components/News/NewsBlogs";
import Summary from "../components/Summary/Summary";
import FAQ from "../components/FAQ/FAQ";
import SearchBox from "../components/SearchBox/SearchBox";

const Home = () => {
  return (
    <>
      <HeroSection />
      <div className={styles.searchBoxWrapper}>
        <SearchBox />
      </div>
      <Slider />
      <Specialisation />
      <Specialist />
      <PatientCaring />
      <NewsBlogs />
      <Summary />
      <FAQ />
    </>
  );
};

export default Home;
