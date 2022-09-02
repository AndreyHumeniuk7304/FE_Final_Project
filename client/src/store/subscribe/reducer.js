const initialState = [];

const userSubscribe = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN": {
      return [...state, action.payload];
    }

    default:
      return state;
  }
};

export default userSubscribe;
