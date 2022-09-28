import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../components/Cabinet/Logout/Logout";
import { Grid, Box, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessIcon from "@mui/icons-material/Business";
import AddIcon from "@mui/icons-material/Add";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const Account = () => {
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const customer = useSelector((state) => state.userAccount.customer);
  const nightMode = useSelector((state) => state.nightMode);

  const nav = useNavigate();

  useEffect(() => {
    !isLogin ? nav("/my-account/entry") : nav("/my-account/user");
  }, [isLogin]);

  let linkStyle = {
    width: { mobile: "90%", tablet: "40%", desktop: "49%" },
    display: " flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px",
    textDecoration: "none",
  };
  let boxContainer = {
    m: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: nightMode ? "#000" : "#fff",
    width: "100%",
    padding: { mobile: "0", desktop: "15px" },
    minWidth: { desktop: "405px" },
  };
  let iconStyle = { fontSize: { desktop: 55 }, marginLeft: "10px" };
  let mainTextStyle = {
    color: nightMode ? "#fff" : "#000",
    fontSize: {
      mobile: "1.3rem",
      desktop: "1.8rem",
    },
    padding: "5px",
  };
  let secondaryTextStyle = {
    display: {
      mobile: "none",
      desktop: "inline",
      color: nightMode ? "#fff" : "#000",
    },
    fontSize: {
      desktop: "0.8rem",
    },
    padding: "10px",
  };
  let boxTextContainer = { display: "flex", flexDirection: "column" };

  return (
    <>
      {isAdmin ? (
        <>
          <Box sx={{ maxWidth: "1000px", margin: "auto" }}>
            <Box sx={{ marginTop: "25px" }}>
              <Typography
                sx={{ fontSize: { mobile: "1.3rem", desktop: "2rem" } }}
              >
                Welcome Admin
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link sx={linkStyle} to="/my-account/create-product">
                <Box sx={boxContainer}>
                  <Box>
                    <AddIcon sx={iconStyle} />
                  </Box>
                  <Box sx={boxTextContainer}>
                    <Typography sx={mainTextStyle}>Create product</Typography>
                    <Typography sx={secondaryTextStyle}>
                      You can create a new product
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Link
                sx={linkStyle}
                to="/my-account/update-product/filter?perPage=10&startPage=1"
              >
                <Box sx={boxContainer}>
                  <Box>
                    <ChangeCircleIcon sx={iconStyle} />
                  </Box>
                  <Box sx={boxTextContainer}>
                    <Typography sx={mainTextStyle}>Update product</Typography>
                    <Typography sx={secondaryTextStyle}>
                      You can change product information
                    </Typography>
                  </Box>
                </Box>
              </Link>
              <Logout />
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Box sx={{ margin: "40px 0 30px" }}>
              <Typography
                sx={{ fontSize: { mobile: "1.3rem", desktop: "2rem" } }}
              >
                Welcome
                <Typography
                  component="span"
                  sx={{ fontSize: { mobile: "1.3rem", desktop: "2rem" } }}
                >
                  {" "}
                  {customer?.firstName} {customer?.lastName}
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Box sx={linkStyle}>
                <Link style={{ width: "93%" }} to="/my-account/profile">
                  <Box sx={boxContainer}>
                    <Box sx={{ marginRight: "15px" }}>
                      <PersonIcon sx={iconStyle} />
                    </Box>
                    <Box sx={boxTextContainer}>
                      <Typography sx={mainTextStyle}>My profile</Typography>
                      <Typography variant="span" sx={secondaryTextStyle}>
                        {" "}
                        Show and update your personal information
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
              <Box sx={linkStyle}>
                <Link style={{ width: "93%" }} to="/my-account/history">
                  <Box sx={boxContainer}>
                    <Box sx={{ marginRight: "15px" }}>
                      <ShoppingBasketIcon sx={iconStyle} />
                    </Box>
                    <Box sx={boxTextContainer}>
                      <Typography sx={mainTextStyle}>
                        Purchase History
                      </Typography>
                      <Typography variant="span" sx={secondaryTextStyle}>
                        {" "}
                        Check the status of your purchase history
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
              <Box sx={linkStyle}>
                <Link style={{ width: "93%" }} to="/my-account/wishlist">
                  <Box sx={boxContainer}>
                    <Box sx={{ marginRight: "15px" }}>
                      <FavoriteIcon sx={iconStyle} />
                    </Box>
                    <Box sx={boxTextContainer}>
                      <Typography sx={mainTextStyle}>Wishlist</Typography>
                      <Typography variant="span" sx={secondaryTextStyle}>
                        Manage your wishlist
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
              <Box sx={linkStyle}>
                <Link style={{ width: "93%" }} to="/my-account/address-book">
                  <Box sx={boxContainer}>
                    <Box sx={{ marginRight: "15px" }}>
                      <BusinessIcon sx={iconStyle} />
                    </Box>
                    <Box sx={boxTextContainer}>
                      <Typography sx={mainTextStyle}>Address book</Typography>
                      <Typography variant="span" sx={secondaryTextStyle}>
                        Save and manage your addresses
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Logout />
          </Box>
        </>
      )}
    </>
  );
};
export default Account;
