import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Search from "./views/Search/Search";
import MyAccount from "./views/MyAccount/MyAccount";
import Cart from "./views/Cart";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from "./store/userAccount/actions";
import Contact from "./components/Footer/Contact/Contact";
import { useEffect, useState } from "react";
import Checkout from "./views/Checkout/Checkout";
import Entry from "./views/Entry/Entry";
import Profile from "./components/Cabinet/Profile/Profile";
import History from "./components/Cabinet/History/History";
import Wishlist from "./components/Cabinet/Wishlist/Wishlist";
import Address from "./components/Cabinet/Address/Address";
import { setAuthToken } from "./ulits/instance/instance";
import UpdateProducts from "./views/UpdateProducts";
import UpdateProduct from "./components/UpdateProduct";
import CreateProduct from "./components/Cabinet/CreateProduct/CreateProduct";
import { getCartItem, isNotLoaded } from "./store/cart/actions";
import Products from "./views/Products/Products";
import Routing from "./components/Routing/Routing";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem("login") &&
      getSuccess(
        { success: true, token: JSON.parse(localStorage.getItem("login")) },
        dispatch
      );
  }, []);

  const [statusOpenBurger, setStatusOpenBurger] = useState(false);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const token = useSelector((state) => state.userAccount.customer.token);

  useEffect(() => {
    statusOpenBurger
      ? document.body.classList.add("hiddenScroll")
      : document.body.classList.remove("hiddenScroll");
  });

  useEffect(() => {
    setAuthToken(token);
  }, [isLogin, token]);

  useEffect(() => {
    dispatch(getCartItem(isLogin));
    return () => dispatch(isNotLoaded());
  }, []);

  const handleBurger = () => {
    setStatusOpenBurger(!statusOpenBurger);
  };

  const closeBurger = () => {
    setStatusOpenBurger(false);
  };
  return (
    <>
      <div className="full-wrapper">
        <Header
          statusOpenBurger={statusOpenBurger}
          handleBurger={handleBurger}
          closeBurger={closeBurger}
        />
        <div className="main">
          <Routing />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
