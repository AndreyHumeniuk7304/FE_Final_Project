import getCustomerOrders from "../../api/getCustomerOrders";

const setDeliveryAdress = (deliveryAddress) => {
  return { type: "SET_DELIVERY_ADDRESS", payload: deliveryAddress };
};
const setPurchasesHistory = (history) => {
  return { type: "LOADED_PURCHASES_HISTORY", payload: history };
};

export const fetchCustomerOrders = () => (dispatch) => {
  getCustomerOrders().then((data) => dispatch(setPurchasesHistory(data)));
};

export const addDeliveryAdress = (updateCustomer) => (dispatch) => {
  dispatch(setDeliveryAdress(updateCustomer));
};

export const showModal = (open) => {
  return { type: "SHOW_MODAL", payload: !open };
};
export const showDeliveryModal = (open) => {
  return { type: "SHOW_DELIVERY_MODAL", payload: !open };
};
export const showBillingModal = (open) => {
  return { type: "SHOW_BILLING_MODAL", payload: !open };
};
