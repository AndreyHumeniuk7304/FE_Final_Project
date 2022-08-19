import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//temporary data
const userLoginData = [
  { email: "admin@gmail.com", password: "qwerty123" },
  { email: "user567@gmail.com", password: "qwerty567" },
];
//================

const Login = () => {
  const schema = yup.object({
    email: yup
      .string()
      .required("Email is required.")
      .email("Email must be a valid."),
    password: yup
      .string()
      .required("Password is required.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues: {
    //   email: "",
    //   password: "",
    // },
  });

  const [isLoginNotValid, setIsLoginNotValid] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const setValidation = (values) => {
    const isValid = userLoginData.some(
      (data) => data.email === values.email && data.password === values.password
    );
    isValid ? setIsLogin(true) : setIsLoginNotValid(true);
  };

  return (
    <>
      <p>Please enter your account details to log in</p>

      <form
        onSubmit={handleSubmit((values) => setValidation(values))}
        className="form"
        onFocus={() => setIsLoginNotValid(false)}
      >
        <ul className="form__box">
          <li className={"form__item"}>
            <CustomInput
              register={register}
              name={"Email"}
              formName={"email"}
            />
            <CustomErrorMessage err={errors.email?.message} />
          </li>

          <li className={"form__item"}>
            <CustomInput
              register={register}
              name={"Password"}
              formName={"password"}
              formType={"password"}
            />

            <CustomErrorMessage err={errors.password?.message} />

            {isLoginNotValid && (
              <CustomErrorMessage err={"Email or password is incorrect"} />
            )}
          </li>
        </ul>
        <div>
          <label className="entry__checkbox">
            <CustomInput
              register={register}
              formName={"isSigned"}
              formType={"radio"}
            />
            Keep me signed in
          </label>
        </div>
        <div className="entry__btn">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;

Login.propTypes = {
  //categories: PropTypes.string,
};
