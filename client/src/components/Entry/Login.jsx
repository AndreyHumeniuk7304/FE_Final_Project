import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";

//temporary data
const userLoginData = [
  { email: "admin@gmail.com", password: "qwerty123" },
  { email: "user567@gmail.com", password: "qwerty567" },
];
//================

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoginValidSubmit, setIsLoginValidSubmit] = useState(false);

  const isLoginValid = (values) =>
    userLoginData.map((data) => {
      (data.email === values.email &&
        data.password === values.password &&
        setIsLogin(true)) ||
        setIsLoginValidSubmit(true);
    });

  return (
    <>
      <p>Please enter your account details to log in</p>

      <form
        onSubmit={handleSubmit((data) => isLoginValid(data))}
        className="form"
        onFocus={() => setIsLoginValidSubmit(false)}
      >
        <ul className="form__box">
          <li className={"form__item"}>
            <CustomInput
              register={register}
              name={"Email"}
              formName={"email"}
              err={{ required: true, minLength: 4 }}
            />
            <CustomErrorMessage
              condition={errors.email && errors.email.type === "minLength"}
              errorText={"Min length is 4 characters"}
            />
          </li>

          <li className={"form__item"}>
            <CustomInput
              register={register}
              name={"Password"}
              formName={"password"}
              formType={"password"}
              err={{ required: true, minLength: 6 }}
            />
            <CustomErrorMessage
              condition={
                errors.password && errors.password.type === "minLength"
              }
              errorText={"Min length is 6 characters"}
            />
            <CustomErrorMessage
              condition={
                (errors.email && errors.email.type === "required") ||
                (errors.password && errors.password.type === "required")
              }
              errorText={"All fields are required"}
            />

            <CustomErrorMessage
              condition={isLoginValidSubmit}
              errorText={"Email or password is incorrect"}
            />
          </li>
        </ul>
        <Button type="submit">Login</Button>
      </form>
    </>
  );
};

export default Login;

Login.propTypes = {
  //categories: PropTypes.string,
};
