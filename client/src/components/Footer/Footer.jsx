import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer__item">
            <Box
              component="h2"
              //   sx={{ fontFamily: "secondaryFontFamily" }}
              className="footer__item__title"
            >
              help
            </Box>
            <ul className="footer__item__list">
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>
                    Frequently asked questions
                  </Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <Link to="contact">
                  <a className="list-item__link" href="#!">
                    <Box sx={{ fontFamily: "fontFamily" }}>Contact</Box>
                  </a>
                </Link>
              </li>
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>How to Purchase</Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>Payment</Box>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item help">
            <h3 className="footer__item__title">follow us</h3>
            <ul className="footer__item__list">
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>Facebook</Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>Instagram</Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>Pinterest</Box>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__item compamy">
            <h3 className="footer__item__title">company</h3>
            <ul className="footer__item__list">
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>
                    History of the brand
                  </Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>Policy</Box>
                </a>
              </li>
              <li className="footer__item__list-item">
                <a className="list-item__link" href="#!">
                  <Box sx={{ fontFamily: "fontFamily" }}>Work with Us </Box>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
