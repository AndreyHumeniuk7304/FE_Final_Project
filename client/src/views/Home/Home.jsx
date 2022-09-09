import React from "react";
import ClockSlider from "../../components/ClockSlider/ClockSlider";
import HomeNovelties from "../../components/HomeNovelties/HomeNovelties";
import HomeWatches from "../../components/HomeWatches/HomeWatches";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../store/catalog/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <>
      {/*<ClockSlider />*/}
      <HomeNovelties />
      <HomeWatches />
    </>
  );
};

export default Home;
