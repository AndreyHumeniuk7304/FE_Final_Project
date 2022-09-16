const initialState = {
  purchasesHistory: [],
  showModalDelivery: false,
  showModalBilling: false,
};

const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DELIVERY_ADDRESS": {
      return {
        ...state,
        currentCustomer: action.payload,
      };
    }
    case "SHOW_MODAL": {
      return {
        ...state,
        showModal: action.payload,
      };
    }
    case "SHOW_DELIVERY_MODAL": {
      return {
        ...state,
        showModalDelivery: action.payload,
      };
    }
    case "SHOW_BILLING_MODAL": {
      return {
        ...state,
        showModalBilling: action.payload,
      };
    }

    case "LOADED_PURCHASES_HISTORY": {
      return {
        ...state,
        purchasesHistory: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default cabinetReducer;
