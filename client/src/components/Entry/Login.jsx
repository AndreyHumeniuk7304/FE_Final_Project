import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchProducts } from "../../store/userAccount/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Form from "../Forms/Form";
import { loginInputNames, loginSchema } from "./data";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const error = useSelector((state) => state.userAccount.error);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      loginOrEmail: "",
      password: "",
      isSignedAutomatically: false,
    },
  });

  const setValidation = (values) => {
    console.log(values);
    const isAutoLog = values.isSignedAutomatically;
    delete values.isSignedAutomatically;

    dispatch(fetchProducts(values, isAutoLog, nav));
  };

  return (
    <>
      <p className="entry__text">Please enter your account details to log in</p>
      <Form
        actionWithForm={setValidation}
        formArr={loginInputNames}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors || error}
        btnName={"LOG IN"}
      />
    </>
  );
};

export default Login;
