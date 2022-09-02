import React from "react";
import Form from "../../Forms/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../store/cabinet/actions";

const AdresModal = () => {
  const open = useSelector((state) => state.cabinet.showModal);
  const dispatch = useDispatch();

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

  const updatedCurrentCustomer = (values) => {
    console.log(values);
    reopen();
    // updatedCustomer(values)
    //   .then((newCustomerData) => {
    //     console.log(newCustomerData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
          <Form
            actionWithForm={updatedCurrentCustomer}
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
