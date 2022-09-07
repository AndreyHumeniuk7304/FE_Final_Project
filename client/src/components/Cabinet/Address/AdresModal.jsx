import React from "react";
import Form from "../../Forms/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addDeliveryAdress,
  showModal,
  showBillingModal,
  showDeliveryModal,
} from "../../../store/cabinet/actions";
import updatedCustomer from "../../../api/updatedCustomer";

const AdresModal = () => {
  const currentCustomer = useSelector((state) => state.cabinet.currentCustomer);
  const open = useSelector((state) => state.cabinet.showModal);
  const openDelivery = useSelector((state) => state.cabinet.showModalDelivery);
  const openBilling = useSelector((state) => state.cabinet.showModalBilling);
  const dispatch = useDispatch();
  console.log(currentCustomer);
  const reopen = () => {
    dispatch(showModal(open));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(customerSchema),
    defaultValues: {
      Street: "",
      City: "",
      House: "",
      Flat: "",
      "Postal code": "",
    },
  });

  //   const unitCostomer = (values, currentCustomer) => {
  //     let aaaaa = [...currentCustomer, values];
  //   };
  const putUbdateCustomer = (values) => {
    updatedCustomer(values).catch((err) => {
      console.log(err);
    });
  };

  const addDeliveryAddress = (values) => {
    console.log("hi");
    // console.log(values);
    const deliveryAddress = values;
    // console.log(currentCustomer);
    let updateCustomer = { ...currentCustomer, deliveryAddress };
    console.log(updateCustomer);
    putUbdateCustomer(updateCustomer);
    dispatch(addDeliveryAdress(updateCustomer));
    reopen();
    // updatedCustomer(values)
    //   .then((newCustomerData) => {
    //     console.log(newCustomerData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  //   const cloceModal = () => {
  //     if (showDeliveryModal && showModal) {
  //       console.log(showDeliveryModal);
  //       dispatch(showModal(open));
  //         dispatch(showDeliveryModal(openDelivery));
  //     } else if (showBillingModal && showModal) {
  //       dispatch(showModal(open));
  //         dispatch(showBillingModal(openBilling));
  //     }
  //   };

  const cloceModalDelivery = () => {
    dispatch(showDeliveryModal(openDelivery));
    dispatch(showModal(open));
  };
  const cloceModalBilling = () => {
    dispatch(showModal(open));
    dispatch(showBillingModal(openBilling));
  };

  const customerInputNames = [
    { inputName: "Street", formType: "input" },
    { inputName: "City", formType: "input" },
    // { inputName: "email", formType: "input" },
    { inputName: "House", formType: "input" },
    { inputName: "Flat", formType: "input" },
    { inputName: "Postal code", formType: "input" },
    // { inputName: "password", formType: "password" },
    // { inputName: "confirmPassword", formType: "password" },
  ];

  return (
    <>
      <div className="modal-container">
        <div className="modal_content">
          <p>Add Address</p>
          <span
            className="modal_content__close-btn"
            onClick={
              openDelivery && open ? cloceModalDelivery : cloceModalBilling
            }
          ></span>
          <Form
            actionWithForm={addDeliveryAddress}
            formArr={customerInputNames}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            btnName={"Add Address"}
          />
        </div>
      </div>
    </>
  );
};

export default AdresModal;

// AdresModal.defaultProps = {
//   header: "Добавить товар в корзину?",
//   closeButton: "true",
//   backgroundColor: "rgba(15, 150, 50, 0.7)",
// };
