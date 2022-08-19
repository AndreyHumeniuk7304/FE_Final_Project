import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fetchProducts, setError } from "../../store/userAccount/actions";
import { useDispatch, useSelector } from "react-redux";

//temporary data
const userData = {
  loginOrEmail: "customer@gmail.com",
  password: "1111111",
};

//================

const Login = () => {
  const dispatch = useDispatch();
  const { isLogin, error } = useSelector((state) => state.userAccount);

  const schema = yup.object({
    loginOrEmail: yup.string().required("login/Email is required."),
    password: yup
      .string()
      .required("Password is required.")
      .max(30, "Password is too long - should be 30 chars maximum.")
      .min(7, "Password is too short - should be 7 chars minimum."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      loginOrEmail: "",
      password: "",
      isSignedAutomatically: "",
    },
  });

  const [isLoginNotValid, setIsLoginNotValid] = useState(false);

  const setValidation = (values) => {
    const isAutoLog = values.isSignedAutomatically === "on";
    delete values.isSignedAutomatically;
    dispatch(fetchProducts(values, isAutoLog));
  };

  return (
    <>
      <p>Please enter your account details to log in</p>

      <form
        onSubmit={handleSubmit((values) => setValidation(values))}
        className="form"
        onFocus={() => dispatch(setError(""))}
      >
        <ul className="form__box">
          <li className={"form__item"}>
            <CustomInput
              register={register}
              name={"Login or Email"}
              formName={"loginOrEmail"}
            />
            <CustomErrorMessage err={errors.loginOrEmail?.message} />
          </li>

          <li className={"form__item"}>
            <CustomInput
              register={register}
              name={"Password"}
              formName={"password"}
              formType={"password"}
            />

            <CustomErrorMessage err={errors.password?.message} />

            {error && (
              <CustomErrorMessage
                err={"Login/Email or password is incorrect"}
              />
            )}
          </li>
        </ul>
        <div>
          <label className="entry__checkbox">
            <CustomInput
              register={register}
              formName={"isSignedAutomatically"}
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
