const initialState = {
  list: [],
  isLoaded: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART_LIST": {
      return {
        ...state,
        list: action.payload,
        isLoaded: true,
      };
    }
    case "DECREASE_PRODUCT_QUANTITY_LOCAL": {
      const cart = JSON.parse(localStorage.getItem("cart")).map((item) => {
        if (item.product._id === action.payload) {
          item.cartQuantity =
            item.cartQuantity - 1 > 0 ? item.cartQuantity - 1 : 1;
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
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        list: cart,
      };
    }
    case "ADD_PRODUCT_TO_CART_LOCAL": {
      const cart = JSON.parse(localStorage.getItem("cart"));
      let newCart;
      if (cart) {
        newCart = cart.find(
          (item) => item.product._id === action.payload.product._id
        )
          ? cart.map((item) => {
              if (item.product._id === action.payload.product._id) {
                ++item.cartQuantity;
              }
              return item;
            })
          : cart.concat(action.payload);
      } else {
        newCart = [action.payload];
      }
      // const newCart = cart ? cart.concat(action.payload) : [action.payload];

      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        list: newCart,
      };
    }
    case "IS_NOT_LOADED": {
      return {
        ...state,
        isLoaded: false,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
