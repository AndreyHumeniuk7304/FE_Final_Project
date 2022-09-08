import React from "react";
import Form from "../../Forms/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  //   addDeliveryAdress,
  showModal,
  showBillingModal,
  showDeliveryModal,
  setCurrentCustomer,
  //   updateCustomer,
  //   asd,
} from "../../../store/cabinet/actions";
// import updatedCustomer from "../../../api/updatedCustomer";
// import updatedCustomer from "../../../api/updatedCustomer";
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

  //   const updatedCurrentCustomer = (values) => {
  //     console.log(values);
  //     updatedCustomer(values)
  //       .then((newCustomerData) => {
  //         console.log(newCustomerData);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  //   const putUbdateCustomer = (updateCustomer) => {
  //     console.log(updateCustomer);
  //     updatedCustomer(updateCustomer)
  //       .then((newCustomerData) => {
  //         console.log(newCustomerData);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const asd = (updateCustomer) => {
    console.log(updateCustomer);
    delete updateCustomer.password;
    delete updateCustomer.newPassword;
    // delete updateCustomer.config;
    // delete updateCustomer.data;
    // delete updateCustomer.headers;
    // delete updateCustomer.request;
    // delete updateCustomer.status;
    // delete updateCustomer.statusText;
    // delete updateCustomer.deliveryAddress;
    const customerToPut = { ...updateCustomer };
    console.log(customerToPut);
    updatedCustomer(customerToPut)
      .then((newUpdateCustomer) => {
        dispatch(setCurrentCustomer(newUpdateCustomer.data));
        console.log(newUpdateCustomer.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addDeliveryAddress = (values) => {
    console.log("hi");
    // console.log(values);
    const deliveryAddress = values;
    // console.log(currentCustomer);
    let updatedCustomer = { ...currentCustomer, ...deliveryAddress };
    // console.log(updatedCustomer);
    asd(updatedCustomer);
    // asdf();
    // updatedCurrentCustomer(updateCustomer);
    // dispatch(addDeliveryAdress(updateCustomer));
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
    { inputName: "House", formType: "input" },
    { inputName: "Flat", formType: "input" },
    { inputName: "Postal code", formType: "input" },
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
