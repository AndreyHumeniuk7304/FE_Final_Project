import { Box, Stack, Typography, Container } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BurgerMenu = ({ closeBurger }) => {
  return (
    <Box
      sx={{
        display: "block",
        position: "absolute",
        paddingTop: "40px",
        top: "120px",
        left: "0",
        height: "80%",
        width: "100%",
      }}
    >
      <Container sx={{ maxWidth: "lg" }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "19px",
              mb: "40px",
            }}
          >
            <Link onClick={closeBurger} to="/my-account/entry">
              Login / Register
            </Link>
          </Typography>

          <Stack sx={{ listStyle: "none", mb: "40px" }} spacing={4}>
            <Typography
              variant={"body2"}
              sx={{
                fontFamily: "Josefin Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "14px",
              }}
            >
              <Link
                onClick={closeBurger}
                to="/products/filter?categories=ladies&perPage=10&startPage=1"
                state={{ categories: "ladies" }}
                className="pages-list__item-link"
              >
                WOMAN COLLECTION
              </Link>
            </Typography>
            <Typography
              variant={"body2"}
              sx={{
                fontFamily: "Josefin Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "14px",
              }}
            >
              <Link
                onClick={closeBurger}
                to="/products/filter?categories=mens&perPage=10&startPage=1"
                state={{ categories: "mens" }}
                className="pages-list__item-link"
              >
                MAN COLLECTION
              </Link>
            </Typography>
            <Typography
              variant={"body2"}
              sx={{
                fontFamily: "Josefin Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "14px",
              }}
            >
              <Link
                onClick={closeBurger}
                to="/products/filter?categories=accessories&perPage=10&startPage=1"
                state={{ categories: "accessories" }}
                className="pages-list__item-link"
              >
                ACCESSORY
              </Link>
            </Typography>
          </Stack>

          <Box>
            <Box
              component="h3"
              sx={{
                paddingLeft: "3px",
                marginBottom: "10px",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "14px",
              }}
            >
              HELP
            </Box>
            <Stack sx={{ marginBottom: "40px" }}>
              <Typography
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="/Frequently asked questions">
                  Frequently asked questions
                </Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="/contact">
                  Contact
                </Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="/purchase">
                  How to purchase
                </Link>
              </Typography>
              <Typography
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="/payment">
                  Payment
                </Link>
              </Typography>
            </Stack>
            <Box
              component="h3"
              sx={{
                paddingLeft: "3px",
                marginBottom: "10px",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "15px",
                lineHeight: "14px",
              }}
            >
              COMPANY
            </Box>
            <Stack sx={{ marginBottom: "40px" }}>
              <Typography
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="./History of the brande">
                  History of the brande
                </Link>
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="./Policy">
                  Policy
                </Link>
              </Typography>
              <Typography
                component={"p"}
                sx={{
                  marginBottom: "12px",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "19px",
                }}
              >
                <Link onClick={closeBurger} to="./Work with Us">
                  Work with Us
                </Link>
              </Typography>
            </Stack>
            <Box component="h3" mb={"26px"}>
              FOLLOW US
            </Box>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                paddingBottom: "60px",
              }}
            >
              <Link onClick={closeBurger} to="/Facebook">
                <Box
                  sx={{ height: "24px", width: "24px" }}
                  component={"img"}
                  src="./images/facebok-logo.png"
                  alt="FB"
                />
              </Link>
              <Link onClick={closeBurger} to="/Instagram">
                <Box
                  sx={{ height: "24px", width: "24px" }}
                  component={"img"}
                  src="./images/inst-logo.png"
                  alt="Instagram"
                />
              </Link>
              <Link onClick={closeBurger} to="/Pinterst">
                <Box
                  sx={{ height: "24px", width: "24px" }}
                  component={"img"}
                  src="./images/pint-logo.png"
                  alt="Pinterest"
                />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  closeBurger: PropTypes.func,
};
