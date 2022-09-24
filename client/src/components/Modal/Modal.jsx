import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";

const modalBoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ title, btnAction, isOpen }) => {
  return (
    <Box>
      <Modal open={isOpen}>
        <Box sx={modalBoxStyle}>
          <Typography variant="h6" component="h2" textAlign="center" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-around">
            {btnAction}
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default BasicModal;

BasicModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  btnAction: PropTypes.object,
};
