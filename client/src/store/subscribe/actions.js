import { getSubscriberByEmail } from "../../api/subscribe";

const getSubscribes = (sub) => {
  localStorage.setItem("subscribe", JSON.stringify(sub));
  return { type: "GET_SUBSCRIBE", payload: sub };
};

const delSubscribes = (sub) => {
  localStorage.removeItem("subscribe");
  return { type: "DELETE_SUBSCRIBE", payload: sub };
};
const setError = (err) => {
  return { type: "SET_SUBSCRIBE_ERROR", payload: err };
};

const fetchSubscriber = (userEmail) => {
  return async (dispatch) => {
    await getSubscriberByEmail(userEmail)
      .then((response) => {
        const status = response.data.success;
        status && getSubscribes(response.data);
        localStorage.setItem("subscribe", JSON.stringify(response.data));
      })
      .catch((error) => {
        dispatch(setError(error.response.data));
      });
  };
};

export { fetchSubscriber, getSubscribes, delSubscribes };
