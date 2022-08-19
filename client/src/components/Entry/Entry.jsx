import { Box, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import Login from "./Login";
import Registration from "./Registation";
const Entry = () => {
  const [isRegist, setIsRegist] = useState(false);
  return (
    <div className="entry">
      <div className="entry__box">
        <div className="entry__header">
          <h6 className="header__item" onClick={() => setIsRegist(false)}>
            Login
          </h6>
          <h6 className="header__item" onClick={() => setIsRegist(true)}>
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
