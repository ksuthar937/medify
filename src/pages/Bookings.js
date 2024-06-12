import React from "react";
import { useHospital } from "../context/HospitalContext";

import styles from "./Bookings.module.css";
import advertiseImage from "../assets/sensodyne_dweb.png.png";
import BookingCard from "../components/BookingCard/BookingCard";

const Bookings = () => {
  const { bookings } = useHospital();

  return (
    <div>
      <div className={styles.banner}>
        <h1>My Bookings</h1>
        <div className={styles.searchInput}>
          <input placeholder="Search By Hospital" />
          <button>Search</button>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.advertiseBoard}>
          <img src={advertiseImage} alt="sensodyne add" />
        </div>
        <div className={styles.hospitalCards}>
          {bookings.map((hospital, index) => (
            <BookingCard key={index} data={hospital} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
