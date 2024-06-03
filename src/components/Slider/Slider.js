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

const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className={styles.cardslide}>
            <img src={Image1} alt="slider" width={400} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt="slider" width={400} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Image1} alt="slider" width={400} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Image2} alt="slider" width={400} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Image1} alt="slider" width={400} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Image2} alt="slider" width={400} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
