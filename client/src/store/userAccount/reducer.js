const initialState = {
  isLogin: false,
  error: "",
  customers: {},
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
    case "GET_LOGIN_SUCCESS": {
      return {
        ...state,
        customers: action.payload,
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
