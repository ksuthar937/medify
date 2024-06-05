import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Slider.module.css";

import Image1 from "../../assets/slider-image-1.png";
import Image2 from "../../assets/slider-image-2.png";
import { useEffect, useState } from "react";

const Slider = () => {
  const [screenSize, setScreenSize] = useState(null);

  const updateScreenSize = () => {
    if (window.innerWidth < 768) {
      setScreenSize(1);
    } else if (window.innerWidth < 1024) {
      setScreenSize(2);
    } else {
      setScreenSize(3);
    }
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={screenSize}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={styles.cardslide}>
            <img src={Image1} alt="slider" width={400} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="slider" width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slider" width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="slider" width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="slider" width={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="slider" width={400} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
