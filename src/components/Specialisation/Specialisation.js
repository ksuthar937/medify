import React from "react";

import styles from "./Specialisation.module.css";

import SpecialisationCard from "./SpecialisationCard/SpecialisationCard";

import DentistryLogo from "../../assets/Dentistry.svg";
import BloodSampleLogo from "../../assets/Blood-Sample.svg";
import LaboratoryLogo from "../../assets/Drugstore.svg";
import HeartRateLogo from "../../assets/Heart-Rate.svg";
import HeartRateMonitorLogo from "../../assets/Heart-Rate-Monitor.svg";
import ImmuneLogo from "../../assets/Immune.svg";
import StethoscopeLogo from "../../assets/Stethoscope.svg";
import XRayLogo from "../../assets/X-Ray.svg";

const Data = [
  {
    name: "Dentistry",
    logo: DentistryLogo,
  },
  {
    name: "Primary Care",
    logo: StethoscopeLogo,
  },
  {
    name: "Cardiology",
    logo: HeartRateLogo,
  },
  {
    name: "MRI Response",
    logo: HeartRateMonitorLogo,
  },
  {
    name: "Blood Test",
    logo: BloodSampleLogo,
  },
  {
    name: "Piscologist",
    logo: ImmuneLogo,
  },
  {
    name: "Laboratory",
    logo: LaboratoryLogo,
  },
  {
    name: "X-Ray",
    logo: XRayLogo,
  },
];

const Specialisation = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Find By Specialisation</h1>
      <div className={styles.cards}>
        {Data.map((item, index) => (
          <SpecialisationCard key={index} name={item.name} logo={item.logo} />
        ))}
      </div>
      <button className={styles.btn}>View All</button>
    </div>
  );
};

export default Specialisation;
