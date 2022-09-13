import React, { useEffect, useState } from "react";
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
import { getSliders } from "../../api/slider";

const ClockSlider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders().then((res) => setSliders(res));
  }, []);

  return (
    <>
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
        pagination={{
          clickable: true,
        }}
      >
        {sliders.map((slide) => {
          return (
            <SwiperSlide key={slide._id} className="swiper__slider">
              <Link to="/" className="">
                <div className="swiper__wrapper"></div>
                <img src={slide.imageUrl} />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

export default ClockSlider;
