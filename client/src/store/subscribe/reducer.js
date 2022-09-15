const initialState = {
  isSubscribe: false,
  email: null,
  error: {},
};

const userSubscribe = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SUBSCRIBE": {
      return action.payload;
    }
    case "DELETE_SUBSCRIBE": {
      return initialState;
    }
    case "SET_SUBSCRIBE_ERROR": {
      return { ...state, error: action.payload };
    }

    default:
      return state;
  }
};

export default userSubscribe;
