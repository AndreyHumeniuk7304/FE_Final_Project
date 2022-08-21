import getCustomers from "../../api/getCustomers";
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
  dispatch(getIsLogin(data.success));
  dispatch(setLogin(jwt_decode(data.token)));
};

const fetchProducts = (userData, isAutoLog) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const isLoaded = response.status === 200;
        isLoaded && getSuccess(response.data, dispatch);
        isAutoLog &&
          localStorage.setItem("login", JSON.stringify(response.data.token));
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  };
};

export { fetchProducts, setError, getSuccess };
