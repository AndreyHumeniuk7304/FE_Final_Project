// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Autoplay,
//   Navigation,
//   Pagination,
//   Scrollbar,
// } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Link } from "react-router-dom";
//
// const ClockSlider = () => {
//   return (
//     <Swiper
//       className="swiper"
//       modules={[Navigation, Pagination, Scrollbar]}
//       effect="slider"
//       autoplay={{
//         delay: 3000,
//         disableOnInteraction: true,
//       }}
//       spaceBetween={0}
//       slidesPerView={1}
//       loop={true}
//       navigation={true}
//       speed={1500}
//       pagination={{ clickable: true }}
//     >
//       <SwiperSlide className="swiper__slider" onClick={() => console.log()}>
//         <Link to="/" className="">
//           <div className="swiper__wrapper"></div>
//           <img src="https://res.cloudinary.com/fe-advjs-final-project-3/image/upload/v1660230409/Garmin_Sale_Desktop_jd7g1t.webp" />
//         </Link>
//       </SwiperSlide>
//       <SwiperSlide className="swiper__slider" onClick={() => console.log()}>
//         <Link to="/" className="">
//           <div className="swiper__wrapper"></div>
//           <img src="https://res.cloudinary.com/fe-advjs-final-project-3/image/upload/v1660230425/Banner__AWFAO_Hero_Desktop2_xd2mw5.webp" />
//         </Link>
//       </SwiperSlide>
//       <SwiperSlide className="swiper__slider" onClick={() => console.log()}>
//         <Link to="/" className="">
//           <div className="swiper__wrapper"></div>
//           <img src="https://res.cloudinary.com/fe-advjs-final-project-3/image/upload/v1660230435/50__Sale_Desktop_scpavm.webp" />
//         </Link>
//       </SwiperSlide>
//     </Swiper>
//   );
// };
//
// SwiperCore.use([Autoplay]);
// SwiperCore.use([Pagination]);
//
// export default ClockSlider;
