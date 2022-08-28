import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../Forms/Form";
import { productInputNames, productSchema } from "./data";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ProductForm = ({ initialValue, onSubmit }) => {
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
    reset,
  } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: {
      brand: "",
      Categories: "",
      mechanism: "",
      color: "",
      material: "",
      enabled: true,
      imageUrls: [" "],
      quantity: 1,
      name: "",
      currentPrice: "",
      previousPrice: "",
      // date: getCurrentDate(),
    },
  });

  const fieldArray = useFieldArray({
    control,
    name: "imageUrls",
  });

  useEffect(() => reset(initialValue), [initialValue]);

  const setValidation = (values) => {
    onSubmit(values);
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

ProductForm.propTypes = {
  initialValue: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ProductForm;
