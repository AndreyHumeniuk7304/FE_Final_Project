import { Typography, ListItem, List } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import { filterCategoriesItem } from "../data";

const CheckboxForm = ({
  title,
  register,
  isItemChecked,
  setIsItemChecked,
  itemCLicked,
  setIdemCliked,
}) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      <Typography
        p={1}
        fontWeight="bold"
        textTransform="uppercase"
        sx={{ cursor: "pointer" }}
        onClick={() => setIsShow(!isShow)}
      >
        {title}
      </Typography>

      {isShow && (
        <List sx={{ p: 0 }}>
          {filterCategoriesItem[title].map((itemName) => (
            <ListItem key={Math.random()} sx={{ pt: 0.5, pb: 0.5 }}>
              <CheckboxItem
                itemName={itemName}
                title={title}
                register={register}
                isItemChecked={isItemChecked}
                setIsItemChecked={setIsItemChecked}
                itemCLicked={itemCLicked}
                setIdemCliked={setIdemCliked}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default CheckboxForm;

CheckboxForm.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func,
  isItemChecked: PropTypes.array,
  setIsItemChecked: PropTypes.func,
  itemCLicked: PropTypes.string,
  setIdemCliked: PropTypes.func,
  categories: PropTypes.string,
};
