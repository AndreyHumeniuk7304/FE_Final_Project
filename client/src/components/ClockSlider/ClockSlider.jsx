import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { getSliders } from "../../api/slider";

const ClockSlider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    getSliders().then((res) => setSliders(res));
  }, []);

  const getSlides = () => {
    return sliders.map((slide) => {
      return (
        <SwiperSlide key={slide._id}>
          <Link to="/">
            <Box
              component={"img"}
              sx={{ width: "100%" }}
              src={slide.imageUrl}
            />
          </Link>
        </SwiperSlide>
      );
    });
  };

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
        {getSlides()}
      </Swiper>
    </>
  );
};

SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

export default ClockSlider;
