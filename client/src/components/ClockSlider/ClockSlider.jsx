import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const ClockSlider = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar]}
      effect="slider"
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation={true}
      speed={1500}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="swiper__slider">
        <Link to="/man" className="">
          <div className="swiper__wrapper"></div>
          <img src="https://fs6.deka.ua/files/sliders/91/1648206202_623da17ac56c0.jpg" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiper__slider">
        <Link to="/woman" className="">
          <div className="swiper__wrapper"></div>
          <img src="https://fs8.deka.ua/files/sliders/57/1653380448_628c9560b08a9.jpg" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className="swiper__slider">
        <Link to="/accessory" className="">
          <div className="swiper__wrapper"></div>
          <img src="https://fs1.deka.ua/content/news/n485/920x450.jpg" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

export default ClockSlider;
