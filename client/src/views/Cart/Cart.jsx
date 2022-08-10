import CartItem from "./Components/CartItem";

const Cart = () => {
  const createCartItemList = () => {
    return (
      <>
        <CartItem />
      </>
    );
  };

  return (
    <>
      <h2>Shopping bag</h2>
      <hr />
      {createCartItemList()}
      <h2>SHOPPING BAG TOTAL</h2>
    </>
  );
};

export default Cart;
