import { List, ListItem } from "@mui/material";
import PropTypes from "prop-types";

const CheckedFilterItem = ({ arrOfCheckedItem }) => {
  return (
    <List sx={{ display: "flex", flexWrap: "wrap" }}>
      {arrOfCheckedItem.map(
        (data) =>
          data && (
            <ListItem
              key={Math.random()}
              alignItems="center"
              sx={{
                borderColor: "primary.main",
                border: 1,
                borderRadius: "16px",
                pt: 0.4,
                pb: 0.4,
                m: 0.5,
                width: "fit-content",
              }}
            >
              {data}
            </ListItem>
          )
      )}
    </List>
  );
};

export default CheckedFilterItem;

CheckedFilterItem.propTypes = {
  arrOfCheckedItem: PropTypes.array,
};
