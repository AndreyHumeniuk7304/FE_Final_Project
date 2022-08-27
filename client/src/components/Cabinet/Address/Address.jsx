import { Link } from "react-router-dom";
import Links from "../Links/Links";
const Address = () => {
  return (
    <div className="profile">
      <Links />
      <div className="address">
        <div className="address__left-menu">
          <div className="address__book">ADDRESS BOOK</div>
          <div className="address__delivery">DELIVERY ADDRESS</div>
          <input
            className="address__btn"
            type="button"
            value="ADD NEW ADDRESS"
          ></input>
        </div>
        <div className="address__right-menu">
          <div className="address__billing">BILLING ADDRESS</div>
          <input
            className="address__btn"
            type="button"
            value="ADD NEW ADDRESS"
          ></input>
        </div>
      </div>
    </div>
  );
};
export default Address;
