import getCategoryProductsToRender from "../../api/getCategoryProductsToRender";
import getAllProductsToRender from "../../api/getAllProductsToRender";

export const fetchCategoriesProducts = (categoriesType) => (dispatch) => {
  dispatch({ type: "START_FETCH_PRODUCTS" });
  getCategoryProductsToRender(categoriesType)
    .then((data) => {
      dispatch(
        loadedCategorieProducts({
          products: data.products,
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
    type: "SAVE_SEARCH_WORD",
    payload,
  };
};

export const fetchAllProducts = () => (dispatch) => {
  dispatch({ type: "START_FETCH_PRODUCTS" });
  getAllProductsToRender()
    .then((products) => {
      dispatch(
        loadedCategorieProducts({
          products: products,
          productsQuntity: products.length,
        })
      );
    })
    .catch(() => {
      dispatch(errorLoadedProducts());
    });
};

export const loadedCategorieProducts = (products) => {
  return {
    type: "LOADED_CATEGORIES_PRODUCTS",
    payload: products,
  };
};

export const errorLoadedProducts = () => ({
  type: "ERROR_LOADED_PRODUCTS",
});

export const fetchAllProductsFilterPreloader =
  (categoriesType) => (dispatch) => {
    getCategoryProductsToRender(categoriesType)
      .then((data) => {
        dispatch(loadedCategorieProducts(data.productsQuantity));
      })
      .catch(() => {
        dispatch(errorLoadedProducts());
      });
  };
