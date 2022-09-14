import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const authUser = useSelector((state) => state.userAccount.isLogin);
  const location = useLocation();

  return authUser ? (
    children
  ) : (
    <Navigate to="/my-account/entry" state={{ from: location }} />
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
