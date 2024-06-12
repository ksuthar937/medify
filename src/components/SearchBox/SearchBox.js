import React from "react";

import styles from "./SearchBox.module.css";

import DoctorLogo from "../../assets/Doctor.svg";
import LabsLogo from "../../assets/Drugstore.svg";
import HospitalsLogo from "../../assets/Hospital.svg";
import MedicalStoreLogo from "../../assets/Capsule.svg";
import AmbulanceLogo from "../../assets/Ambulance.svg";

import ItemCard from "./ItemCard/ItemCard";

import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router";
import { useHospital } from "../../context/HospitalContext";
import axios from "axios";
import { API_URL } from "../../config";

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
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const { dispatch, states, cities, selectedState, selectedCity } =
    useHospital();

  const fetchCities = async (selectedState) => {
    try {
      const response = await axios.get(`${API_URL}/cities/${selectedState}`);
      dispatch({ type: "search/cities", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleStates = (e) => {
    const newState = e.target.value;
    fetchCities(newState);

    if (newState !== "") {
      dispatch({ type: "select/state", payload: newState });
    } else {
      dispatch({ type: "search/cities", payload: [] });
    }
  };

  const handleCity = (e) => {
    const newCity = e.target.value;
    dispatch({ type: "select/city", payload: newCity });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    navigate("/search");
  };

  const fetchData = async () => {
    dispatch({ type: "search/loading" });
    try {
      const response = await axios.get(
        `${API_URL}/data?state=${selectedState}&city=${selectedCity}`
      );
      dispatch({ type: "search/hospitals", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.layout}>
      <form onSubmit={handleSubmit} className={styles.userInputs}>
        <select value={selectedState} onChange={handleStates} required>
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {cities.length > 0 ? (
          <select value={selectedCity} onChange={handleCity} required>
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
      {pathname === "/" && (
        <div className={styles.selection}>
          <p>You may be looking for</p>
          <div className={styles.cards}>
            {Data.map((item, index) => (
              <ItemCard key={index} name={item.name} logo={item.logo} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchBox;
