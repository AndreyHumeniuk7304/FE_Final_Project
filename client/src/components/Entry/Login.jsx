import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { fetchProducts, setError } from "../../store/userAccount/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
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
    const isAutoLog = values.isSignedAutomatically;
    delete values.isSignedAutomatically;
    dispatch(fetchProducts(values, isAutoLog));
  };

  return (
    <>
      <p className="entry__text">Please enter your account details to log in</p>

      <form
        onSubmit={handleSubmit((values) => setValidation(values))}
        className="form"
        //onFocus={() => dispatch(setError(""))}
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
        <div className="entry__checkbox">
          <CustomInput
            register={register}
            formName={"isSignedAutomatically"}
            formType={"checkbox"}
          />
          <label>Keep me signed in</label>
        </div>
        <div className="form__btn">
          <Button type="submit">Login</Button>
        </div>
      </form>
    </>
  );
};

export default Login;
