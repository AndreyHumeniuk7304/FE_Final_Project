import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchInput from "../SearchInput/SearchInput";
import { fetchCategoriesProducts } from "../../store/catalog/actions";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="container-header">
          <div className="header__top-content">
            <div className="header__logo-container">
              <Link to="/" className="header__logo-container_link">
                <img src="../images/header-logo.png" alt="logo" />
              </Link>
            </div>

            <div className="header__account-container">
              <SearchInput />
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

              <a href="#!" className="header__account-container__link burger">
                <div className="header__account-container__ico">
                  <img
                    className="header__account-container__ico-img"
                    src="../images/burger-ico.svg"
                    alt="my-account"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="header__categories-container">
            <Link to="/man" className="header__categories-container__link">
              MAN
            </Link>
            <Link to="/woman" className="header__categories-container__link">
              WOMEN
            </Link>
            <Link
              to="/accessory"
              className="header__categories-container__link"
            >
              ACCESSORY
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
