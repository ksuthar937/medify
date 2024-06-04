import React from "react";

import styles from "./PatientCaring.module.css";

import Image1 from "../../assets/patient-caring1.png";
import Image2 from "../../assets/patient-caring2.png";

import CallLogo from "../../assets/FreeConsultation.svg";

import BulletPoint from "../../assets/checkpoints.svg";

const PatientCaring = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.leftPart}>
        <div className={styles.item1}>
          <img src={Image1} alt="patient-caring" width={300} />
        </div>
        <div className={styles.item2}>
          <img src={Image2} alt="patient-caring" width={300} />
        </div>
        <div className={styles.item3}>
          <img src={CallLogo} alt="PhoneCall" width={40} />
          <h3>Free Consultation</h3>
          <p>Consultation with the best</p>
        </div>
      </div>
      <div className={styles.rightPart}>
        <h3>HELPING PATIENTS FROM AROUND THE GLOBE!!</h3>
        <h1>
          Patient <span>Caring</span>
        </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className={styles.bulletPoint}>
          <img src={BulletPoint} alt="checkpoint" width={20} />
          <p>Stay Updated About Your Health</p>
        </div>
        <div className={styles.bulletPoint}>
          <img src={BulletPoint} alt="checkpoint" width={20} />
          <p>Check Your Results Online</p>
        </div>
        <div className={styles.bulletPoint}>
          <img src={BulletPoint} alt="checkpoint" width={20} />
          <p>Manage Your Appointments</p>
        </div>
      </div>
    </section>
  );
};

export default PatientCaring;
