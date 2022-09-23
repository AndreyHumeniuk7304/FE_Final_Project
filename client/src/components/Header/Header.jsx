import { Link, useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import SearchInput from "../SearchInput/SearchInput";
import { useState } from "react";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useEffect } from "react";
import { switchThemeAction } from "../../store/switchTheme/action";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

const Header = (props) => {
  const { statusOpenBurger, handleBurger, closeBurger } = props;
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const cartList = useSelector((state) => state.cart.list);
  const isLoaded = useSelector((state) => state.cart.isLoaded);
  const [isExpandInput, setIsExpandInput] = useState(true);
  const [categories, setCategories] = useState("");
  const nightMode = useSelector((state) => state.nightMode);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!isLogin && isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cartList));
    }
  }, [cartList]);

  useEffect(() => {
    location.state
      ? setCategories(location.state.categories)
      : setCategories("");
  }, [location]);

  const themeSwitcherLS = (value) => {
    localStorage.setItem("nightMode", JSON.stringify(!nightMode));
    dispatch(switchThemeAction(!value));
  };

  const calculateCartQuantity = () => {
    return cartList.reduce((sum, item) => sum + item.cartQuantity, 0);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        color: "white",
        width: "100%",
        zIndex: statusOpenBurger ? "10" : "2",
        overflow: "hidden",
        overflowY: "auto",
        height: statusOpenBurger ? "100%" : "auto",
      }}
      className="header"
    >
      <Container sx={{ maxWidth: "lg" }}>
        <Box
          sx={{
            display: { desktop: "flex" },
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: { mobile: "wrap", desktop: "nowrap" },
              width: "100%",
              justifyContent: "space-between",
              padding: "12px 0 10px",
              alignItems: "center",
              position: "relative",
              borderBottom: { mobile: "1px solid grey", desktop: "none" },
            }}
          >
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Link onClick={closeBurger} to="/">
                <Logo />
              </Link>
            </Box>
            {nightMode === true ? (
              <LightModeOutlinedIcon
                style={{ cursor: "pointer", marginRight: "30px" }}
                onClick={() => themeSwitcherLS(false)}
              />
            ) : (
              <DarkModeOutlinedIcon
                style={{ cursor: "pointer", marginRight: "30px" }}
                onClick={() => themeSwitcherLS(true)}
              />
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {window.screen.width < 720 ? (
                <SearchInput
                  isExpandInput={isExpandInput}
                  setIsExpandInput={setIsExpandInput}
                />
              ) : (
                <SearchInput />
              )}
              <Box
                sx={{
                  display: isExpandInput ? "flex" : "none",
                  cursor: "pointer",
                  marginRight: "30px",
                }}
              >
                <Link to={isLogin ? "/my-account/user" : "/my-account/entry"}>
                  <Box
                    component={"img"}
                    src={"../images/account-ico.svg"}
                    alt={"my-account"}
                    sx={{ width: "14px", height: "14px" }}
                  />
                </Link>
              </Box>

              <Box
                sx={{
                  position: "relative",
                  display: isExpandInput ? "flex" : "none",
                  cursor: "pointer",
                  marginRight: "30px",
                }}
              >
                <Link onClick={closeBurger} to="/cart">
                  <Box
                    component={"img"}
                    src={"../images/shopping-bag-ico.svg"}
                    alt={"shopping bag"}
                    sx={{ width: "14px", height: "14px" }}
                  />
                  <Box
                    component={"p"}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      position: "absolute",
                      top: "-6px",
                      right: "-6px",
                      fontSize: "8px",
                      backgroundColor: "#f00",
                      height: "12px",
                      width: "12px",
                      borderRadius: "50%",
                    }}
                  >
                    {cartList && calculateCartQuantity()}
                  </Box>
                </Link>
              </Box>
              <Box
                component={"span"}
                sx={{
                  display: { mobile: "inline-block", desktop: "none" },
                  cursor: "pointer",
                }}
                onClick={handleBurger}
              >
                {!statusOpenBurger ? (
                  <Box
                    component={"img"}
                    src={"../images/burger-ico.svg"}
                    alt={"menu"}
                    sx={{ width: "14px", height: "14px" }}
                  />
                ) : (
                  <Box
                    component={"img"}
                    src={"../images/close-button.png"}
                    alt={"close menu"}
                    sx={{ width: "14px", height: "14px" }}
                  />
                )}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                mobile: "space-between",
                desktop: "flex-start",
              },
              alignItems: { desktop: "center" },
              gap: { desktop: "38px" },
              padding: { mobile: "22px 0", tablet: "25px 0", desktop: "0" },
              fontFamily: "Josefin Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: { mobile: "12px", tablet: "16px" },
              lineHeight: "12px",
            }}
          >
            <Box
              sx={{
                transition: "0.2s",
                borderBottom:
                  categories == "mens"
                    ? "1px solid white"
                    : "1px solid transparent",
              }}
            >
              <Link
                onClick={closeBurger}
                to="/products/filter?categories=mens&perPage=10&startPage=1"
                state={{ categories: "mens" }}
              >
                MAN
              </Link>
            </Box>
            <Box
              sx={{
                transition: "0.2s",
                borderBottom:
                  categories == "ladies"
                    ? "1px solid white"
                    : "1px solid transparent",
              }}
            >
              <Link
                onClick={closeBurger}
                to="/products/filter?categories=ladies&perPage=10&startPage=1"
                state={{ categories: "ladies" }}
              >
                WOMEN
              </Link>
            </Box>

            <Box
              sx={{
                transition: "0.2s",
                borderBottom:
                  categories == "accessories"
                    ? "1px solid white"
                    : "1px solid transparent",
              }}
            >
              <Link
                onClick={closeBurger}
                to="/products/filter?categories=accessories&perPage=10&startPage=1"
                state={{ categories: "accessories" }}
              >
                ACCESSORY
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
      {statusOpenBurger && <BurgerMenu closeBurger={closeBurger} />}
    </Box>
  );
};

Header.propTypes = {
  handleBurger: PropTypes.func,
  statusOpenBurger: PropTypes.bool,
  closeBurger: PropTypes.func,
};

export default Header;
