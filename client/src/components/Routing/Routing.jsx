import { Route, Routes } from "react-router-dom";
import Home from "../../views/Home/Home";
import Products from "../../views/Products/Products";
import Search from "../../views/Search/Search";
import MyAccount from "../../views/MyAccount/MyAccount";
import Entry from "../../views/Entry/Entry";
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../../views/Cart";
import Contact from "../Footer/Help/Contact/Contact";
import CreateProduct from "../Cabinet/CreateProduct/CreateProduct";
import UpdateProducts from "../../views/UpdateProducts";
import Profile from "../Cabinet/Profile/Profile";
import History from "../Cabinet/History/History";
import Wishlist from "../Cabinet/Wishlist/Wishlist";
import Address from "../Cabinet/Address/Address";
import Checkout from "../../views/Checkout/Checkout";
import UpdateProduct from "../UpdateProduct";
import Error from "../../views/Error/Error";
import CompleteOrder from "../CompleteOrder/CompleteOrder";
import RegistrationForOrder from "../RegistrationForOrder/RegistrationForOrder";
import PrivateRoute from "./PrivateRoute";
import HistoryOfBrand from "../Footer/Company/History";
import PolicyWebSite from "../Footer/Company/Policy";
import Collaborations from "../Footer/Company/Collaborations";
import Payment from "../Footer/Help/Payment";
import QuickQuestions from "../Footer/Help/QuickQuestions";
import HowToPurchase from "../Footer/Help/HowToPurchase";
import Account from "../../views/MyAccount/Account";

const setPrivateElement = (element) => <PrivateRoute>{element}</PrivateRoute>;

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />}>
        <Route path=":filter" element={<Products />} />
      </Route>

      <Route path="/search" element={<Search />} />

      <Route path="/my-account/">
        <Route path="entry" element={<Entry />} />
        <Route
          path="user"
          element={
            <PrivateRoute>
              <Account />
            </PrivateRoute>
          }
        />
        <Route
          path="create-product"
          element={setPrivateElement(<CreateProduct />)}
        />
        <Route path="profile" element={setPrivateElement(<Profile />)} />
        <Route path="history" element={setPrivateElement(<History />)} />
        <Route path="wishlist" element={setPrivateElement(<Wishlist />)} />
        <Route path="address-book" element={setPrivateElement(<Address />)} />
        <Route
          path="update-product/:filter"
          element={setPrivateElement(<UpdateProducts />)}
        />
      </Route>

      <Route path="/product/:itemNo" element={<ProductDetails />} />
      <Route
        path="/product/:itemNo/update"
        element={setPrivateElement(<UpdateProduct />)}
      />

      <Route path="/cart" element={<Cart />} />

      <Route path="/checkout" element={<Checkout />} />
      <Route path="/completed-order" element={<CompleteOrder />} />
      <Route path="/registration-order" element={<RegistrationForOrder />} />
      <Route path="*" element={<Error />} />
      <Route path="company">
        <Route path="history" element={<HistoryOfBrand />} />
        <Route path="policy" element={<PolicyWebSite />} />
        <Route path="collaborations" element={<Collaborations />} />
      </Route>
      <Route path="help">
        <Route path="contact" element={<Contact />} />
        <Route path="quastions" element={<QuickQuestions />} />
        <Route path="purchase" element={<HowToPurchase />} />
        <Route path="payment" element={<Payment />} />
      </Route>
    </Routes>
  );
};

export default Routing;
