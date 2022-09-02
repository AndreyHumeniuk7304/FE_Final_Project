import Links from "../Links/Links";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentCustomer } from "../../../store/cabinet/actions";
import { useForm } from "react-hook-form";
import Form from "../../Forms/Form";
import { customerInputNames, customerSchema } from "./data";
import updatedCustomer from "../../../api/updatedCustomer";
import { Button } from "@mui/material";

const Profile = () => {
  // const open = useSelector((state) => state.cabinet.showModal);

  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const token = useSelector((state) => state.userAccount.customer.token);
  const customer = useSelector((state) => state.cabinet.currentCustomer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hi");
    dispatch(fetchCurrentCustomer(isLogin, token));
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(customerSchema),
    defaultValues: {
      firstName: customer?.firstName,
      lastName: customer?.lastName,
      telephone: customer?.telephone,
      gender: customer?.gender,
      birthday: customer?.birthday,
      isAdmin: false,
    },
  });

  const updatedCurrentCustomer = (values) => {
    console.log(values);
    updatedCustomer(values)
      .then((newCustomerData) => {
        console.log(newCustomerData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(open);
  console.log(customer);
  return (
    <>
      <div className="profile">
        <Links />
        <div className="profile__container">
          <div className="form_container">
            <Form
              actionWithForm={updatedCurrentCustomer}
              formArr={customerInputNames}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              btnName={"SAVE"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
