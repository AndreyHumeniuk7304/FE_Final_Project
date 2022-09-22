import Links from "../Links/Links";
import { Typography, Container, Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import AdresModal from "./AdresModal";
import {
  showBillingModal,
  showDeliveryModal,
  showModal,
} from "../../../store/cabinet/actions";

const Address = () => {
  const open = useSelector((state) => state.cabinet.showModal);

  const openDelivery = useSelector((state) => state.cabinet.showModalDelivery);
  const openBilling = useSelector((state) => state.cabinet.showModalBilling);
  const dispatch = useDispatch();

  const reopen = () => {
    dispatch(showModal(open));
  };

  const openDeliveryModal = () => {
    dispatch(showDeliveryModal(openDelivery));
    reopen();
  };
  const openBillingModal = () => {
    dispatch(showBillingModal(openBilling));
    reopen();
  };

  return (
    <>
      <Links />
      {!open && (
        <Grid
          style={{ maxWidth: 1100, margin: "50px auto" }}
          container
          justifyContent="space-around"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" p={1} style={{ margin: "30px auto" }}>
              DELIVERY ADDRESS
            </Typography>
            <Button
              size="large"
              variant="contained"
              type="submit"
              className="address__btn"
              onClick={openDeliveryModal}
            >
              ADD DELIVERY ADDRESS
            </Button>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" p={1} style={{ margin: "30px auto" }}>
              BILLING ADDRESS
            </Typography>
            <Button
              size="large"
              variant="contained"
              type="submit"
              className="address__btn"
              onClick={openBillingModal}
            >
              ADD DELIVERY ADDRESS
            </Button>
          </Box>
        </Grid>
      )}{" "}
      {open === true ? <AdresModal /> : false}
    </>
  );
};
export default Address;
