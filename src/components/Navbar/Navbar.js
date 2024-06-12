import React, { useState } from "react";

import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";

import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Find Doctors",
    path: "/search",
  },
  {
    name: "Hospitals",
    path: "/search",
  },
  {
    name: "Medicines",
    path: "/search",
  },
  {
    name: "Surgeries",
    path: "/search",
  },
  {
    name: "Software for Provider",
    path: "/search",
  },
  {
    name: "Facilities",
    path: "/search",
  },
  {
    name: "My Bookings",
    path: "/bookings",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <section
      className={pathname === "/" ? styles.wrapper : styles.whiteWrapper}
    >
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className={styles.desktopView}>
          <div className={styles.tabs}>
            {navItems.map((item) => (
              <Link key={item.name} to={item.path}>
                {item.name}
              </Link>
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
              <Link key={item.name} to={item.path}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default Navbar;
