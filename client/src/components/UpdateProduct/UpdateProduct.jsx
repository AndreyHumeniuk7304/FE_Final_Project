import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import getOneProduct from "../../api/getOneProduct";
import ProductForm from "../ProductForm/ProductForm";
import { updateProduct } from "../../api/products";
import BasicModal from "../Modal/Modal";
import { Button } from "@mui/material";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const [isProductAdded, setIsProductAdded] = useState(false);
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);
  const navigate = useNavigate();

  const { itemNo } = useParams();
  useEffect(() => {
    (async () => {
      setProduct(await getOneProduct(itemNo));
    })();
  }, []);

  const handleSubmit = (value) => {
    updateProduct(value, value._id);
    setIsProductAdded(true);
  };

  const title = "The product has been updated.";

  const btnAction = (
    <>
      <Button
        onClick={() => {
          navigate("/my-account/update-product/filter?perPage=10&startPage=1");
        }}
      >
        Go to all products
      </Button>
      <Button
        onClick={() => {
          navigate("/my-account/user");
        }}
      >
        Go to my account
      </Button>
    </>
  );

  return (
    <>
      {isAdmin ? (
        product ? (
          <>
            <BasicModal
              title={title}
              isOpen={isProductAdded}
              setIsOpen={setIsProductAdded}
              btnAction={btnAction}
            />
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
