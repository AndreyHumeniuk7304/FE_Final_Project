import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header_top-content">
          <div className="header__logo-container">
            <Link to="/" className="header__logo-container_link">
              <img src="./images/header-logo.png" alt="logo" />
            </Link>
          </div>

          <div className="header__account-container">
            <Link to="/search" className="header__account-container__icon">
              <img
                className="header__account-container__icon-img"
                src="./images/search-ico.svg"
                alt="search"
              />
            </Link>
            <Link to="/my-account" className="header__account-container__icon">
              <img
                className="header__account-container__icon-img"
                src="./images/account-ico.svg"
                alt="my-account"
              />
            </Link>
            <Link
              to="/shopping-bag"
              className="header__account-container__icon"
            >
              <img
                className="header__account-container__icon-img"
                src="./images/shopping-bag-ico.svg"
                alt="my-account"
              />
            </Link>

            <div className="header__account-container__icon">
              <img
                className="header__account-container__icon-img"
                src="./images/burger-ico.svg"
                alt="my-account"
              />
            </div>
          </div>
        </div>
        <div className="header__categories-container">
          <Link to="/man" className="">
            MAN
          </Link>
          <Link to="/woman" className="">
            WOMEN
          </Link>
          <Link to="/accessory" className="">
            ACCESSORY
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
