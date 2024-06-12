import React from "react";
import FAQ from "../components/FAQ/FAQ";
import HospitalCard from "../components/HospitalCard/HospitalCard";

import advertiseImage from "../assets/sensodyne_dweb.png.png";

import styles from "./Search.module.css";
import { useHospital } from "../context/HospitalContext";
import Loader from "../components/Loader/Loader";
import SearchBox from "../components/SearchBox/SearchBox";

const Search = () => {
  const { hospitals, isLoading, selectedState } = useHospital();

  return (
    <>
      <div className={styles.searchBoxWrapper}>
        <SearchBox />
      </div>
      <div className={styles.bannerLine}>
        <h3>
          {hospitals.length} medical centers available in {selectedState}
        </h3>
        <p>
          Book appointments with minimum wait-time & verified doctor details
        </p>
      </div>
      <div className={styles.wrapper}>
        {isLoading ? (
          <div className={styles.loader}>
            <Loader />
            <p>Searching..</p>
          </div>
        ) : (
          <>
            <div className={styles.advertiseBoard}>
              <img src={advertiseImage} alt="sensodyne add" />
            </div>
            <div className={styles.hospitalCards}>
              {hospitals.map((hospital, index) => (
                <HospitalCard key={index} data={hospital} />
              ))}
            </div>
          </>
        )}
      </div>
      <FAQ />
    </>
  );
};

export default Search;
