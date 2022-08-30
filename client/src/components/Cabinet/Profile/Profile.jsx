import Links from "../Links/Links";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../ulits/instance/instance";
import { fetchCurrentCustomer } from "../../../store/cabinet/actions";
import getCurrentCustomer from "../../../api/getCurrentCustomer";
import { Checkbox } from "@mui/material";
// import Form from "../Forms/Form";
import { useForm } from "react-hook-form";
import Form from "../../Forms/Form";

const Profile = () => {
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  // const token = useSelector((state) => state.userAccount.customer.token);
  const token = JSON.parse(localStorage.login);
  // console.log(token);
  const customer = useSelector((state) => state.cabinet.currentCustomer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentCustomer(isLogin, token));
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: "",
      gender: "Male",
      isAdmin: false,
    },
  });

  console.log(customer);
  return (
    <div className="profile">
      <Links />
      <div className="profile__container">
        <Form
          actionWithForm={addNewUser}
          formArr={registInputNames}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          btnName={"REGISTATION"}
        />
        {/* <form className="profile__form">
          <div>
            <label className="bold profile__label">EMAIL ADRESS</label>
            <input
              placeholder={customer.email}
              className="profile__input"
              type="email"
            ></input>
          </div>
          <div>
            <label className="bold profile__label">FIRST NAME</label>
            <input
              placeholder={customer.firstName}
              className="profile__input"
              type="text"
            ></input>
          </div>
          <div>
            <label className="bold profile__label">SECOND NAME</label>
            <input
              placeholder={customer.lastName}
              className="profile__input"
              type="text"
            ></input>
          </div>
          <div>
            <label className="bold profile__label">MOBILE PHONE</label>
            <input
              placeholder={customer.telephone}
              className="profile__input"
              type="tel"
            ></input>
          </div>
          <div>
            <div className="profile__checkbox-container">
              <div>
                <input
                  className="profile__checkbox-input"
                  checked={customer.gender === "Male" ? "checked" : null}
                  type="checkbox"
                  name="Male"
                ></input>
                <label className="profile__checkbox-label">Male</label>
              </div>
              <div>
                <input
                  checked={customer.gender === "Female" ? "checked" : null}
                  className="profile__checkbox-input"
                  type="checkbox"
                  name="Female"
                ></input>
                <label className="profile__checkbox-label">Female</label>
              </div>
            </div>
          </div>
          <div className="profile__birthday">
            <label className="bold profile__label">BIRTHDAY</label>
            <input
              className="profile__input"
              type="date"
              id="birthday"
              name="birthday"
            ></input>
          </div>
          <input className="profile__button" type="submit" value="SAVE"></input>
        </form> */}
      </div>
    </div>
  );
};
export default Profile;
