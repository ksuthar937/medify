import React, { useState } from "react";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section className={styles.wrapper}>
      <nav className={styles.nav}>
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
        <div className={styles.mobilView} onClick={handleMenu}>
          {isMenuOpen ? <RxCross1 /> : <TiThMenu />}
        </div>
      </nav>
      {isMenuOpen ? (
        <div className={styles.menuItem}>
          <ul className={styles.mobilView}>
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Navbar;
