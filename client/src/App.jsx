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
import { useEffect, useState } from "react";

const App = () => {
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
    <div className="fullWrapper">
      <Header
        statusOpenBurger={statusOpenBurger}
        handleBurger={handleBurger}
        closeBurger={closeBurger}
      />
      {
        <>
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
            </Routes>
          </div>
          <Footer />
        </>
      }
    </div>
  );
};

export default App;
