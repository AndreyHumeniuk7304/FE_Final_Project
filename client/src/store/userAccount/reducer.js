const initialState = {
  isLogin: false,
  wishList: [],
};

const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN": {
      return {
        ...state,
        isLogin: true,
      };
    }

    default:
      return state;
  }
};

export default userAccountReducer;
