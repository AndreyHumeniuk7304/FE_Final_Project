import { DELETE_SUBSCRIBE, GET_SUBSCRIBE, SET_SUBSCRIBE_ERROR } from "./type";

const initialState = {
  enabled: false,
  email: null,
  error: {},
};

const userSubscribe = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBSCRIBE: {
      return {
        ...state,
        enabled: action.payload.enabled,
        email: action.payload.email,
      };
    }
    case DELETE_SUBSCRIBE: {
      return initialState;
    }
    case SET_SUBSCRIBE_ERROR: {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};

export default userSubscribe;
