import { SET_CART_LIST, IS_NOT_LOADED, SET_ERROR } from "./type";

const initialState = {
  list: [],
  isLoaded: false,
  isError: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_LIST: {
      return {
        ...state,
        list: action.payload,
        isLoaded: true,
        isError: false,
      };
    }
    case IS_NOT_LOADED: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        list: [],
        isLoaded: true,
        isError: true,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
