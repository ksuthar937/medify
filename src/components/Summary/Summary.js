import React from "react";

import styles from "./Summary.module.css";
import SummaryCard from "./SummaryCard/SummaryCard";

import image1 from "../../assets/happypatients.svg";
import image2 from "../../assets/hospitals.svg";
import image3 from "../../assets/laboratory.svg";
import image4 from "../../assets/expertdoctors.svg";

const summaryData = [
  {
    id: "001",
    image: image1,
    name: "Happy Patient",
    value: 5000,
  },
  {
    id: "002",
    image: image2,
    name: "Hospitals",
    value: 200,
  },
  {
    id: "003",
    image: image3,
    name: "Laboratories",
    value: 1000,
  },
  {
    id: "004",
    image: image4,
    name: "Expert Doctors",
    value: 700,
  },
];

const Summary = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.leftPart}>
        <h3 className={styles.subHeading}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </h3>
        <h1 className={styles.heading}>Our Families</h1>
        <p className={styles.desc}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.rightPart}>
        <div className={styles.cards}>
          {summaryData.map((item) => (
            <SummaryCard
              key={item.id}
              name={item.name}
              image={item.image}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summary;
