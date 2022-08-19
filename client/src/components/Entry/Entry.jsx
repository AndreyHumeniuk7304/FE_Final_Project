import PropTypes from "prop-types";
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registation";

const Entry = () => {
  const [isRegist, setIsRegist] = useState(false);

  const setUnderline = (e) => {
    const regist = document.getElementById("regist");
    const login = document.getElementById("login");
    e.target.style.borderBottom = "1px solid white";
    regist !== e.target && (regist.style.borderBottom = "none");
    login !== e.target && (login.style.borderBottom = "none");
  };

  return (
    <div className="entry">
      <div className="entry__box">
        <div className="entry__header">
          <h6
            className="header__item"
            id="login"
            onClick={(e) => {
              setIsRegist(false);
              setUnderline(e);
            }}
          >
            Login
          </h6>
          <h6
            className="header__item"
            id="regist"
            onClick={(e) => {
              setIsRegist(true);
              setUnderline(e);
            }}
          >
            Registration
          </h6>
        </div>
        <div className="entry__content">
          {!isRegist && <Login />}
          {isRegist && <Registration />}
        </div>
      </div>
    </div>
  );
};

export default Entry;

Entry.propTypes = {
  //categories: PropTypes.string,
};
