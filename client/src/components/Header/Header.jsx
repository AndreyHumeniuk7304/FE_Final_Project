// import { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { styled } from "@mui/material/styles";
// import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Header = (props) => {
  // const dispatch = useDispatch();
  const { statusOpenBurger, handleBurger, closeBurger } = props;
  return (
    <header className={statusOpenBurger ? "header active-burger" : "header"}>
      <div className="container">
        <div className="container-header">
          <div className="header__top-content">
            <div className="header__logo-container">
              <Link to="/" className="header__logo-container_link">
                <img src="../images/header-logo.png" alt="logo" />
              </Link>
            </div>

            <div className="header__account-container">
              <Link
                to="/search"
                className="header__account-container__link search"
              >
                <div className="header__account-container__ico">
                  <img
                    className="header__account-container__ico-img"
                    src="../images/search-ico.svg"
                    alt="search"
                  />
                </div>
                <p className="header__account-container__text">Search</p>
              </Link>
              <Link
                to="/my-account"
                className="header__account-container__link account"
              >
                <div className="header__account-container__ico">
                  <img
                    className="header__account-container__ico-img"
                    src="../images/account-ico.svg"
                    alt="my-account"
                  />
                </div>
                <p className="header__account-container__text">My account</p>
              </Link>
              <Link
                to="/cart"
                className="header__account-container__link shopping-bag"
              >
                <div className="header__account-container__ico">
                  <img
                    className="header__account-container__ico-img"
                    src="../images/shopping-bag-ico.svg"
                    alt="my-account"
                  />
                </div>

                <p className="header__account-container__text">Shopping Bag</p>
              </Link>

              <a
                href="#!"
                onClick={handleBurger}
                className="header__account-container__link burger"
              >
                <div className="header__account-container__ico">
                  {!statusOpenBurger ? (
                    <img
                      className="header__account-container__ico-img"
                      src="../images/burger-ico.svg"
                      alt="my-account"
                    />
                  ) : (
                    <img
                      className="header__account-container__ico-img btn-close"
                      src="../images/close-button.png"
                      alt="cross"
                    />
                  )}
                </div>
              </a>
            </div>
          </div>
          <div className="header__categories-container">
            <Link
              onClick={closeBurger}
              to="/man"
              className="header__categories-container__link"
            >
              MAN
            </Link>
            <Link
              onClick={closeBurger}
              to="/woman"
              className="header__categories-container__link"
            >
              WOMEN
            </Link>
            <Link
              onClick={closeBurger}
              to="/accessory"
              className="header__categories-container__link"
            >
              ACCESSORY
            </Link>
          </div>
        </div>
      </div>
      <div className={!statusOpenBurger ? "burger-menu" : "burger-menu_active"}>
        <div className="container">
          <div className="burger-menu__wrapper">
            <div className="burger-menu__login">
              <a className="burger-menu__login_link">Login / Register</a>
            </div>
            <div className="burger-menu__pages">
              <ul className="burger-menu__pages-list pages-list">
                <li className="pages-list__item top-item">
                  <a href="" className="pages-list__item-link">
                    New collection
                  </a>
                </li>
                <li className="pages-list__item top-item">
                  <a href="" className="pages-list__item-link">
                    New arrivals
                  </a>
                </li>
                <li className="pages-list__item bottom-item">
                  <Link
                    onClick={closeBurger}
                    to="/woman"
                    className="pages-list__item-link"
                  >
                    WOMAN COLLECTION
                  </Link>
                </li>
                <li className="pages-list__item bottom-item">
                  <Link
                    onClick={closeBurger}
                    to="/man"
                    className="pages-list__item-link"
                  >
                    MAN COLLECTION
                  </Link>
                </li>
                <li className="pages-list__item bottom-item">
                  <Link
                    onClick={closeBurger}
                    to="/accessory"
                    className="pages-list__item-link"
                  >
                    ACCESSORY
                  </Link>
                </li>
              </ul>
            </div>
            <div className="burger-menu__footer">
              <Box component="h3" className="burger-menu__footer_title">
                HELP
              </Box>
              <ul className="burger-menu__footer_list">
                <li className="burger-menu__footer_list-item">
                  Frequently asked questions
                </li>
                <li className="burger-menu__footer_list-item">Contact</li>
                <li className="burger-menu__footer_list-item">
                  How to purchase
                </li>
                <li className="burger-menu__footer_list-item">Payment</li>
              </ul>
              <Box component="h3" className="burger-menu__footer_title">
                COMPANY
              </Box>
              <ul className="burger-menu__footer_list">
                <li className="burger-menu__footer_list-item">
                  Frequently asked questions
                </li>
                <li className="burger-menu__footer_list-item">Contact</li>
                <li className="burger-menu__footer_list-item">
                  How to purchase
                </li>
                <li className="burger-menu__footer_list-item">Payment</li>
              </ul>
              <Box
                component="h3"
                className="burger-menu__footer_title_lst-title"
              >
                FOLLOW US
              </Box>
              <Box
                component="div"
                className="burger-menu__footer_icons footer_icons"
              >
                <a href="#!" className="footer_icons__item">
                  <img
                    className="footer_icons__item_img"
                    src="./images/facebok-logo.png"
                    alt=""
                  />
                </a>
                <a href="!#" className="footer_icons__item">
                  <img
                    className="footer_icons__item_img"
                    src="./images/inst-logo.png"
                    alt=""
                  />
                </a>
                <a href="#!" className="footer_icons__item">
                  <img
                    className="footer_icons__item_img"
                    src="./images/pint-logo.png"
                    alt=""
                  />
                </a>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleBurger: PropTypes.func,
  statusOpenBurger: PropTypes.bool,
  closeBurger: PropTypes.func,
};

export default Header;
