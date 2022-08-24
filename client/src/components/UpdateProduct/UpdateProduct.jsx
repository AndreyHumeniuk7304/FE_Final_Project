import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import getOneProduct from "../../api/getOneProduct";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const [counter, setCounter] = useState(1);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const nightMode = useSelector((state) => state.nightMode);

  const { itemNo } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    getOneProduct(itemNo).then((data) => setProduct(data));
  }, []);

  const createFormItem = () => {
    const productKeys= product.keys();
    const inputs = productKeys.map((item) => {
      return <input key={item} placeholder={item} value={}/>;
    });
  };

  return <></>;
};

export default UpdateProduct;
