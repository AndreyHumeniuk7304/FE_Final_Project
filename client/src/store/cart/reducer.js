const initialState = {
  list: [],
  isLoaded: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART_LIST": {
      return {
        ...state,
        list: action.payload,
        isLoaded: true,
      };
    }
    case "IS_NOT_LOADED": {
      return {
        ...state,
        isLoaded: false,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
