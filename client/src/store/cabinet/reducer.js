const initialState = {
  currentCustomer: [],
  hasError: false,
};

const cabinetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_CUSTOMER": {
      return {
        ...state,
        currentCustomer: action.payload,
      };
    }
    case "LOADED_CURRENT_CUSTOMER": {
      return {
        ...state,
        hasError: true,
      };
    }
    // case "SET_NEW_DATA_CUSTOMER": {
    //   return {
    //     ...state,
    //     currentCustomer: action.payload,
    //   };
    // }
    default: {
      return state;
    }
  }
};

export default cabinetReducer;
