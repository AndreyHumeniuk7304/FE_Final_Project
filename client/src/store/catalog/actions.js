import getCategoryProductsToRender from "../../api/getCategoryProductsToRender";

import {
  ERROR_LOADED_PRODUCTS,
  LOADED_CATEGORIES_PRODUCTS,
  SAVE_SEARCH_WORD,
  SET_QUANTITY_PRODUCTS_ON_CHANGE,
  SET_QUANTITY_PRODUCTS_ON_CHANGE_LOADING,
  START_FETCH_PRODUCTS,
} from "./type";

export const fetchCategoriesProducts = (categoriesType) => (dispatch) => {
  dispatch({ type: START_FETCH_PRODUCTS });
  getCategoryProductsToRender(!categoriesType ? "/products" : categoriesType)
    .then((data) => {
      dispatch(
        loadedCategorieProducts({
          products: !categoriesType ? data : data.products,
          productsQuntity: data.productsQuantity,
        })
      );
    })
    .catch(() => {
      dispatch(errorLoadedProducts());
    });
};

export const writeSearchWord = (payload) => {
  return {
    type: SAVE_SEARCH_WORD,
    payload,
  };
};

export const loadedCategorieProducts = (products) => {
  return {
    type: LOADED_CATEGORIES_PRODUCTS,
    payload: products,
  };
};

export const errorLoadedProducts = () => ({
  type: ERROR_LOADED_PRODUCTS,
});

export const fetchAllProductsFilterPreloader =
  (categoriesType) => (dispatch) => {
    dispatch({ type: SET_QUANTITY_PRODUCTS_ON_CHANGE_LOADING });
    getCategoryProductsToRender(categoriesType)
      .then((data) => {
        dispatch(loadedCategorieProductsOnChange(data.productsQuantity));
      })
      .catch(() => {
        dispatch(errorLoadedProducts());
      });
  };

export const loadedCategorieProductsOnChange = (products) => {
  return {
    type: SET_QUANTITY_PRODUCTS_ON_CHANGE,
    payload: products,
  };
};
