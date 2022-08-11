import { getCart } from "../../api/cart";

// export const getCartItem = (isLogin) => {
//   if (isLogin) {
//     return async (dispatch) => {
//       const cartItem = await getCart().products;
//       if (cartItem instanceof Error) {
//         dispatch({
//           type: "SET_CLOUD_CART_ITEM",
//           payload: [],
//         });
//       } else {
//         dispatch({
//           type: "SET_CLOUD_CART_ITEM",
//           payload: cartItem,
//         });
//       }
//     };
//   } else {
//     return {
//       type: "SET_LOCAL_CART_ITEM",
//       payload: localStorage.getItem("cart")
//         ? JSON.parse(localStorage.getItem("cart"))
//         : [],
//     };
//   }
// };

export const getCartItem = (isLogin) =>
  isLogin
    ? async (dispatch) => {
        const cartItem = await getCart().products;
        if (cartItem instanceof Error) {
          dispatch({
            type: "SET_CLOUD_CART_ITEM",
            payload: [],
          });
        } else {
          dispatch({
            type: "SET_CLOUD_CART_ITEM",
            payload: cartItem,
          });
        }
      }
    : {
        type: "SET_LOCAL_CART_ITEM",
        payload: localStorage.getItem("cart")
          ? JSON.parse(localStorage.getItem("cart"))
          : [],
      };

// export const getLocalCartItem = () => {
//   return {
//     type: "SET_LOCAL_CART_ITEM",
//     payload: localStorage.getItem("cart") ? localStorage.getItem("cart") : []
//   };
// };
//
// export const getCloudCartItem = () => async (dispatch) => {
//   const cartItem = await getCart().products;
//   if (cartItem instanceof Error) {
//     dispatch({
//       type: "SET_CLOUD_CART_ITEM",
//       payload: [],
//     });
//   } else {
//     dispatch({
//       type: "SET_CLOUD_CART_ITEM",
//       payload: cartItem,
//     });
//   }
// };
