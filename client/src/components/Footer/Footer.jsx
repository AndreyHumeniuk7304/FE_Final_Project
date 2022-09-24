import { Box, Container } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [statusOpenFooter, setStatusOpenFooter] = useState(false);

  const handleFooter = () => {
    setStatusOpenFooter(!statusOpenFooter);
  };
  return (
    <footer className="footer">
      <Container maxWidth={"lgDesktop"}>
        <div className="footer-container">
          <div className="footer__item">
            <Box
              onClick={handleFooter}
              component="h3"
              className="footer__item__title"
            >
              help
            </Box>
            <ul
              className={
                !statusOpenFooter
                  ? "footer__item__list"
                  : "footer__item__list open_footer-items"
              }
            >
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/help/quastions">
                  <Box sx={{ fontFamily: "fontFamily" }}>
                    Frequently asked questions
                  </Box>
                </Link>
              </li>
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/help/contact">
                  <Box sx={{ fontFamily: "fontFamily" }}>Contact</Box>
                </Link>
              </li>
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/help/purchase">
                  <Box sx={{ fontFamily: "fontFamily" }}>How to Purchase</Box>
                </Link>
              </li>
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/help/payment">
                  <Box sx={{ fontFamily: "fontFamily" }}>Payment</Box>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <Box
              component="h3"
              onClick={handleFooter}
              className="footer__item__title"
            >
              follow us
            </Box>
            <ul
              className={
                !statusOpenFooter
                  ? "footer__item__list"
                  : "footer__item__list open_footer-items"
              }
            >
              <li className="footer__item__list-item">
                <a
                  target="blank"
                  className="list-item__link"
                  href="https://www.facebook.com/"
                >
                  <Box sx={{ fontFamily: "fontFamily" }}>Facebook</Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a
                  target="blank"
                  className="list-item__link"
                  href="https://www.instagram.com/"
                >
                  <Box sx={{ fontFamily: "fontFamily" }}>Instagram</Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a
                  target="blank"
                  className="list-item__link"
                  href="https://www.pinterest.com/"
                >
                  <Box sx={{ fontFamily: "fontFamily" }}>Pinterest</Box>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <Box
              onClick={handleFooter}
              component="h3"
              className="footer__item__title"
            >
              company
            </Box>
            <ul
              className={
                !statusOpenFooter
                  ? "footer__item__list"
                  : "footer__item__list open_footer-items"
              }
            >
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/company/history">
                  <Box sx={{ fontFamily: "fontFamily" }}>
                    History of the brand
                  </Box>
                </Link>
              </li>
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/company/policy">
                  <Box sx={{ fontFamily: "fontFamily" }}>Policy</Box>
                </Link>
              </li>
              <li className="footer__item__list-item">
                <Link className="list-item__link" to="/company/collaborations">
                  <Box sx={{ fontFamily: "fontFamily" }}>Work with Us </Box>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
