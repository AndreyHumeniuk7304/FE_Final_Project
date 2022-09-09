const shippingMethodReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHOOSE_SHIPPING_METHOD":
      return action.payload;

    default:
      return state;
  }
};

export default shippingMethodReducer;
