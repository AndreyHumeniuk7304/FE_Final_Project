import getCurrentCustomer from "../../api/getCurrentCustomer";

const setCurrentCustomer = (currentCustomer) => {
  return { type: "SET_CURRENT_CUSTOMER", payload: currentCustomer };
};
export const errorLoadCurrentCustomer = () => ({
  type: "LOADED_CURRENT_CUSTOMER",
});

// export const setNewDataCustomer = (newDataCustomer)=>{
//     return { type: "SET_NEW_DATA_CUSTOMER", payload: newDataCustomer }
// }

export const fetchCurrentCustomer = (isLogin, token) => (dispatch) => {
  isLogin
    ? getCurrentCustomer(token)
        .then((response) => {
          //   console.log(response);
          dispatch(setCurrentCustomer(response));
        })
        .catch(() => {
          dispatch(errorLoadCurrentCustomer());
        })
    : null;
};

// const updateCustomer = (userData)=>(return async (dispatch)=>{

// })

export const showModal = (open) => {
  return { type: "SHOW_MODAL", payload: !open };
};
