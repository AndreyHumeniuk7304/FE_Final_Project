import { date } from "yup";

const initialState = {};

const userSubscribe = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUBSCRIBE": {
      return action.payload;
    }
    case "DEL_SUBSCRIBE": {
      return {};
    }

    default:
      return state;
  }
};

export default userSubscribe;
