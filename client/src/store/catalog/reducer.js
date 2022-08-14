const initialState = {
  categorieProductList: [],
  isLoading: false,
  hasError: false,
  isFilterOpenMobile: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOADED_CATEGORIES_PRODUCTS": {
      return {
        ...state,
        categorieProductList: action.payload,
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
