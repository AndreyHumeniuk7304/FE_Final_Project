import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Form from "../Forms/Form";
import { productInputNames } from "./data";

const ProductForm = () => {
  const schema = yup.object({
    imageUrls: yup.string().url().required("ImageUrls is required."),
    quantity: yup.number().required("Quantity is required."),
    name: yup.string().min(20, "Name is full description of product, min 20."),
    currentPrice: yup.number().required("CurrentPrice is required."),
    date: yup.date().required("CurrentPrice is required."),
  });

  const getCurrentDate = () => {
    const date = new Date();
    return `${date.getFullYear()}-${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }-${date.getDate() < 10 ? +date.getDate() : date.getDate()}`;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      brand: "",
      Categories: "",
      mechanism: "",
      color: "",
      material: "",
      enabled: "",
      imageUrls: "",
      quantity: 1,
      name: "",
      currentPrice: "",
      previousPrice: "",
      date: getCurrentDate(),
    },
  });
  console.log();

  const setValidation = (values) => {
    console.log(values);
  };

  return (
    <>
      <Form
        actionWithForm={setValidation}
        formArr={productInputNames}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        btnName={"APPROVE"}
      />
    </>
  );
};

export default ProductForm;
