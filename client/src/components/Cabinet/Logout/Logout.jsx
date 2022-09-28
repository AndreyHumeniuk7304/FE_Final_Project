import { logout } from "../../../store/userAccount/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Logout = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const getLogout = () => {
    dispatch(logout());
    nav("/my-account/entry");
  };
  return (
    <>
      <button className="btn logout" onClick={getLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
