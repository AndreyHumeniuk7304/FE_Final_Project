import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { addNewProduct } from "../../../api/products";
import ProductForm from "../../ProductForm/ProductForm";

const CreateProduct = () => {
  const [isProductAdded, setIsProductAdded] = useState(false);
  const onSubmit = (values, reset) => {
    values = {
      ...values,
      productUrl: `/product/${Math.floor(Math.random() * 100000)}`,
    };
    addNewProduct(values).then((resp) => {
      reset();
      setIsProductAdded(true);
      window.scrollTo(0, 0);
    });
  };
  return (
    <Box>
      {isProductAdded && (
        <Typography sx={{ p: 2 }} align="center">
          The product has been added, you can add more &#8595;
        </Typography>
      )}
      <ProductForm onSubmit={onSubmit} />
    </Box>
  );
};

export default CreateProduct;
