import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
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

      <div className="header__logo-container">
        <Link to="/" className="">
        Originalité
        </Link>
      </div>

      <div className="header__account-container">
        <Link to="/search" className="">
          Search
        </Link>
        <Link to="/my-account" className="">
          My account
        </Link>
        <Link to="/shopping-bag" className="">
          Shopping bag
        </Link>
      </div>
    </header>
  )
}

export default Header
