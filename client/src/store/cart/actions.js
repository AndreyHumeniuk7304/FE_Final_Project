import {
  addProductToCart,
  getCart,
  decreaseQuantity,
  deleteProduct,
  updateCart,
} from "../../api/cart";
import getOneProduct from "../../api/getOneProduct";

export const getCartItem = (isLogin) =>
  isLogin
    ? async (dispatch) => {
        try {
          const cart = await getCart();
          dispatch({
            type: "SET_CART_LIST",
            payload: cart ? cart.products : [],
          });
        } catch (err) {
          console.log(err);
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
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
        try {
          const newCart = await decreaseQuantity(id);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        } catch (err) {
          console.log(err);
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
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
        try {
          const newCart = await addProductToCart(id);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products ? newCart.products : [],
          });
        } catch (err) {
          console.log(err);
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
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
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
        }
      }
    : {
        type: "DELETE_PRODUCT_LOCAL",
        payload: id,
      };

export const addToCart = (id, itemNo, quantity, isLogin) =>
  isLogin
    ? async (dispatch) => {
        try {
          const cart = await getCart();
          let isInclude = false;
          const localCart = cart
            ? cart.products.map((item) => {
                if (item.product._id === id) {
                  isInclude = !isInclude;
                  return {
                    product: item.product._id,
                    cartQuantity: item.cartQuantity + quantity,
                  };
                }
                return {
                  product: item.product._id,
                  cartQuantity: item.cartQuantity,
                };
              })
            : [];
          if (!isInclude) {
            localCart.push({ product: id, cartQuantity: quantity });
          }
          const newCart = await updateCart(localCart);
          dispatch({
            type: "SET_CART_LIST",
            payload: newCart.products,
          });
        } catch (err) {
          console.log(err);
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
        }
      }
    : async (dispatch) => {
        try {
          const cartItem = {
            product: await getOneProduct(itemNo),
            cartQuantity: quantity,
          };
          dispatch({
            type: "ADD_PRODUCT_TO_CART_LOCAL",
            payload: cartItem,
          });
        } catch (err) {
          console.log(err);
          dispatch({
            type: "SET_CART_LIST",
            payload: [],
          });
        }
      };

export const isNotLoaded = () => ({ type: "IS_NOT_LOADED" });
