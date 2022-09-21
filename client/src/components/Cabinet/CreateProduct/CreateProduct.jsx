import { Box, Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
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

  const PageProductCrated = () => {
    return (
      <Box maxWidth={400} m="auto" pt={20} pb={20}>
        <Typography sx={{ p: 2 }} align="center">
          The product has been added, you can add more &#8595;
        </Typography>
        <Stack direction="row" justifyContent="space-around">
          <Button onClick={() => setIsProductAdded(false)}>Add product</Button>

          <Link to="/my-account/user">
            <Button>Go to my account</Button>
          </Link>
        </Stack>
      </Box>
    );
  };

  return (
    <Box>
      {isProductAdded ? (
        <PageProductCrated />
      ) : (
        <ProductForm onSubmit={onSubmit} />
      )}
    </Box>
  );
};

export default CreateProduct;
