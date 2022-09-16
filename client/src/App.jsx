import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getIsLogin, setToken, getUserData } from "./store/userAccount/actions";
import { useEffect, useState } from "react";
import { setAuthToken } from "./ulits/instance/instance";
import { getCartItem, isNotLoaded } from "./store/cart/actions";
import Routing from "./components/Routing/Routing";
import { getWishlistItem } from "./store/wishlist/actions";
import { Container } from "@mui/system";
import { switchThemeAction } from "./store/switchTheme/action";
import classNames from "classnames";
import jwt_decode from "jwt-decode";

const App = () => {
  const dispatch = useDispatch();
  const nightMode = useSelector((state) => state.nightMode);
  const wrapperClass = classNames(
    "full-wrapper",
    {
      "dark-mode":
        JSON.parse(localStorage.getItem("nightMode")) === true ||
        JSON.parse(localStorage.getItem("nightMode")) === null,
    },
    {
      "light-mode": JSON.parse(localStorage.getItem("nightMode")) === false,
    }
  );

  const getUser = (storageData) => {
    dispatch(getIsLogin(true));
    dispatch(setToken(JSON.parse(storageData)));
  };

  useEffect(() => {
    localStorage.getItem("login") && getUser(localStorage.getItem("login"));
    sessionStorage.getItem("login") && getUser(sessionStorage.getItem("login"));

    localStorage.getItem("nightMode") &&
      dispatch(
        switchThemeAction(!JSON.parse(localStorage.getItem("nightMode")))
      );
  }, [nightMode]);

  const [statusOpenBurger, setStatusOpenBurger] = useState(false);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const token = useSelector((state) => state.userAccount.token);

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
    if (isLogin) {
      dispatch(getWishlistItem());
      dispatch(getUserData());
    }
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
      <div className={wrapperClass}>
        <Header
          statusOpenBurger={statusOpenBurger}
          handleBurger={handleBurger}
          closeBurger={closeBurger}
        />
        <Container
          maxWidth={"lgDesktop"}
          sx={{ padding: { desktop: "75px 0" } }}
          className="main"
        >
          <Routing />
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default App;
