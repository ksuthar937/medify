import React from "react";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

import { TiThMenu } from "react-icons/ti";

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
      <div>
        <Logo />
      </div>
      <div className={styles.desktopView}>
        <div className={styles.tabs}>
          {navItems.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className={styles.mobilView}>
        <TiThMenu />
      </div>
    </nav>
  );
};

export default Navbar;
