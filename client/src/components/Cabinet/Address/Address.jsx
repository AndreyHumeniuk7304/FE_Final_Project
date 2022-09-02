import { Link } from "react-router-dom";
import Links from "../Links/Links";
import { Grid, Typography, IconButton, Container } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AdresModal from "./AdresModal";
import { showModal } from "../../../store/cabinet/actions";

const Address = () => {
  const open = useSelector((state) => state.cabinet.showModal);
  const dispatch = useDispatch();

  const sayHi = () => {
    console.log("hi");
  };
  // const [open, setOpen] = useState(false);
  const reopen = () => {
    dispatch(showModal(open));
  };
  console.log(open);

  return (
    <>
      <Links />
      {!open && (
        <div className="profile">
          <div className="address">
            <div className="address__left-menu">
              {/* <div className="address__book">
            <Typography variant="h4">
              ADDRESS BOOK
              <IconButton onClick={reopen}>
                <AddCircleIcon />
              </IconButton>
            </Typography>
          </div> */}
              <div className="address__delivery">
                <Typography variant="h4">
                  DELIVERY ADDRESS
                  {/* <IconButton onClick={reopen}> */}
                  {/* <AddCircleIcon /> */}
                  {/* </IconButton> */}
                </Typography>
                {/* <a href="#">DELIVERY ADDRESS</a> */}
              </div>
              <input
                onClick={reopen}
                className="address__btn"
                type="button"
                value="ADD NEW ADDRESS"
              ></input>
            </div>
            <div className="address__right-menu">
              <div className="address__billing">
                <a href="#">BILLING ADDRESS</a>
              </div>
              <input
                onClick={reopen}
                className="address__btn"
                type="button"
                value="ADD NEW ADDRESS"
              ></input>
            </div>
          </div>
        </div>
      )}
      {open === true ? <AdresModal /> : false}
    </>
  );
};
export default Address;
