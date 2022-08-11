import { addProductToCart, getCart, decreaseQuantity } from "../../api/cart";

export const getCartItem = (isLogin) =>
  isLogin
    ? async (dispatch) => {
        const cart = await getCart();
        if (cart instanceof Error) {
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
        } else {
          dispatch({
            type: "SET_CART_LIST",
            payload: cart.products ? cart.products : [],
          });
        }
      }
    : {
        type: "SET_CART_LIST",
        payload: localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [],
      };

export const decreaseProductQuantity = (id, isLogin) =>
  isLogin
    ? async (dispatch) => {
        const newCart = await decreaseQuantity(id);
        if (newCart instanceof Error) {
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
        } else {
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        }
      }
    : {
        type: "DECREASE_PRODUCT_QUANTITY_LOCAL",
        payload: id,
      };

export const increaseProductQuantity = (id, isLogin) =>
  isLogin
    ? async (dispatch) => {
        const newCart = await addProductToCart(id);
        if (newCart instanceof Error) {
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
        } else {
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        }
      }
    : {
        type: "INCREASE_PRODUCT_QUANTITY_LOCAL",
        payload: id,
      };
