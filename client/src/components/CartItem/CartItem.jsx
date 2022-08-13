import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductQuantity,
  deleteCartItem,
  increaseProductQuantity,
} from "../../store/cart/actions";
import { Box, Button, IconButton, Typography, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.cart.isLogin);
  const { product, cartQuantity } = props.item;

  const handleDecrease = () => {
    dispatch(decreaseProductQuantity(product._id, isLogin));
  };

  const handleIncrease = () => {
    dispatch(increaseProductQuantity(product._id, isLogin));
  };

  const deleteItem = () => {
    dispatch(deleteCartItem(product._id, isLogin));
  };

  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        sx={{ width: "100%", position: "relative" }}
      >
        <Box
          component={"img"}
          src={product.imageUrls[0]}
          alt="Product photo"
          sx={{
            width: "110px",
            height: "180px",
            objectFit: "cover",
          }}
        />
        <Box sx={{ marginLeft: 1, flexBasis: { desktop: "50%" } }}>
          <Typography
            variant={"subtitle1"}
            component={"h3"}
            className={"item__title"}
            sx={{ fontWeight: 700 }}
          >
            {product.name}
          </Typography>
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            justifyContent={"space-between"}
            spacing={1}
          >
            <Box className={"item field"}>
              <span className={"item__text"}>Price</span>
              <span className={"item__text"}>{product.currentPrice} $</span>
            </Box>
            <Box className={"item field"}>
              <span className={"item__text"}>Color</span>
              <span className={"item__text"}>{product.color}</span>
            </Box>
            <Box className={"item field"}>
              <span className={"item__text"}>Size</span>
              <span className={"item__text"}>{product.size}</span>
            </Box>
            <Box className={"item field"}>
              <span className={"item__text"}>Quantity</span>
              <span className={"item__text"}>
                <button onClick={handleDecrease}>-</button>
                {cartQuantity}
                <button onClick={handleIncrease}>+</button>
              </span>
            </Box>
            <Box className={"item field"}>
              <span className={"item__text"}>Total</span>
              <span className={"item__text"}>
                {product.currentPrice * cartQuantity} $
              </span>
            </Box>
          </Stack>
        </Box>
        <IconButton
          onClick={deleteItem}
          color={"secondary"}
          sx={{
            padding: 0,
            display: { desktop: "none" },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
        <Button
          sx={{
            padding: 0,
            alignSelf: "flex-end",
            flexGrow: 1,
            display: { mobile: "none", desktop: "block" },
          }}
        >
          <Typography
            variant={"body2"}
            sx={{
              color: "secondary.main",
            }}
          >
            Remove from basket
          </Typography>
        </Button>
      </Stack>
      <Box
        sx={{
          height: "1px",
          width: "100%",
          bgcolor: "primary.light",
          marginBottom: 3,
        }}
      />
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
