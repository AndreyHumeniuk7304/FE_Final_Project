import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "yup-phone";
import addNewCustomers from "../../api/addNewCustomer";
import PropTypes from "prop-types";
import Form from "../Forms/Form";
import { registInputNames, registSchema } from "./data";

const Registrations = ({ setIsRegist }) => {
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
