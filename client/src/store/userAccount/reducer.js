const initialState = {
  isLogin: false,
  error: {},
  customer: {},
  token: "",
};

const userAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IS_LOGIN": {
      return {
        ...state,
        isLogin: action.payload,
        error: {},
      };
    }
    case "GET_LOGIN_SUCCESS": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "SET_USER_DATA": {
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
    case "LOGOUT": {
      return {
        ...state,
        isLogin: false,
        error: {},
        customer: {},
        token: "",
      };
    }

    default:
      return state;
  }
};

export default userAccountReducer;
