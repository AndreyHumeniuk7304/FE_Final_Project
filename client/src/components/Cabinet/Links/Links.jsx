import { useSelector } from "react-redux";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Links = () => {
  const customer = useSelector((state) => state.userAccount.customer);

  return (
    <>
      <Box sx={{ margin: "40px 0 30px" }}>
        <Typography mt={2} variant="h4">
          Welcome
          <Typography
            component="span"
            variant="h4
            "
          >
            {" "}
            {customer?.firstName} {customer?.lastName}
          </Typography>
        </Typography>
      </Box>
      <Grid container spacing={4} justifyContent="space-around">
        <Grid item xs="auto">
          <Link
            to="/my-account/profile"
            style={{
              textDecoration: "none",
              borderBottom:
                location.pathname === "/my-account/profile" && "solid 1px #000",
            }}
          >
            <Typography
              variant="span"
              style={{
                color: location.pathname === "/my-account/profile" && "#000",
              }}
            >
              My profile
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link
            style={{
              textDecoration: "none",
              borderBottom:
                location.pathname === "/my-account/wishlist" &&
                "solid 1px #000",
            }}
            to="/my-account/wishlist"
          >
            <Typography
              variant="span"
              style={{
                color: location.pathname === "/my-account/wishlist" && "#000",
              }}
            >
              My wishlist
            </Typography>
          </Link>
        </Grid>
        <Grid item xs>
          <Link
            style={{
              textDecoration: "none",
              borderBottom:
                location.pathname === "/my-account/history" && "solid 1px #000",
            }}
            to="/my-account/history"
          >
            <Typography
              variant="span"
              style={{
                color: location.pathname === "/my-account/history" && "#000",
              }}
            >
              Purchase history
            </Typography>
          </Link>
        </Grid>
        <Grid item xs>
          <Link
            style={{
              textDecoration: "none",
              borderBottom:
                location.pathname === "/my-account/address-book" &&
                "solid 1px #000",
            }}
            to="/my-account/address-book"
          >
            <Typography
              variant="span"
              style={{
                color:
                  location.pathname === "/my-account/address-book" && "#000",
              }}
            >
              Address book
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};
export default Links;
