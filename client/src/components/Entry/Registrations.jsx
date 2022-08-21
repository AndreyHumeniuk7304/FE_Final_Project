import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import CustomInput from "../Forms/CastomInput";
import CustomErrorMessage from "../Forms/CustomErrorMessage";
import addNewCustomers from "../../api/addNewCustomer";
import PropTypes from "prop-types";
import CustomDropList from "../Forms/CustomDropList";

const registInputNames = [
  "firstName",
  "lastName",
  "login",
  "email",
  "telephone",
  "gender",
  "password",
  "confirmPassword",
];
const Registrations = ({ setIsRegist }) => {
  const schema = yup.object({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Second name is required."),
    login: yup
      .string()
      .required("Login is required.")
      .min(5, "Login is too short - should be 5 chars minimum."),
    email: yup.string().required("Email is required.").email("Email not valid"),
    telephone: yup.string().required("Telephone is required.").phone(),
    password: yup
      .string()
      .required("Password is required.")
      .max(30, "Password is too long - should be 30 chars maximum.")
      .min(7, "Password is too short - should be 7 chars minimum."),
    confirmPassword: yup
      .string()
      .required("Password is required.")
      .max(30, "Password is too long - should be 30 chars maximum.")
      .min(7, "Password is too short - should be 7 chars minimum.")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  function camelizeDecode(str) {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      login: "",
      email: "",
      telephone: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      isAdmin: false,
    },
  });

  const addNewUser = (values) => {
    addNewCustomers(values)
      .then((savedCustomer) => {
        savedCustomer.status = 200 && setIsRegist(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => addNewUser(values))}
        className="form"
      >
        <ul className="form__box">
          {registInputNames.map((inputName) => (
            <li className={"form__item"} key={inputName}>
              {inputName !== "gender" ? (
                <CustomInput
                  register={register}
                  name={camelizeDecode(inputName)}
                  formName={inputName}
                  formType={
                    inputName === "password" || inputName === "confirmPassword"
                      ? "password"
                      : ""
                  }
                />
              ) : (
                <CustomDropList
                  name={inputName}
                  arr={["Male", "Female"]}
                  register={register}
                />
              )}
              <CustomErrorMessage err={errors[inputName]?.message} />
            </li>
          ))}
        </ul>
        <div className="form__btn">
          <Button type="submit">Registation</Button>
        </div>
      </form>
    </div>
  );
};
Registrations.propTypes = {
  setIsRegist: PropTypes.func,
};

export default Registrations;
