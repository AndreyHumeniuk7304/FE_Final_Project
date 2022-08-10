import React from "react";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  return (
    <>
      <div className="homeCategory">
        <div className="homeCategory__title">SHOP BY CATEGORY</div>
        <div className="homeCategory__wrapper">
          <div className="homeCategory__type">
            <Link to="/">
              {/* настроить роутинг */}
              <div className="homeCategory__text-wrapper">
                <div className="homeCategory__text">SOME TEXT</div>
              </div>
              <img src="https://fs1.deka.ua/content/news/a601/1.jpg" alt="" />
            </Link>
          </div>
          <div className="homeCategory__type">
            <Link to="/">
              <div className="homeCategory__text-wrapper">
                <div className="homeCategory__text">SOME TEXT</div>
              </div>
              <img src="https://fs1.deka.ua/content/news/a600/1a.jpg" alt="" />
            </Link>
          </div>
          <div className="homeCategory__type">
            <Link to="/">
              <div className="homeCategory__text-wrapper">
                <div className="homeCategory__text">SOME TEXT</div>
              </div>
              <img src="https://fs1.deka.ua/content/news/a599/1.jpg" alt="" />
            </Link>
          </div>
          <div className="homeCategory__type">
            <Link to="/">
              <div className="homeCategory__text-wrapper">
                <div className="homeCategory__text">SOME TEXT</div>
              </div>
              <img src="https://fs1.deka.ua/content/news/a575/2.jpg" alt="" />
            </Link>
          </div>
          <div className="homeCategory__type">
            <Link to="/">
              <div className="homeCategory__text-wrapper">
                <div className="homeCategory__text">SOME TEXT</div>
              </div>
              <img src="https://fs1.deka.ua/content/news/a602/1.jpg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
