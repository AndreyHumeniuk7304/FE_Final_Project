import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import addNewCustomers from "../../../api/addNewCustomer";
import PropTypes from "prop-types";
import Form from "../../Forms/Form";
import { registInputNames, registSchema } from "./data";
import { useState } from "react";

const Registrations = ({ setActiveTitle }) => {
  const [error, setError] = useState({});
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

  const addNewUser = (values) => {
    addNewCustomers(values)
      .then((savedCustomer) => {
        savedCustomer.status = 200 && setActiveTitle("Login");
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };
  return (
    <div>
      <Form
        actionWithForm={addNewUser}
        formArr={registInputNames}
        register={register}
        handleSubmit={handleSubmit}
        errors={Object.keys(error).length ? error : errors}
        btnName={"REGISTATION"}
      />
    </div>
  );
};

export default Registrations;

Registrations.propTypes = {
  setActiveTitle: PropTypes.func,
};
