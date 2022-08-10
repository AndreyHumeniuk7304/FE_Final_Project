import React from "react";
import { Link } from "react-router-dom";

const HomeNovelties = () => {
  return (
    <>
      <div className="novelties">
        <div className="novelties__title">NEW COLLECTION</div>
        <div className="novelties__wrapper">
          <div className="novelties__type item-1">
            <Link to="./man">
              <img src="https://fs1.deka.ua/content/news/a599/1.jpg" alt="" />
              <div className="novelties__text-wrapper">
                <div className="novelties__text">NEW COLLECTION</div>
              </div>
            </Link>
          </div>
          <div className="novelties__type item-2">
            <Link to="/woman">
              <img
                src="https://fs1.deka.ua/content/news/n487/920-450.jpg"
                alt=""
              />
              <div className="novelties__text-wrapper">
                <div className="novelties__text">NEW COLLECTION</div>
              </div>
            </Link>
          </div>
          <div className="novelties__type item-3">
            <Link to="/accessory">
              <img
                src="https://fs1.deka.ua/content/news/n497/novost-DEKA.jpg"
                alt=""
              />
              <div className="novelties__text-wrapper">
                <div className="novelties__text">NEW COLLECTION</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNovelties;
