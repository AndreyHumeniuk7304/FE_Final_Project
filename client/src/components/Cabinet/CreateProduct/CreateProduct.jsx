import { useDispatch } from "react-redux";
import addNewProduct from "../../../api/addNewProduct";
import ProductForm from "../../ProductForm/ProductForm";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(addNewProduct(values));
    console.log(values);
  };
  return (
    <>
      <ProductForm onSubmit={onSubmit} />
    </>
  );
};

export default CreateProduct;
