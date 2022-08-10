import getAllProducts from "../../api/getAllProducts";

export const fetchProducts = () => (dispatch) => {
  dispatch({ type: "START_FETCH_PRODUCTS" });
  getAllProducts()
    .then((products) => {
      dispatch(loadedProducts(products));
    })
    .catch(() => {
      dispatch(errorLoadedProducts());
    });
};

export const loadedProducts = (products) => {
  return {
    type: "LOADED_PRODUCTS",
    payload: products,
  };
};

export const errorLoadedProducts = () => ({
  type: "ERROR_LOADED_PRODUCTS",
});
