import getCustomers from "../../api/getCustomers";

const getSubscribes = (sub) => {
  localStorage.setItem("subscribe", JSON.stringify(sub));
  return { type: "SET_SUBSCRIBE", payload: sub };
};

const delSubscribes = (sub) => {
  localStorage.removeItem("subscribe");
  return { type: "DEL_SUBSCRIBE", payload: sub };
};

const fetchSubscribes = (userData, isAutoLog, nav) => {
  return async (dispatch) => {
    await getCustomers(userData)
      .then((response) => {
        const status = response.data.success;
        status && getSuccess(response.data, dispatch);
        status && nav("/my-account/user");
        isAutoLog &&
          localStorage.setItem("login", JSON.stringify(response.data.token));
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export { fetchSubscribes, getSubscribes, delSubscribes };
