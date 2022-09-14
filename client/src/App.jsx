import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogin, setLogin } from "./store/userAccount/actions";
import { useEffect, useState } from "react";
import { setAuthToken } from "./ulits/instance/instance";
import { getCartItem, isNotLoaded } from "./store/cart/actions";
import Routing from "./components/Routing/Routing";
import { getWishlistItem } from "./store/wishlist/actions";
import jwt_decode from "jwt-decode";

const App = () => {
  const dispatch = useDispatch();

  const getUser = (storageData) => {
    dispatch(getIsLogin(true));
    dispatch(
      setLogin({
        ...jwt_decode(JSON.parse(storageData)),
        token: JSON.parse(storageData),
      })
    );
  };

  useEffect(() => {
    localStorage.getItem("login") && getUser(localStorage.getItem("login"));
    sessionStorage.getItem("login") && getUser(sessionStorage.getItem("login"));
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
