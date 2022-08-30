import { addNewProduct } from "../../../api/products";
import ProductForm from "../../ProductForm/ProductForm";

const CreateProduct = () => {
  const onSubmit = (values) => {
    values = {
      ...values,
      productUrl: `/product/${Math.floor(Math.random() * 100000)}`,
    };
    addNewProduct(values);
  };
  return (
    <>
      <ProductForm onSubmit={onSubmit} />
    </>
  );
};

export default CreateProduct;
