import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fetchProducts } from "../../store/userAccount/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Form from "../Forms/Form";
import ProductForm from "../ProductForm/ProductForm";

const loginInputNames = [
  { inputName: "loginOrEmail", formType: "input" },
  { inputName: "password", formType: "password" },
  {
    inputName: "isSignedAutomatically",
    formType: "checkbox",
    label: "Keep me signed in",
    className: "entry__checkbox",
  },
];

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const error = useSelector((state) => state.userAccount.error);

  const schema = yup.object({
    loginOrEmail: yup
      .string()
      .required("login/Email is required.")
      .min(5, "Login is too short - should be 5 chars minimum."),
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
        errors={errors}
        btnName={"LOG IN"}
      />
    </>
  );
};

export default Login;
