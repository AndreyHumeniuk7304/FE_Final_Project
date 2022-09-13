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

const setUserData = () => async (dispatch) => {
  try {
    console.log("test2");
    const userData = await getCustomerData();
    dispatch({ type: "SET_USER_DATA", payload: userData });
  } catch (err) {
    console.log(err);
  }
};

const getSuccess = (data, dispatch) => {
  dispatch(getIsLogin(data.success));
  dispatch(setToken(data.token));
};

const fetchUser = (userData, isAutoLog, nav) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const status = response.data.success;
        status && getSuccess(response.data, dispatch);
        status && nav("/my-account/user");
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

export { fetchUser, setError, getSuccess, getIsLogin, setToken, setUserData };
