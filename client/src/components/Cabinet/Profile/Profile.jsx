import Links from "../Links/Links";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "../../Forms/Form";
import { customerInputNames } from "./data";
import updatedCustomer from "../../../api/updatedCustomer";
import { getUserData } from "../../../store/userAccount/actions";
import changePasswords from "../../../api/changePasswords";

const Profile = () => {
  const customer = useSelector((state) => state.userAccount.customer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: customer?.firstName,
      lastName: customer?.lastName,
      telephone: customer?.telephone,
      gender: customer?.gender,
      birthday: customer?.birthday,
      password: "",
      confirmPassword: "",
      isAdmin: false,
    },
  });

  const updatedCurrentCustomer = (values) => {
    updatedCustomer(values)
      .then((newCustomerData) => {
        dispatch(getUserData());
      })
      .catch((err) => {
        console.log(err);
      });
    changePasswords(values);
  };
  return (
    <>
      <Links />
      <Form
        actionWithForm={updatedCurrentCustomer}
        formArr={customerInputNames}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        btnName={"SAVE"}
        control={control}
      />
    </>
  );
};
export default Profile;
