import { getSubscriberByEmail } from "../../api/subscribe";

const getSubscribes = (sub) => {
  localStorage.setItem("subscribe", JSON.stringify(sub));
  return { type: "SET_SUBSCRIBE", payload: sub };
};

const delSubscribes = (sub) => {
  localStorage.removeItem("subscribe");
  return { type: "DEL_SUBSCRIBE", payload: sub };
};

const fetchSubscriber = (userEmail, isAutoLog) => {
  return async (dispatch) => {
    await getSubscriberByEmail(userEmail)
      .then((response) => {
        const status = response.data.success;
        status && getSubscribes(response.data, dispatch);
        isAutoLog &&
          localStorage.setItem("subscribe", JSON.stringify(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export { fetchSubscriber, getSubscribes, delSubscribes };
