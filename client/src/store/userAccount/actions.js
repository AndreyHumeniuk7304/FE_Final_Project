import getCustomers, { setAuthToken } from "../../api/getCustomers";
import jwt_decode from "jwt-decode";

const getIsLogin = () => {
  return { type: "SET_IS_LOGIN" };
};

const setLogin = (login) => {
  return { type: "GET_LOGIN_SUCCESS", payload: login };
};
const setError = (error) => {
  return { type: "GET_LOGIN_ERROR", payload: error };
};

const getSuccess = (data, dispatch) => {
  const { success, token } = data;
  dispatch(getIsLogin(success));
  dispatch(setLogin(jwt_decode(token)));
};

const fetchProducts = (userData, isAutoLog, nav) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const status = response.data.success;
        status && getSuccess(response.data, dispatch);
        status && nav("/my-account/user");
        isAutoLog &&
          localStorage.setItem("login", JSON.stringify(response.data.token));
        setAuthToken(response.data.token);
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export { fetchProducts, setError, getSuccess, setLogin, getIsLogin };
