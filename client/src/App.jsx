import "./App.scss";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Man from "./views/Man/Man";
import Woman from "./views/Woman/Woman";
import Accessory from "./views/Accessory/Accessory";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/man" element={<Man />} />
            <Route path="/woman" element={<Woman />} />
            <Route path="/accessory" element={<Accessory />} />
            <Route path="/search" element={<Search />} />
            <Route path="/my-account/user" element={<MyAccount />} />
            <Route path="/my-account/entry" element={<Entry />} />
            <Route path="/product/:itemNo" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/my-account/create-product"
              element={<CreateProduct />}
            />

            <Route path="/my-account/profile" element={<Profile />} />
            <Route path="/my-account/history" element={<History />} />
            <Route path="/my-account/wishlist" element={<Wishlist />} />
            <Route path="/my-account/address-book" element={<Address />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product/:itemNo/update" element={<UpdateProduct />} />
            <Route path="/update-products" element={<UpdateProducts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
