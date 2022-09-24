import { getCustomerData, getCustomers } from "../../api/getCustomers";

const getIsLogin = (isLogin) => {
  return { type: "SET_IS_LOGIN", payload: isLogin };
};

const setToken = (token) => {
  return { type: "GET_LOGIN_SUCCESS", payload: token };
};

const setError = (error) => {
  return { type: "GET_LOGIN_ERROR", payload: error };
};

const getUserData = () => async (dispatch) => {
  try {
    const userData = await getCustomerData();
    dispatch({ type: "SET_USER_DATA", payload: userData });
  } catch (err) {
    console.log(err);
  }
};

const setUserData = (userData) => ({
  type: "SET_USER_DATA",
  payload: userData,
});

const fetchUser = (userData, isAutoLog) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const status = response.data.success;
        status && dispatch(getIsLogin(response.data.success));
        status && dispatch(setToken(response.data.token));

        isAutoLog
          ? localStorage.setItem("login", JSON.stringify(response.data.token))
          : sessionStorage.setItem(
              "login",
              JSON.stringify(response.data.token)
            );
      })
      .catch((error) => {
        console.log(error);
        dispatch(setError(error.response.data));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("login");
  sessionStorage.removeItem("login");
  return { type: "LOGOUT" };
};

export { fetchUser, setError, getIsLogin, setToken, getUserData, setUserData };
