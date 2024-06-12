import React from "react";
import FAQ from "../components/FAQ/FAQ";
import HospitalCard from "../components/HospitalCard/HospitalCard";

import advertiseImage from "../assets/sensodyne_dweb.png.png";

import styles from "./Search.module.css";
import { useHospital } from "../context/HospitalContext";
import Loader from "../components/Loader/Loader";

const Search = () => {
  const { hospitals, isLoading } = useHospital();
  return (
    <>
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
