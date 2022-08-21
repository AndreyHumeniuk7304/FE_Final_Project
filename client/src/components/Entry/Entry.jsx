import { useState } from "react";
import Login from "./Login";
import Registration from "./Registation";

const Entry = () => {
  const [isRegist, setIsRegist] = useState(false);

  return (
    <div className="entry">
      <div className="entry__box">
        <div className="entry__header">
          <h6
            className={`header__item ${!isRegist && "header__item--underline"}`}
            id="login"
            onClick={(e) => {
              setIsRegist(false);
            }}
          >
            Login
          </h6>
          <h6
            className={`header__item ${isRegist && "header__item--underline"}`}
            id="regist"
            onClick={(e) => {
              setIsRegist(true);
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
