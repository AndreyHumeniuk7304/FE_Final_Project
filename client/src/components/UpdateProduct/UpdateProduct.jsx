import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import getOneProduct from "../../api/getOneProduct";
import ProductForm from "../ProductForm/ProductForm";
import { updateProduct } from "../../api/products";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);

  const { itemNo } = useParams();
  useEffect(() => {
    (async () => {
      setProduct(await getOneProduct(itemNo));
    })();
  }, []);

  const handleSubmit = (value) => {
    updateProduct(value, value._id);
  };

  return (
    <>
      {isAdmin ? (
        product ? (
          <>
            <ProductForm initialValue={product} onSubmit={handleSubmit} />
          </>
        ) : (
          "Product is loading"
        )
      ) : (
        "You are not Admin"
      )}
    </>
  );
};

export default UpdateProduct;
