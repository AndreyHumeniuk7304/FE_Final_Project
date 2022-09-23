import { Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [statusOpenFooter, setStatusOpenFooter] = useState(false);

  const handleFooter = () => {
    setStatusOpenFooter(!statusOpenFooter);
  };
  return (
    <Box
      sx={{ width: "100%", padding: "20px 0 15px", overflow: "hidden" }}
      className="footer"
    >
      <Container maxWidth={"lgDesktop"}>
        <Box
          sx={{
            display: "flex",
            color: "white",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
          //  className="footer-container"
        >
          <Box
          //  className="footer__item"
          >
            <Box
              onClick={handleFooter}
              component="h3"
              sx={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { desktop: "24px", mobile: "12px" },
                lineHeight: { mobile: "10px", desktop: "24px" },
                textTransform: "uppercase",
                marginBottom: { mobile: "19px", desktop: "39px" },
                cursor: "pointer",
              }}
              // className="footer__item__title"
            >
              help
              <Box
                sx={{ display: { desktop: "none" }, paddingLeft: "6px" }}
                component={"span"}
              >
                <Box
                  component={"img"}
                  src="images/arrow-drop-down.svg"
                  alt="drop-down"
                ></Box>
              </Box>
            </Box>
            <Stack
              sx={{
                display: {
                  mobile: statusOpenFooter ? "block" : "none",
                  desktop: "block",
                },
              }}
              // className={
              //   !statusOpenFooter
              //     ? "footer__item__list"
              //     : "footer__item__list open_footer-items"
              // }
            >
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Facebook">Frequently questions</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="contact">Contact</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Purchase"> How to Purchase</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Payment"> Payment</Link>
              </Box>
            </Stack>
          </Box>
          <Box
          // className="footer__item"
          >
            <Box
              component="h3"
              onClick={handleFooter}
              sx={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { desktop: "24px", mobile: "12px" },
                lineHeight: { mobile: "10px", desktop: "24px" },
                textTransform: "uppercase",
                marginBottom: { mobile: "19px", desktop: "39px" },
                cursor: "pointer",
              }}
              // className="footer__item__title"
            >
              follow us
              <Box
                sx={{ display: { desktop: "none" }, paddingLeft: "6px" }}
                component={"span"}
              >
                <Box
                  component={"img"}
                  src="images/arrow-drop-down.svg"
                  alt="drop-down"
                ></Box>
              </Box>
            </Box>
            <Stack
              sx={{
                display: {
                  mobile: statusOpenFooter ? "block" : "none",
                  desktop: "block",
                },
              }}

              // className={
              //   !statusOpenFooter
              //     ? "footer__item__list"
              //     : "footer__item__list open_footer-items"
              // }
            >
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Facebook">Facebook</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Facebook">Instagram</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Facebook">Pinterest</Link>
              </Box>
            </Stack>
          </Box>
          <Box
          //  className="footer__item"
          >
            <Box
              onClick={handleFooter}
              component="h3"
              sx={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { desktop: "24px", mobile: "12px" },
                lineHeight: { mobile: "10px", desktop: "24px" },
                textTransform: "uppercase",
                marginBottom: { mobile: "19px", desktop: "39px" },
                cursor: "pointer",
              }}
              // className="footer__item__title"
            >
              company
              <Box
                sx={{ display: { desktop: "none" }, paddingLeft: "6px" }}
                component={"span"}
              >
                <Box
                  component={"img"}
                  src="images/arrow-drop-down.svg"
                  alt="drop-down"
                ></Box>
              </Box>
            </Box>
            <Stack
              sx={{
                display: {
                  mobile: statusOpenFooter ? "block" : "none",
                  desktop: "block",
                },
              }}
              // className={
              //   !statusOpenFooter
              //     ? "footer__item__list"
              //     : "footer__item__list open_footer-items"
              // }
            >
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/History">History of the brand</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Facebook">Policy</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
                // className="footer__item__list-item"
              >
                <Link to="/Facebook">Work with us</Link>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
