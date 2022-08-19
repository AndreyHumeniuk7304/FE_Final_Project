import { Box, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registation";
const Entry = () => {
  const [isRegist, setIsRegist] = useState(false);

  isRegist
    ? (document.getElementById("regist").style.borderBottom =
        "1px solid white") &&
      (document.getElementById("login").style.borderBottom = "none")
    : (document.getElementById("login").style.borderBottom =
        "1px solid white") &&
      (document.getElementById("regist").style.borderBottom = "none");

  return (
    <div className="entry">
      <div className="entry__box">
        <div className="entry__header">
          <h6
            className="header__item"
            id="login"
            onClick={(e) => {
              setIsRegist(false);
            }}
          >
            Login
          </h6>
          <h6
            className="header__item"
            id="regist"
            onClick={() => setIsRegist(true)}
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
