import PropTypes from "prop-types";
import { Typography } from "@mui/material";

const EntryHeader = ({ activeTitle, setActiveTitle, title }) => {
  const getTitleName = (e) => setActiveTitle(e.target.id);

  return (
    <Typography
      p={0.5}
      fontWeight="bold"
      textTransform="uppercase"
      component="h6"
      sx={{
        cursor: "pointer",
        borderBottom:
          activeTitle === title.toLowerCase() ? "1px solid" : "none",
      }}
      id={title.toLowerCase()}
      onClick={getTitleName}
    >
      {title}
    </Typography>
  );
};

export default EntryHeader;

EntryHeader.propTypes = {
  activeTitle: PropTypes.string,
  title: PropTypes.string,
  setActiveTitle: PropTypes.func,
};
