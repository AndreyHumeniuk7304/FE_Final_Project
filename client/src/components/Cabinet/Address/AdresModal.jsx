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
import { Typography, Grid, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AdresModal = () => {
  const currentCustomer = useSelector((state) => state.cabinet.currentCustomer);
  const open = useSelector((state) => state.cabinet.showModal);
  const openDelivery = useSelector((state) => state.cabinet.showModalDelivery);
  const openBilling = useSelector((state) => state.cabinet.showModalBilling);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
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
      .catch((err) => {});
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
    { inputName: "Street", formType: "input", label: "Street" },
    { inputName: "City", formType: "input", label: "City" },
    { inputName: "House", formType: "input", label: "House" },
    { inputName: "Flat", formType: "input", label: "Flat" },
    { inputName: "Postal code", formType: "input", label: "Postal code" },
  ];

  return (
    <>
      <Box style={{ maxWidth: "360px", margin: "auto" }}>
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          style={{
            marginTop: "45px",
            marginLeft: "0",
            maxWidth: "360px",
          }}
        >
          <Typography>Add Address</Typography>
          <CloseIcon
            style={{ cursor: "pointer" }}
            onClick={
              openDelivery && open ? cloceModalDelivery : cloceModalBilling
            }
          />
        </Grid>
        {openDelivery ? (
          <Form
            actionWithForm={addDeliveryAddress}
            formArr={customerInputNames}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            btnName={"Add Address"}
            control={control}
          />
        ) : (
          <Form
            actionWithForm={addDeliveryAddress}
            formArr={customerInputNames}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            btnName={"Add Address"}
            control={control}
          />
        )}
      </Box>
    </>
  );
};

export default AdresModal;
