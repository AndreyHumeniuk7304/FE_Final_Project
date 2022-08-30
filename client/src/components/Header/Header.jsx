import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useEffect } from "react";
import { switchThemeAction } from "../../store/switchTheme/action";

const Header = (props) => {
  const { statusOpenBurger, handleBurger, closeBurger } = props;
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const cartList = useSelector((state) => state.cart.list);
  const [isExpandInput, setIsExpandInput] = useState(true);
  const nightMode = useSelector((state) => state.nightMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("nightMode")) {
      dispatch(
        switchThemeAction(!JSON.parse(localStorage.getItem("nightMode")))
      );
    } else {
      document.activeElement.classList.remove("light");
      document.activeElement.classList.add("dark");
    }
  });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("nightMode")) === true) {
      document.activeElement.classList.remove("light");
      document.activeElement.classList.add("dark");
    }

    if (JSON.parse(localStorage.getItem("nightMode")) === false) {
      document.activeElement.classList.add("light");
      document.activeElement.classList.remove("dark");
    }
  }, [nightMode]);

  const themeSwitcherLS = (value) => {
    localStorage.setItem("nightMode", JSON.stringify(!nightMode));
    dispatch(switchThemeAction(!value));
  };

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
            {nightMode === true ? (
              <LightModeOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => themeSwitcherLS(false)}
              />
            ) : (
              <DarkModeOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => themeSwitcherLS(true)}
              />
            )}

            <div className="header__account-container">
              {window.screen.width < 720 ? (
                <SearchInput
                  isExpandInput={isExpandInput}
                  setIsExpandInput={setIsExpandInput}
                />
              ) : (
                <SearchInput />
              )}
              <Link
                to={isLogin ? "/my-account/user" : "/my-account/entry"}
                className="header__account-container__link account"
                style={{ display: isExpandInput ? "flex" : "none" }}
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
                style={{ display: isExpandInput ? "flex" : "none" }}
              >
                <div className="header__account-container__ico">
                  <img
                    className="header__account-container__ico-img"
                    src="../images/shopping-bag-ico.svg"
                    alt="my-account"
                  />
                </div>

                <p className="header__cart-quantity">
                  {cartList && cartList.length}
                </p>
              </Link>

              <a
                href="#!"
                onClick={handleBurger}
                className="header__account-container__link burger"
                style={{ display: isExpandInput ? "flex" : "none" }}
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
              to="/products/filter?categories=mens"
              className="header__categories-container__link"
            >
              MAN
            </Link>
            <Link
              onClick={closeBurger}
              to="/products/filter?categories=ladies"
              className="header__categories-container__link"
            >
              WOMEN
            </Link>
            <Link
              onClick={closeBurger}
              to="/products/filter?categories=accessories"
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
                  <a href="#!"> Frequently asked questions</a>
                </li>
                <li className="burger-menu__footer_list-item">
                  <Link onClick={closeBurger} to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="burger-menu__footer_list-item">
                  <a href="#!">How to purchase</a>
                </li>
                <li className="burger-menu__footer_list-item">
                  <a href="!#">Payment</a>
                </li>
              </ul>
              <Box component="h3" className="burger-menu__footer_title">
                COMPANY
              </Box>
              <ul className="burger-menu__footer_list">
                <li className="burger-menu__footer_list-item">
                  <a href="#!">History of the brande</a>
                </li>
                <li className="burger-menu__footer_list-item">
                  <a href="#!">Policy</a>
                </li>
                <li className="burger-menu__footer_list-item">
                  <a href="#!">Work with Us</a>
                </li>
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
