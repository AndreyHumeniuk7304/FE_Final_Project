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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSuccess } from "./store/userAccount/actions";
import Contact from "./components/Footer/Contact/Contact";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.getItem("login") &&
      getSuccess(
        { success: true, token: localStorage.getItem("login") },
        dispatch
      );
  }, []);

  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/man" element={<Man />} />
          <Route path="/woman" element={<Woman />} />
          <Route path="/accessory" element={<Accessory />} />
          <Route path="/search" element={<Search />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/product/:itemNo" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
