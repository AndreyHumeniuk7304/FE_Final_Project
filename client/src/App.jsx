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
import { useDispatch } from "react-redux";
import { getSuccess } from "./store/userAccount/actions";
import Contact from "./components/Footer/Contact/Contact";
import { useEffect, useState } from "react";
import UpdateProducts from "./views/UpdateProducts";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem("login") &&
      getSuccess(
        { success: true, token: localStorage.getItem("login") },
        dispatch
      );
  }, []);

  const [statusOpenBurger, setStatusOpenBurger] = useState(false);

  useEffect(() => {
    statusOpenBurger
      ? document.body.classList.add("hiddenScroll")
      : document.body.classList.remove("hiddenScroll");

    // return () => {
    //   document.body.classList.remove("hiddenScroll");
    // };
  });

  const handleBurger = () => {
    setStatusOpenBurger(!statusOpenBurger);
  };

  const closeBurger = () => {
    setStatusOpenBurger(false);
  };
  return (
    <>
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
          <Route path="/my-account/:name" element={<MyAccount />} />
          <Route path="/product/:itemNo" element={<ProductDetails />} />
          <Route path="/product/:itemNo/update" element={<UpdateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/update-products" element={<UpdateProducts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
