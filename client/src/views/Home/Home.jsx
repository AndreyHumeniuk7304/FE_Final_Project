import React from "react";
import ClockSlider from "../../components/ClockSlider/ClockSlider";
import HomeNovelties from "../../components/HomeNovelties/HomeNovelties";
import HomeCategory from "../../components/HomeCategory/HomeCategory";

const Home = () => {
  return (
    <>
      <ClockSlider />
      <HomeNovelties />
      <HomeCategory />
    </>
  );
};

export default Home;
