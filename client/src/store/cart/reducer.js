const initialState = {
  productsInCart: [],
  isLogin: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOCAL_CART_ITEM": {
      return {
        ...state,
        productsInCart: action.payload,
      };
    }
    case "SET_CLOUD_CART_ITEM": {
      return {
        ...state,
        productsInCart: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
