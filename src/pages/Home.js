import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import HeroSection from "../components/HeroSection/HeroSection";
import Slider from "../components/Slider/Slider";
import Specialisation from "../components/Specialisation/Specialisation";
import Specialist from "../components/Specialist/Specialist";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import NewsBlogs from "../components/News/NewsBlogs";
import Summary from "../components/Summary/Summary";
import FAQ from "../components/FAQ/FAQ";
import SearchBox from "../components/SearchBox/SearchBox";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router";
import { useHospital } from "../context/HospitalContext";

const Home = () => {
  const navigate = useNavigate();

  const { dispatch } = useHospital();

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetchStates();
  }, []);

  const fetchStates = async () => {
    try {
      const response = await axios.get(`${API_URL}/states`);
      setStates(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async (selectedState) => {
    try {
      const response = await axios.get(`${API_URL}/cities/${selectedState}`);
      setCities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStates = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);

    if (newState !== "") {
      fetchCities(newState);
    } else {
      setCities([]);
    }
  };

  const handleCity = (e) => {
    const newCity = e.target.value;
    setSelectedCity(newCity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    navigate("/search");
  };

  const fetchData = async () => {
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
    <>
      <HeroSection />
      <div className={styles.searchBoxWrapper}>
        <SearchBox
          states={states}
          cities={cities}
          handleStates={handleStates}
          handleCity={handleCity}
          selectedCity={selectedCity}
          handleSubmit={handleSubmit}
        />
      </div>
      <Slider />
      <Specialisation />
      <Specialist />
      <PatientCaring />
      <NewsBlogs />
      <Summary />
      <FAQ />
    </>
  );
};

export default Home;
