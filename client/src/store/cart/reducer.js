const initialState = {
  list: [],
  isLogin: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART_LIST": {
      return {
        ...state,
        list: action.payload,
      };
    }
    case "DECREASE_PRODUCT_QUANTITY_LOCAL": {
      const cart = JSON.parse(localStorage.getItem("cart")).map((item) => {
        if (item.product._id === action.payload) {
          item.cartQuantity =
            item.cartQuantity - 1 > 0 ? item.cartQuantity - 1 : 0;
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        ...state,
        list: cart,
      };
    }
    case "INCREASE_PRODUCT_QUANTITY_LOCAL": {
      const cart = JSON.parse(localStorage.getItem("cart")).map((item) => {
        if (item.product._id === action.payload) {
          item.cartQuantity =
            item.cartQuantity + 1 < item.product.quantity
              ? item.cartQuantity + 1
              : item.product.quantity;
        }
        return item;
      });
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));

      return {
        ...state,
        list: cart,
      };
    }
    case "DELETE_PRODUCT_LOCAL": {
      const cart = JSON.parse(localStorage.getItem("cart")).filter(
        (item) => item.product._id !== action.payload
      );
      console.log(cart);
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        list: cart,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
