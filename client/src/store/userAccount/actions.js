import getCustomers from "../../api/getCustomers";
import jwt_decode from "jwt-decode";

const getIsLogin = (isLogin) => {
  return { type: "SET_IS_LOGIN", payload: isLogin };
};

const setLogin = (login) => {
  return { type: "GET_LOGIN_SUCCESS", payload: login };
};
const setError = (error) => {
  return { type: "GET_LOGIN_ERROR", payload: error };
};

const fetchUser = (userData, isAutoLog) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const status = response.data.success;
        status && dispatch(getIsLogin(response.data.success));
        status &&
          dispatch(
            setLogin({
              ...jwt_decode(response.data.token),
              token: response.data.token,
            })
          );

        isAutoLog
          ? localStorage.setItem("login", JSON.stringify(response.data.token))
          : sessionStorage.setItem(
              "login",
              JSON.stringify(response.data.token)
            );
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export { fetchUser, setError, getIsLogin, setLogin };
