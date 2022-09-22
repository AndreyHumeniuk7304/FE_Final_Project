import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addNewProduct } from "../../../api/products";
import BasicModal from "../../Modal/Modal";
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

  const title = "The product has been added.";
  const btnAction = (
    <>
      <Button onClick={() => setIsProductAdded(false)}>Add product</Button>
      <Link to="/my-account/user">
        <Button>Go to my account</Button>
      </Link>
    </>
  );

  return (
    <Box>
      <BasicModal
        title={title}
        isOpen={isProductAdded}
        setIsOpen={setIsProductAdded}
        btnAction={btnAction}
      />
      <ProductForm onSubmit={onSubmit} />
    </Box>
  );
};

export default CreateProduct;
