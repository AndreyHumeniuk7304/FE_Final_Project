import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchUser } from "../../../store/userAccount/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Form from "../../Forms/Form";
import { loginInputNames, loginSchema } from "./data";
import { useEffect } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const error = useSelector((state) => state.userAccount.error);
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/my-account/user";
  const authUser = useSelector((state) => state.userAccount.isLogin);

  useEffect(() => {
    authUser && nav(fromPage);
  }, [authUser]);

  const {
    register,
    handleSubmit,
    formState: { errors = error && error },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      loginOrEmail: "",
      password: "",
      isSignedAutomatically: false,
    },
  });

  const setValidation = (values) => {
    const isAutoLog = values.isSignedAutomatically;
    delete values.isSignedAutomatically;
    dispatch(fetchUser(values, isAutoLog));
  };

  return (
    <>
      <p className="entry__text">Please enter your account details to log in</p>
      <Form
        actionWithForm={setValidation}
        formArr={loginInputNames}
        register={register}
        handleSubmit={handleSubmit}
        errors={Object.keys(errors).length ? errors : error}
        btnName={"LOG IN"}
      />
    </>
  );
};

export default Login;
