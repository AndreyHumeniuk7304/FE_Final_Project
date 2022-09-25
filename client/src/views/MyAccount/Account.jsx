import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../../components/Cabinet/Logout/Logout";
import { Grid, Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BusinessIcon from "@mui/icons-material/Business";

const Account = () => {
  const isAdmin = useSelector((state) => state.userAccount.customer.isAdmin);
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const customer = useSelector((state) => state.userAccount.customer);

  const nav = useNavigate();

  useEffect(() => {
    !isLogin ? nav("/my-account/entry") : nav("/my-account/user");
  }, [isLogin]);

  const theme = createTheme({
    palette: {
      primary: {
        light: "#FFFFFF",
        main: "#847A7A",
        dark: "#000000",
      },
      breakpoints: {
        values: {
          mobile: 0,
          tablet: 720,
          desktop: 1024,
          lgDesktop: 1280,
        },
        keys: ["mobile", "desktop"],
      },
      secondary: {
        light: "#E2DFDF",
        main: "#C4C4C4",
        dark: "#595959",
      },
    },
    typography: {
      h4: {
        fontSize: "18px",
        "@media (min-width:600px)": {
          fontSize: "26px",
        },
      },
      span: {
        fontSize: "12px",
        "@media (min-width:600px)": {
          fontSize: "16px",
        },
      },
    },
  });

  return (
    <>
      <Box></Box>
      <div className="my-account">
        {isAdmin ? (
          <div className="my-account__container width">
            <div className="my-account__welcome">
              <h3 className="my-account__welcome--title">Welcome Admin</h3>
            </div>
            <div className="my-account__block">
              <Link className="link-container" to="/my-account/create-product">
                <div className=" my-account__profile my-account__section">
                  <div className="icon-container">
                    <img src="../images/create-product.png" alt="create card" />
                  </div>
                  <div>
                    <h4 className="my-account__section--title">
                      Create product
                    </h4>
                    <span className="my-account__section--text">
                      You can create a new product
                    </span>
                  </div>
                </div>
              </Link>
              <Link
                className="link-container"
                to="/my-account/update-product/filter?perPage=10&startPage=1"
              >
                <div className=" my-account__history my-account__section">
                  <div className="icon-container">
                    <img src="../images/update-product.png" alt="update card" />
                  </div>
                  <div>
                    <h4 className="my-account__section--title">
                      Update product
                    </h4>
                    <span className="my-account__section--text">
                      You can change product information
                    </span>
                  </div>
                </div>
              </Link>
              <Logout />
            </div>
          </div>
        ) : (
          <ThemeProvider theme={theme}>
            <Box>
              <Box sx={{ margin: "40px 0 30px" }}>
                <Typography mt={2} variant="h3">
                  Welcome
                  <Typography component="span" variant="h3">
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
                <Link className="link-container" to="/my-account/profile">
                  <Box
                    sx={{
                      m: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      backgroundColor: "primary.dark",
                      width: "100%",
                      padding: "25px",
                    }}
                  >
                    <Box sx={{ marginRight: "15px" }}>
                      <PersonIcon sx={{ fontSize: 55 }} />
                    </Box>
                    <Box>
                      <Typography variant="h4">My profile</Typography>
                      <Typography variant="span">
                        {" "}
                        Show and update your personal information
                      </Typography>
                    </Box>
                  </Box>
                </Link>
                <Link className="link-container" to="/my-account/history">
                  <Box
                    sx={{
                      m: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      backgroundColor: "primary.dark",
                      width: "100%",
                      padding: "25px",
                    }}
                  >
                    <Box sx={{ marginRight: "15px" }}>
                      <ShoppingBasketIcon sx={{ fontSize: 55 }} />
                    </Box>
                    <Box>
                      <Typography variant="h4">Purchase History</Typography>
                      <Typography variant="span">
                        {" "}
                        Check the status of your purchase history and returns
                      </Typography>
                    </Box>
                  </Box>
                </Link>
                <Link className="link-container" to="/my-account/wishlist">
                  <Box
                    sx={{
                      m: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      backgroundColor: "primary.dark",
                      width: "100%",
                      padding: "25px",
                    }}
                  >
                    <Box sx={{ marginRight: "15px" }}>
                      <FavoriteIcon sx={{ fontSize: 55 }} />
                    </Box>
                    <Box>
                      <Typography variant="h4">Wishlist</Typography>
                      <Typography variant="span">
                        Manage your wishlist
                      </Typography>
                    </Box>
                  </Box>
                </Link>
                <Link className="link-container" to="/my-account/address-book">
                  <Box
                    sx={{
                      m: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      backgroundColor: "primary.dark",
                      width: "100%",
                      padding: "25px",
                    }}
                  >
                    <Box sx={{ marginRight: "15px" }}>
                      <BusinessIcon sx={{ fontSize: 55 }} />
                    </Box>
                    <Box>
                      <Typography variant="h4">Address book</Typography>
                      <Typography variant="span">
                        Save and manage your addresses
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Box>
          </ThemeProvider>
        )}
      </div>
    </>
  );
};
export default Account;
