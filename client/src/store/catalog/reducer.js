import {
  ERROR_LOADED_PRODUCTS,
  LOADED_CATEGORIES_PRODUCTS,
  SAVE_SEARCH_WORD,
  SET_QUANTITY_PRODUCTS_ON_CHANGE,
  SET_QUANTITY_PRODUCTS_ON_CHANGE_LOADING,
  START_FETCH_PRODUCTS,
} from "./type";

const initialState = {
  categorieProductList: [],
  searchWord: "",
  isLoading: false,
  hasError: false,
  isFilterOpenMobile: false,
  productsQuntity: 0,
  filterOnChange: { isLoading: false, productsQuntityOnChange: null },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_PRODUCTS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SAVE_SEARCH_WORD: {
      return {
        ...state,
        searchWord: action.payload,
      };
    }
    case LOADED_CATEGORIES_PRODUCTS: {
      return {
        ...state,
        categorieProductList: action.payload.products,
        productsQuntity: action.payload.productsQuntity,
        isLoading: false,
        hasError: false,
      };
    }

    case ERROR_LOADED_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    case SET_QUANTITY_PRODUCTS_ON_CHANGE: {
      return {
        ...state,
        filterOnChange: {
          isLoading: false,
          productsQuntityOnChange: action.payload,
        },
      };
    }
    case SET_QUANTITY_PRODUCTS_ON_CHANGE_LOADING: {
      return {
        ...state,
        filterOnChange: {
          isLoading: true,
          productsQuntityOnChange: null,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
