import { Alert } from "@mui/material";
import PropTypes from "prop-types";

export default function CustomErrorMessage({ err }) {
  return err && <Alert severity="error">{err}</Alert>;
}

CustomErrorMessage.propTypes = {
  err: PropTypes.string,
};
