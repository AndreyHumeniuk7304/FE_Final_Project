import { Link } from "react-router-dom";

/* code review: good, but could be better
  для того, щоб не рендерити компонент Links у кожній вкладці
  можна було б зробити ще один роутер всередині компонента Cabinet
 */

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
            <p className="links__text">My profile</p>
          </Link>

          <Link className="links__style" to="/my-account/wishlist">
            <p className="links__text">My wishlist</p>
          </Link>

          <Link className="links__style" to="/my-account/history">
            <p className="links__text">Purchase history</p>
          </Link>

          <Link className="links__style" to="/my-account/address-book">
            <p className="links__text">Address book</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Links;
