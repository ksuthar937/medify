import React from "react";

import styles from "./SearchBox.module.css";

import DoctorLogo from "../../assets/Doctor.svg";
import LabsLogo from "../../assets/Drugstore.svg";
import HospitalsLogo from "../../assets/Hospital.svg";
import MedicalStoreLogo from "../../assets/Capsule.svg";
import AmbulanceLogo from "../../assets/Ambulance.svg";

import ItemCard from "./ItemCard/ItemCard";

import { IoSearchOutline } from "react-icons/io5";

const Data = [
  {
    name: "Doctor",
    logo: DoctorLogo,
  },
  {
    name: "Labs",
    logo: LabsLogo,
  },
  {
    name: "Hospitals",
    logo: HospitalsLogo,
  },
  {
    name: "Medical Store",
    logo: MedicalStoreLogo,
  },
  {
    name: "Ambulance",
    logo: AmbulanceLogo,
  },
];

const SearchBox = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.userInputs}>
        <input type="text" placeholder="State" />
        <input type="text" placeholder="City" />
        <button className={styles.btn}>
          <span>
            <IoSearchOutline />
          </span>
          Search
        </button>
      </div>
      <div className={styles.selection}>
        <p>You may be looking for</p>
        <div className={styles.cards}>
          {Data.map((item) => (
            <ItemCard name={item.name} logo={item.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
