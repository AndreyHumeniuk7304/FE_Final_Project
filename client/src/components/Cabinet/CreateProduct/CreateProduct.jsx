import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addNewProduct } from "../../../api/products";
import BasicModal from "../../Modal/Modal";
import ProductForm from "../../ProductForm/ProductForm";

const CreateProduct = () => {
  const [isProductAdded, setIsProductAdded] = useState(false);

  const onSubmit = (values, reset) => {
    addNewProduct(values).then((resp) => {
      reset();
      setIsProductAdded(true);
      window.scrollTo(0, 0);
    });
  };
  const hideModal = () => setIsProductAdded(false);

  const title = "The product has been added.";
  const btnAction = (
    <>
      <Button onClick={hideModal}>Add product</Button>
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
