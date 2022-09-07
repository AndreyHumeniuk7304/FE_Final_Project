const initialState = {
  list: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WISHLIST": {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
};

export default wishlistReducer;
