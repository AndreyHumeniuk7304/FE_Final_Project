import { List, ListItem } from "@mui/material";
import PropTypes from "prop-types";

export const CheckedFilterItem = ({ isItemChecked }) => {
  return (
    <List sx={{ display: "flex", flexWrap: "wrap" }}>
      {isItemChecked.map((data) => (
        <ListItem
          key={Math.random()}
          alignItems="center"
          sx={{
            borderColor: "primary.main",
            border: 1,
            borderRadius: "16px",
            pt: 0.4,
            pb: 0.4,
            mb: 1,
            width: "fit-content",
          }}
        >
          {data}
        </ListItem>
      ))}
    </List>
  );
};

CheckedFilterItem.propTypes = {
  isItemChecked: PropTypes.array,
};
