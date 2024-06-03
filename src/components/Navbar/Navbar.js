import React from "react";

import styles from "./Navbar.module.css";

import Logo from "../../assets/Logo.svg";

const navItems = [
  "Find Doctors",
  "Hospitals",
  "Medicines",
  "Surgeries",
  "Software for Provider",
  "Facilities",
  "My Bookings",
];

const Navbar = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logo}>
        <div className={styles.logoImage}>
          <img src={Logo} alt="logo" width={24} />
        </div>
        <h1>Medify</h1>
      </div>
      <div className={styles.tabs}>
        {navItems.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
