const initialState = {
  isLogin: false,
  isAdmin: false,
  error: "",
  customer: {},
  wishList: [],
};

const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN": {
      return {
        ...state,
        isLogin: true,
        error: "",
      };
    }
    case "GET_LOGIN_SUCCESS": {
      return {
        ...state,
        customer: action.payload,
      };
    }
    case "GET_LOGIN_ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default userAccountReducer;
