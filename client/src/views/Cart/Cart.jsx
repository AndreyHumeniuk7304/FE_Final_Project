import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItem } from "../../store/cart/actions";
// import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.cart.isLogin);
  const productsInCart = useSelector((state) => state.cart.productsInCart);
  // let discount;

  useEffect(() => {
    dispatch(getCartItem(isLogin));
  }, []);

  const createCartItemList = () => {
    return productsInCart.map((item) => (
      <CartItem key={item._id} item={item} />
    ));
  };

  // const handleBlurDiscount = (event) => {};

  const getTotalPrice = () => {
    return productsInCart.length
      ? productsInCart.reduce(
          (previousValue, currentValue) =>
            previousValue.product.currentPrice * previousValue.cartQuantity +
            currentValue.product.currentPrice * currentValue.cartQuantity
        )
      : 0;
  };

  return (
    <div className={"cart"}>
      <h2 className={"cart__title cart__title--capitalise"}>Shopping bag</h2>
      <hr className={"cart__hr"} />
      <ul className={"cart__list"}>{createCartItemList()}</ul>
      <h3 className={"cart__title cart__title--big cart__title--bold"}>
        SHOPPING BAG TOTAL
      </h3>
      <div className={"cart__info"}>
        {/*<label*/}
        {/*  htmlFor={"discount"}*/}
        {/*  className={"cart__title cart__title--little"}*/}
        {/*>*/}
        {/*  ADD A DISCOUNT CODE*/}
        {/*</label>*/}
        {/*<input*/}
        {/*  id={"discount"}*/}
        {/*  type="text"*/}
        {/*  className={"cart__input--discount"}*/}
        {/*  onBlur={handleBlurDiscount}*/}
        {/*/>*/}

        <div className={"cart__order"}>
          {/*  <p className={"cart__title"}>DISCOUNT</p>*/}
          {/*  <p className={"cart__title"}>{discount}</p>*/}

          <p className={"cart__title"}>DELIVERY</p>
          <p className={"cart__title"}>FREE</p>
          <p className={"cart__title cart__title--bold"}>TOTAL</p>
          <p className={"cart__title cart__title--bold"}>{getTotalPrice()} $</p>

          {/*<Link path={"/checkout"} element={<Checkout />}></Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Cart;
