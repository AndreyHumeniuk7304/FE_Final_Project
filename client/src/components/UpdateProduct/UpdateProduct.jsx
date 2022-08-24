import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import getOneProduct from "../../api/getOneProduct";

const UpdateProduct = () => {
  // const [product, setProduct] = useState({});
  // const isLogin = useSelector((state) => state.userAccount.isLogin);
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);
  // const nightMode = useSelector((state) => state.nightMode);
  //
  const { itemNo } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   getOneProduct(itemNo).then((data) => setProduct(data));
  // }, []);

  return <>{isAdmin ? itemNo : "You are not Admin"}</>;
};

export default UpdateProduct;
