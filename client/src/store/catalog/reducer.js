const initialState = {
  categorieProductList: [],
  searchWord: "",
  isLoading: false,
  hasError: false,
  isFilterOpenMobile: false,
  productsQuntity: 0,
  productsQuntityOnChange: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_FETCH_PRODUCTS": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SAVE_SEARCH_WORD": {
      return {
        ...state,
        searchWord: action.payload,
      };
    }
    case "LOADED_CATEGORIES_PRODUCTS": {
      return {
        ...state,
        categorieProductList: action.payload.products,
        productsQuntity: action.payload.productsQuntity,
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
    case "SET_QUANTITY_PRODUCTS_ON_CHANGE": {
      return {
        ...state,
        productsQuntityOnChange: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
