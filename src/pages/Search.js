import React from "react";
import FAQ from "../components/FAQ/FAQ";
import HospitalCard from "../components/HospitalCard/HospitalCard";

import advertiseImage from "../assets/sensodyne_dweb.png.png";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.advertiseBoard}>
          <img src={advertiseImage} alt="sensodyne add" />
        </div>
        <HospitalCard />
      </div>
      <FAQ />
    </>
  );
};

export default Search;
