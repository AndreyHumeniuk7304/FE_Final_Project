import Form from "../../Forms/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  showModal,
  showBillingModal,
  showDeliveryModal,
} from "../../../store/cabinet/actions";
import { setUserData as setCurrentCustomer } from "../../../store/userAccount/actions";
import updatedCustomer from "../../../api/updatedCustomer";

const AdresModal = () => {
  const currentCustomer = useSelector((state) => state.cabinet.currentCustomer);
  const open = useSelector((state) => state.cabinet.showModal);
  const openDelivery = useSelector((state) => state.cabinet.showModalDelivery);
  const openBilling = useSelector((state) => state.cabinet.showModalBilling);
  const dispatch = useDispatch();
  const reopen = () => {
    dispatch(showModal(open));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Street: "",
      City: "",
      House: "",
      Flat: "",
      "Postal code": "",
    },
  });
  const putUbdateCustomer = (updateCustomer) => {
    delete updateCustomer.password;
    delete updateCustomer.newPassword;
    const customerToPut = { ...updateCustomer };
    updatedCustomer(customerToPut)
      .then((newUpdateCustomer) => {
        dispatch(setCurrentCustomer(newUpdateCustomer.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addDeliveryAddress = (values) => {
    if (openDelivery) {
      const deliveryAddress = values;
      let updatedCustomer = { ...currentCustomer, ...deliveryAddress };
      putUbdateCustomer(updatedCustomer);
      cloceModalDelivery();
    } else {
      const deliveryAddress = values;
      let updatedCustomer = { ...currentCustomer, deliveryAddress };
      putUbdateCustomer(updatedCustomer);
      cloceModalDelivery();
    }
  };
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
          {openDelivery ? (
            <Form
              actionWithForm={addDeliveryAddress}
              formArr={customerInputNames}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              btnName={"Add Address"}
            />
          ) : (
            <Form
              actionWithForm={addDeliveryAddress}
              formArr={customerInputNames}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              btnName={"Add Address"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default AdresModal;
