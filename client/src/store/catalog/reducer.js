const reducer = (state = {}, action) => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOADED_PRODUCTS": {
      return {
        ...state,
        productList: action.payload,
        isLoading: false,
        hasError: false,
      };
    }
    case "ERROR_LOADED_PRODUCTS": {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
