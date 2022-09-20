import Links from "../Links/Links";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Form from "../../Forms/Form";
import { customerInputNames } from "./data";
import updatedCustomer from "../../../api/updatedCustomer";
import { getUserData } from "../../../store/userAccount/actions";

const Profile = () => {
  const customer = useSelector((state) => state.userAccount.customer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: customer?.firstName,
      lastName: customer?.lastName,
      telephone: customer?.telephone,
      gender: customer?.gender,
      birthday: customer?.birthday,
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
  };
  return (
    <>
      <div className="profile">
        <Links />
        <div className="profile__container">
          <div className="form_container">
            <Form
              actionWithForm={updatedCurrentCustomer}
              formArr={customerInputNames}
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              btnName={"SAVE"}
              control={control}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
