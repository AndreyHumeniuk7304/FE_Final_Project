import { List, ListItem } from "@mui/material";
import PropTypes from "prop-types";
import { memo } from "react";

const CheckedFilterItem = ({ arrOfCheckedItem }) => {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: { mobile: "space-around", desktop: "start" },
        flexWrap: "wrap",
      }}
    >
      {arrOfCheckedItem.map((data) =>
        !data.length ? null : (
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

export default memo(CheckedFilterItem);

CheckedFilterItem.propTypes = {
  arrOfCheckedItem: PropTypes.array,
};
