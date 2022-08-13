import React from "react";
import ClockSlider from "../../components/ClockSlider/ClockSlider";
import HomeNovelties from "../../components/HomeNovelties/HomeNovelties";
import HomeWatches from "../../components/HomeWatches/HomeWatches";

const Home = () => {
  return (
    <>
      <ClockSlider />
      <HomeNovelties />
      <HomeWatches />
    </>
  );
};

export default Home;
