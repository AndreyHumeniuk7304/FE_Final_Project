import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div className="links">
      <div className="links-container">
        <div className="links__welcome">
          <h3 className="links__welcome--title bold">
            Welcome <span className="links__welcome--name"> NAME NAME</span>
          </h3>
        </div>

        <div className="links__link-list">
          <Link className="links__style" to="/my-account/profile">
            <p>My profile</p>
          </Link>

          <Link className="links__style" to="/my-account/wishlist">
            <p>My wishlist</p>
          </Link>

          <Link className="links__style" to="/my-account/history">
            <p>Purchase history</p>
          </Link>

          <Link className="links__style" to="/my-account/address-book">
            <p>Address book</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Links;
