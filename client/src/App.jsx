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
import Contact from "./components/Footer/Contact/Contact";
import Profile from "./components/Cabinet/Profile/Profile";
import History from "./components/Cabinet/History/History";
import Wishlist from "./components/Cabinet/Wishlist/Wishlist";
import Address from "./components/Cabinet/Address/Address";

const App = () => {
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
          <Route path="/my-account/profile" element={<Profile />} />
          <Route path="/my-account/history" element={<History />} />
          <Route path="/my-account/wishlist" element={<Wishlist />} />
          <Route path="/my-account/address-book" element={<Address />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
