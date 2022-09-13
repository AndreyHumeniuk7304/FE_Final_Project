import {
  addProductToCart,
  getCart,
  decreaseQuantity,
  deleteProduct,
  updateCart,
} from "../../api/cart";
import getOneProduct from "../../api/getOneProduct";

export const getCartItem = (isLogin) => async (dispatch) => {
  if (isLogin) {
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
  } else {
    dispatch({
      type: "SET_CART_LIST",
      payload: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    });
  }
};

export const decreaseProductQuantity = (id, isLogin) => async (dispatch) => {
  if (isLogin) {
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
  } else {
    const cart = JSON.parse(localStorage.getItem("cart")).map((item) => {
      if (item.product._id === id) {
        item.cartQuantity =
          item.cartQuantity - 1 > 0 ? item.cartQuantity - 1 : 1;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "SET_CART_LIST",
      payload: cart,
    });
  }
};

export const increaseProductQuantity = (id, isLogin) => async (dispatch) => {
  if (isLogin) {
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
  } else {
    const cart = JSON.parse(localStorage.getItem("cart")).map((item) => {
      if (item.product._id === id) {
        item.cartQuantity =
          item.cartQuantity + 1 < item.product.quantity
            ? item.cartQuantity + 1
            : item.product.quantity;
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "SET_CART_LIST",
      payload: cart,
    });
  }
};

export const deleteCartItem = (id, isLogin) => async (dispatch) => {
  if (isLogin) {
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
  } else {
    const cart = JSON.parse(localStorage.getItem("cart")).filter(
      (item) => item.product._id !== id
    );

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "SET_CART_LIST",
      payload: cart,
    });
  }
};

export const addToCart =
  (id, itemNo, quantity, isLogin) => async (dispatch) => {
    if (isLogin) {
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
    } else {
      try {
        const cartItem = {
          product: await getOneProduct(itemNo),
          cartQuantity: quantity,
        };

        const cart = JSON.parse(localStorage.getItem("cart"));
        let newCart;
        if (cart) {
          newCart = cart.find(
            (item) => item.product._id === cartItem.product._id
          )
            ? cart.map((item) => {
                if (item.product._id === cartItem.product._id) {
                  ++item.cartQuantity;
                }
                return item;
              })
            : cart.concat(cartItem);
        } else {
          newCart = [cartItem];
        }
        dispatch({
          type: "SET_CART_LIST",
          payload: newCart,
        });
      } catch (err) {
        console.log(err);
        dispatch({
          type: "SET_CART_LIST",
          payload: [],
        });
      }
    }
  };

export const isNotLoaded = () => ({ type: "IS_NOT_LOADED" });
