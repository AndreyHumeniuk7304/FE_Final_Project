import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone";
import addNewCustomers from "../../api/addNewCustomer";
import PropTypes from "prop-types";
import Form from "../Forms/Form";

const registInputNames = [
  { inputName: "firstName", formType: "input" },
  { inputName: "lastName", formType: "input" },
  { inputName: "login", formType: "input" },
  { inputName: "email", formType: "input" },
  { inputName: "telephone", formType: "input" },
  { inputName: "gender", formName: ["Male", "Female"], formType: "droplist" },
  { inputName: "password", formType: "password" },
  { inputName: "confirmPassword", formType: "password" },
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
      gender: "Male",
      isAdmin: false,
    },
  });

  const addNewUser = (values) => {
    console.log("ok");
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
      <Form
        actionWithForm={addNewUser}
        formArr={registInputNames}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        btnName={"REGISTATION"}
      />
    </div>
  );
};
Registrations.propTypes = {
  setIsRegist: PropTypes.func,
};

export default Registrations;
