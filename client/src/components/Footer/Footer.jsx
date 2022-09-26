import { Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FooterItem } from "./FooterStyledComponent";

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
        >
          <Box>
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
            >
              help
              <Box
                sx={{ display: { desktop: "none" }, paddingLeft: "6px" }}
                component={"span"}
              >
                <Box
                  component={"img"}
                  src="../images/arrow-drop-down.svg"
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
            >
              <FooterItem>
                <Link to="/help/quastions">FAQ</Link>
              </FooterItem>
              <FooterItem>
                <Link to="/help/contact">Contact</Link>
              </FooterItem>
              <FooterItem>
                <Link to="/help/purchase"> How to Purchase</Link>
              </FooterItem>
              <FooterItem>
                <Link to="/help/payment"> Payment</Link>
              </FooterItem>
            </Stack>
          </Box>
          <Box>
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
            >
              follow us
              <Box
                sx={{ display: { desktop: "none" }, paddingLeft: "6px" }}
                component={"span"}
              >
                <Box
                  component={"img"}
                  src="../images/arrow-drop-down.svg"
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
            >
              <FooterItem>
                <Link to="https://www.facebook.com/">Facebook</Link>
              </FooterItem>
              <FooterItem>
                <Link to="https://www.instagram.com/">Instagram</Link>
              </FooterItem>
              <FooterItem>
                <Link to="https://www.pinterest.com/">Pinterest</Link>
              </FooterItem>
            </Stack>
          </Box>
          <Box>
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
            >
              company
              <Box
                sx={{ display: { desktop: "none" }, paddingLeft: "6px" }}
                component={"span"}
              >
                <Box
                  component={"img"}
                  src="../images/arrow-drop-down.svg"
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
            >
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/company/history">History of the brand</Link>
              </Box>
              <FooterItem>
                <Link to="/company/policy">Policy</Link>
              </FooterItem>
              <FooterItem>
                <Link to="/company/collaborations">Work with us</Link>
              </FooterItem>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
