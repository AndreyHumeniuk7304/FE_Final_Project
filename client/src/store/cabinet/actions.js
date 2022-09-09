import getCurrentCustomer from "../../api/getCurrentCustomer";
import getCustomerOrders from "../../api/getCustomerOrders";

export const setCurrentCustomer = (currentCustomer) => {
  return { type: "SET_CURRENT_CUSTOMER", payload: currentCustomer };
};
export const errorLoadCurrentCustomer = () => ({
  type: "LOADED_CURRENT_CUSTOMER",
});
const setDeliveryAdress = (deliveryAddress) => {
  return { type: "SET_DELIVERY_ADDRESS", payload: deliveryAddress };
};
const setPurchasesHistory = (history) => {
  return { type: "LOADED_PURCHASES_HISTORY", payload: history };
};

export const fetchCurrentCustomer = (isLogin, token) => (dispatch) => {
  console.log(isLogin);
  console.log(token);
  isLogin
    ? getCurrentCustomer(token)
        .then((response) => {
          console.log(response);
          dispatch(setCurrentCustomer(response));
        })
        .catch(() => {
          dispatch(errorLoadCurrentCustomer());
        })
    : null;
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
