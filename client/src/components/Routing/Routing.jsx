import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home/Home";
import Products from "../../views/Products/Products";
import Search from "../../views/Search/Search";
import MyAccount from "../../views/MyAccount/MyAccount";
import Entry from "../../views/Entry/Entry";
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../../views/Cart";
import Contact from "../Footer/Contact/Contact";
import CreateProduct from "../Cabinet/CreateProduct/CreateProduct";
import UpdateProducts from "../../views/UpdateProducts";
import Profile from "../Cabinet/Profile/Profile";
import History from "../Cabinet/History/History";
import Wishlist from "../Cabinet/Wishlist/Wishlist";
import Address from "../Cabinet/Address/Address";
import Checkout from "../../views/Checkout/Checkout";
import UpdateProduct from "../UpdateProduct";
import Error from "../Error/Error";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:filter" element={<Products />} />
      <Route path="/search" element={<Search />} />
      <Route path="/my-account/user" element={<MyAccount />} />
      <Route path="/my-account/entry" element={<Entry />} />
      <Route path="/product/:itemNo" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/my-account/create-product" element={<CreateProduct />} />
      <Route path="/my-account/update-product" element={<UpdateProducts />} />
      <Route path="/my-account/profile" element={<Profile />} />
      <Route path="/my-account/history" element={<History />} />
      <Route path="/my-account/wishlist" element={<Wishlist />} />
      <Route path="/my-account/address-book" element={<Address />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:itemNo/update" element={<UpdateProduct />} />
      <Route path="/update-products" element={<UpdateProducts />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
