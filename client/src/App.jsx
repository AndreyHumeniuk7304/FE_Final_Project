import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess } from "./store/userAccount/actions";
import { useEffect, useState } from "react";
import { setAuthToken } from "./ulits/instance/instance";
import { getCartItem, isNotLoaded } from "./store/cart/actions";
import Routing from "./components/Routing/Routing";
import { getWishlistItem } from "./store/wishlist/actions";

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
  }, [isLogin]);

  /* code review: NOT good
    не обовʼязково тут отримувати список обраних
    це можна зробити в компоненті, де відбувається рендеринг списку обраних
  */

  useEffect(() => {
    isLogin && dispatch(getWishlistItem());
  }, [isLogin]);

  const handleBurger = () => {
    setStatusOpenBurger(!statusOpenBurger);
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

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
