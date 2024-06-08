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

const SearchBox = ({
  states,
  cities,
  handleStates,
  handleCity,
  selectedCity,
  handleSubmit,
}) => {
  return (
    <section className={styles.layout}>
      <form onSubmit={handleSubmit} className={styles.userInputs}>
        <select onChange={handleStates} required>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {cities.length > 0 ? (
          <select onChange={handleCity} required>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        ) : null}
        <button className={styles.btn}>
          <span>
            <IoSearchOutline />
          </span>
          Search
        </button>
      </form>
      <div className={styles.selection}>
        <p>You may be looking for</p>
        <div className={styles.cards}>
          {Data.map((item, index) => (
            <ItemCard key={index} name={item.name} logo={item.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchBox;
