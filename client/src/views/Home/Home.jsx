import React from "react";
import ClockSlider from "../../components/ClockSlider/ClockSlider";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeNovelties from "../../components/HomeNovelties/HomeNovelties";
import HomeWatches from "../../components/HomeWatches/HomeWatches";

const Home = () => {
  return (
    <>
      <HomeCategories />
      <ClockSlider />
      <HomeNovelties />
      <HomeWatches />
    </>
  );
};

export default Home;
