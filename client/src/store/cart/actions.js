import {
  addProductToCart,
  getCart,
  decreaseQuantity,
  deleteProduct,
} from "../../api/cart";
import getOneProduct from "../../api/getOneProduct";

export const getCartItem = (isLogin) =>
  isLogin
    ? async (dispatch) => {
        try {
          const cart = await getCart();
          dispatch({
            type: "SET_CART_LIST",
            payload: cart.products ? cart.products : [],
          });
        } catch (err) {
          console.log(err);
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
        try {
          const newCart = await decreaseQuantity(id);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        } catch (err) {
          console.log(err);
        }
      }
    : {
        type: "DECREASE_PRODUCT_QUANTITY_LOCAL",
        payload: id,
      };

export const increaseProductQuantity = (id, isLogin) =>
  isLogin
    ? async (dispatch) => {
        try {
          const newCart = await addProductToCart(id);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        } catch (err) {
          console.log(err);
        }
      }
    : {
        type: "INCREASE_PRODUCT_QUANTITY_LOCAL",
        payload: id,
      };

export const deleteCartItem = (id, isLogin) =>
  isLogin
    ? async (dispatch) => {
        try {
          const newCart = await deleteProduct(id);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        } catch (err) {
          console.log(err);
        }
      }
    : {
        type: "DELETE_PRODUCT_LOCAL",
        payload: id,
      };

export const addToCart = (id, itemNo, isLogin) =>
  isLogin
    ? async (dispatch) => {
        try {
          const newCart = await addProductToCart(id);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        } catch (err) {
          console.log(err);
        }
      }
    : async (dispatch) => {
        try {
          const cartItem = {
            product: await getOneProduct(itemNo),
            cartQuantity: 1,
          };
          dispatch({
            type: "ADD_PRODUCT_TO_CART_LOCAL",
            payload: cartItem,
          });
        } catch (err) {
          console.log(err);
        }
      };
