import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Links = () => {
  const customer = useSelector((state) => state.userAccount.customer);

  return (
    <div className="links">
      <div className="links-container">
        <div className="links__welcome">
          <h3 className="links__welcome--title bold">
            Welcome{" "}
            <span className="links__welcome--name">
              {customer.firstName} {customer.lastName}
            </span>
          </h3>
        </div>

        <div className="links__link-list">
          <Link
            className={`links__style ${
              location.pathname === "/my-account/profile" ? "active" : null
            }`}
            to="/my-account/profile"
          >
            <p className="links__text">My profile</p>
          </Link>

          <Link
            className={`links__style ${
              location.pathname === "/my-account/wishlist" ? "active" : null
            }`}
            to="/my-account/wishlist"
          >
            <p className="links__text">My wishlist</p>
          </Link>

          <Link
            className={`links__style ${
              location.pathname === "/my-account/history" ? "active" : null
            }`}
            to="/my-account/history"
          >
            <p className="links__text">Purchase history</p>
          </Link>

          <Link
            className={`links__style ${
              location.pathname === "/my-account/address-book" ? "active" : null
            }`}
            to="/my-account/address-book"
          >
            <p className="links__text">Address book</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Links;
