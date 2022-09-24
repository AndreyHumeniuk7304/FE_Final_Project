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
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Facebook">Frequently questions</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="contact">Contact</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Purchase"> How to Purchase</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Payment"> Payment</Link>
              </Box>
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
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Facebook">Facebook</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Facebook">Instagram</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Facebook">Pinterest</Link>
              </Box>
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
                <Link to="/History">History of the brand</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
              >
                <Link to="/Facebook">Policy</Link>
              </Box>
              <Box
                sx={{
                  fontFamily: "fontFamily",
                  fontSize: { mobile: "10px", desktop: "18px" },
                  marginBottom: { mobile: "10px", desktop: "19px" },
                }}
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
