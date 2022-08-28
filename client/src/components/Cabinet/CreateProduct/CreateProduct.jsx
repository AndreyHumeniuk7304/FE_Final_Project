import { addNewProduct } from "../../../api/products";
import ProductForm from "../../ProductForm/ProductForm";

const CreateProduct = () => {
  const onSubmit = (values) => {
    addNewProduct(values);
    console.log(values);
  };
  return (
    <>
      <ProductForm onSubmit={onSubmit} />
    </>
  );
};

export default CreateProduct;
