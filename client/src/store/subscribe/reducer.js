const initialState = {
  isSubscribe: false,
  email: null,
};

const userSubscribe = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SUBSCRIBE": {
      return action.payload;
    }
    case "DELETE_SUBSCRIBE": {
      return initialState;
    }

    default:
      return state;
  }
};

export default userSubscribe;
