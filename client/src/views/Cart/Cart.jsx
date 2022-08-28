import CartItem from "../../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItem, isNotLoaded } from "../../store/cart/actions";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import theme from "../../theme";
import { useNavigate } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const cartList = useSelector((state) => state.cart.list);
  const isLoaded = useSelector((state) => state.cart.isLoaded);

  useEffect(() => {
    dispatch(getCartItem(isLogin));
    return () => dispatch(isNotLoaded());
  }, []);

  useEffect(() => {
    if (!isLogin) {
      const onUnload = () => {
        localStorage.setItem("cart", JSON.stringify(cartList));
      };

      window.addEventListener("beforeunload", onUnload);

      return () => window.removeEventListener("beforeunload", onUnload);
    }
  });

  const createCartItemList = () => {
    return cartList.map((item) => {
      return <CartItem key={item.product._id} item={item} />;
    });
  };

  const getTotalPrice = () => {
    return cartList.length
      ? cartList.reduce(
          (accumulator, currentValue) =>
            accumulator +
            currentValue.product.currentPrice * currentValue.cartQuantity,
          0
        )
      : 0;
  };

  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Container maxWidth={"desktop"} sx={{ marginTop: 3 }}>
        <Typography
          variant={"subtitle1"}
          component={"h2"}
          sx={{ fontFamily: "Roboto", display: { desktop: "none" } }}
        >
          Shopping bag
        </Typography>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            bgcolor: "primary.light",
            marginBottom: 3,
            display: { desktop: "none" },
          }}
        />
        <Stack
          direction={{ mobile: "column", desktop: "row" }}
          justifyContent={{ desktop: "space-between" }}
          alignItems={{ desktop: "flex-start" }}
          spacing={8}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ flexGrow: 1 }}
          >
            {isLoaded && cartList ? (
              cartList.length === 0 ? (
                <Typography
                  variant={"subtitle1"}
                  component={"p"}
                  className="cart-title"
                >
                  Cart is empty
                </Typography>
              ) : (
                createCartItemList()
              )
            ) : (
              <Typography variant={"subtitle1"} component={"p"}>
                Cart is loading...
              </Typography>
            )}
          </Stack>

          <Stack
            spacing={2}
            sx={{
              bgcolor: "secondary.main",
              padding: 2,
              color: "primary.dark",
              paddingTop: "10 px",
            }}
          >
            <Typography
              variant={"subtitle1"}
              sx={{
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "secondaryFontFamily",
                display: "block",
              }}
            >
              SHOPPING BAG TOTAL
            </Typography>
            <Box>
              <Typography
                variant={"body1"}
                sx={{
                  display: "inline-block",
                  width: "50%",
                }}
              >
                DELIVERY
              </Typography>
              <Typography variant={"body1"} component={"span"}>
                FREE
              </Typography>
            </Box>
            <Box>
              <Typography
                variant={"body1"}
                sx={{
                  display: "inline-block",
                  width: "50%",
                  fontWeight: 700,
                }}
              >
                TOTAL
              </Typography>
              <Typography
                variant={"body1"}
                component={"span"}
                sx={{ fontWeight: 700 }}
              >
                {isLoaded && cartList ? getTotalPrice() : 0} $
              </Typography>
            </Box>
            {isLoaded && cartList.length !== 0 && (
              <Button
                onClick={checkout}
                variant="contained"
                sx={{
                  [theme.breakpoints.between("mobile", "desktop")]: {
                    padding: "12px 70px",
                    fontSize: "16px",
                    lineHeight: "25px",
                  },
                  backgroundColor: "primary.dark",
                  padding: "16px 60px",
                  mr: "40px",
                  fontSize: "18px",
                  lineHeight: "25px",
                }}
              >
                Checkout
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Cart;
