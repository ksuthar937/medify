import React from "react";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Specialist.module.css";

import Doctor1 from "../../assets/doctor4.svg";
import Doctor2 from "../../assets/doctor2.svg";
import Doctor3 from "../../assets/doctor3.svg";
import Doctor4 from "../../assets/doctor4.svg";
import Doctor5 from "../../assets/doctor2.svg";

import SpecialistCard from "./SpecialistCard/SpecialistCard";

const MedicalSpecialist = [
  {
    name: "Dr. Lesley Hull",
    department: "Medicine",
    picture: Doctor1,
  },
  {
    name: "Dr. Ahmad Khan",
    department: "Neurologist",
    picture: Doctor2,
  },
  {
    name: "Dr. Heena Sachdeva",
    department: "Orthopadics",
    picture: Doctor3,
  },
  {
    name: "Dr. Ankur Sharma",
    department: "Medicine",
    picture: Doctor4,
  },
  {
    name: "Dr. Ahmad Stevens",
    department: "Neurologist",
    picture: Doctor5,
  },
];

const Specialist = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Our Medical Specialist</h1>
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {MedicalSpecialist.map((specialist) => {
          return (
            <SwiperSlide key={specialist.name}>
              <SpecialistCard
                name={specialist.name}
                department={specialist.department}
                picture={specialist.picture}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Specialist;
