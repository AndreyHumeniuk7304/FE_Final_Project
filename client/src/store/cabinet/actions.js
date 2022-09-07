import getCurrentCustomer from "../../api/getCurrentCustomer";
import getCustomerOrders from "../../api/getCustomerOrders";

const setCurrentCustomer = (currentCustomer) => {
  return { type: "SET_CURRENT_CUSTOMER", payload: currentCustomer };
};
export const errorLoadCurrentCustomer = () => ({
  type: "LOADED_CURRENT_CUSTOMER",
});
const setDeliveryAdress = (deliveryAddress) => {
  return { type: "SET_DELIVERY_ADDRESS", payload: deliveryAddress };
};

// export const setNewDataCustomer = (newDataCustomer)=>{
//     return { type: "SET_NEW_DATA_CUSTOMER", payload: newDataCustomer }
// }

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

export const fetchCustomerOrders = (data) => (dispatch) => {
  getCustomerOrders().then((data) => console.log(data));
};
export const addDeliveryAdress = (updateCustomer) => (dispatch) => {
  // console.log(deliveryAddress);
  // console.log(currentCustomer);
  // let updateCustomer = [...currentCustomer, deliveryAddress];
  // console.log(updateCustomer);
  dispatch(setDeliveryAdress(updateCustomer));
};

// const updateCustomer = (userData)=>(return async (dispatch)=>{

// })

export const showModal = (open) => {
  return { type: "SHOW_MODAL", payload: !open };
};
export const showDeliveryModal = (open) => {
  return { type: "SHOW_DELIVERY_MODAL", payload: !open };
};
export const showBillingModal = (open) => {
  return { type: "SHOW_BILLING_MODAL", payload: !open };
};
