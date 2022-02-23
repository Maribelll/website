import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/Image";

import slide1 from "../public/slider/slider_1.jpg";
import slide2 from "../public/slider/slider_2.jpg";
import slide3 from "../public/slider/slider_3.jpg";
import slide4 from "../public/slider/slider_4.jpg";
import slide5 from "../public/slider/slider_5.jpg";
import slide6 from "../public/slider/slider_6.jpg";
import styles from "../styles/Slider.module.scss";

export default function Slider() {
  return (
    <div className={styles.App}>
      <div className={styles.carouselContainer}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#B6BAD7",
          }}
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          /*  autoplay={{
            delay: 2900,
            disableOnInteraction: false,
          }} */
          navigation={{
            clickable: true,
            /* nextEl: ".swiperButtonPrev",
            prevEl: ".swiperButtonNext", */
          }}
          className={styles.mySwiper}
          loop={true}
          breakpoints={{
            1440: {
              spaceBetween: 140,
              slidesPerView: 2.5,
            },
            950: {
              spaceBetween: 140,
              slidesPerView: 2,
            },
            760: {
              spaceBetween: 90,
              slidesPerView: 1.5,
            },
            400: {
              spaceBetween: 20,
              slidesPerView: 1.1,
            },
          }}
        >
          <SwiperSlide>
            <Image src={slide1} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide2} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide3} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide4} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide5} alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={slide6} alt="slide1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
