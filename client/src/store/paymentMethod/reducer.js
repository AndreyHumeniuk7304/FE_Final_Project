const paymentMethodReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHOOSE_PEYMENT_METHOD":
      return action.payload;

    default:
      return state;
  }
};

export default paymentMethodReducer;
