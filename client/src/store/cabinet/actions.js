import axios from "../../ulits/instance/instance";
// import * as Sentry from "@sentry/react";
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

export const fetchCustomerOrders = () => (dispatch) => {
  getCustomerOrders().then((data) => dispatch(setPurchasesHistory(data)));
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

// export const asd = (updatedCustomer) => {
//   console.log(updatedCustomer);
//   setCurrentCustomer(updatedCustomer);
// };

// export const updateCustomer = (modifiedCustomer) => (dispatch) => {
//   const token = localStorage.getItem("login");

//   // dispatch(customerUpdateRequest());
//   if (modifiedCustomer.password !== "" && modifiedCustomer.newPassword !== "") {
//     axios
//       .put(
//         "/customers/password",
//         {
//           password: modifiedCustomer.password,
//           newPassword: modifiedCustomer.newPassword,
//         },
//         {
//           headers: {
//             Authorization: `${token}`,
//           },
//         }
//       )
//       .then((updatedPassword) => {
//         if (updatedPassword.data.password === "Password does not match") {
//           console.log("EROR");
//         } else {
//           console.log("OK");
//         }
//       })
//       .catch((err) => console.log(err));
//   }
//   const customerToPut = { ...modifiedCustomer };
//   delete customerToPut.password;
//   delete customerToPut.newPassword;

//   axios
//     .put("/customers/password", customerToPut, {
//       headers: {
//         Authorization: `${token}`,
//       },
//     })
//     .then((updatedCustomer) => {
//       dispatch(setCurrentCustomer(updatedCustomer));
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
