import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../Forms/Form";
import { productInputNames, productSchema } from "./data";

const ProductForm = () => {
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
    control,
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      brand: "",
      Categories: "",
      mechanism: "",
      color: "",
      material: "",
      enabled: "",
      imageUrls: [" "],
      quantity: 1,
      name: "",
      currentPrice: "",
      previousPrice: "",
      date: getCurrentDate(),
    },
  });
  const fieldArray = useFieldArray({
    control,
    name: "imageUrls",
  });

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
        fieldArray={fieldArray}
        control={control}
      />
    </>
  );
};

export default ProductForm;
