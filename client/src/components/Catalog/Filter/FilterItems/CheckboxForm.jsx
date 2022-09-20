import { Typography, ListItem, List, Box } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import CheckboxItem from "./CheckboxItem";
import { filterCategoriesItem } from "../data";

const CheckboxForm = ({
  title,
  register,
  arrOfCheckedItem,
  setArrOfCheckedItem,
  itemCLicked,
  setIdemCliked,
  categories,
}) => {
  const [isShow, setIsShow] = useState(false);

  const filterTitle = (
    <Typography
      p={1}
      fontWeight="bold"
      textTransform="uppercase"
      sx={{ cursor: "pointer" }}
      onClick={() => setIsShow(!isShow)}
    >
      {!isShow ? "+ " : "- "} {title}
    </Typography>
  );

  return (
    <>
      {categories.length
        ? title.toLowerCase() !== "categories" && filterTitle
        : filterTitle}
      <List sx={{ p: 0 }}>
        {filterCategoriesItem[title].map((itemName) => (
          <ListItem
            key={Math.random()}
            sx={{ pt: 0.5, pb: 0.5, display: isShow ? "block" : "none" }}
          >
            <CheckboxItem
              itemName={itemName}
              title={title}
              register={register}
              arrOfCheckedItem={arrOfCheckedItem}
              setArrOfCheckedItem={setArrOfCheckedItem}
              itemCLicked={itemCLicked}
              setIdemCliked={setIdemCliked}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CheckboxForm;

CheckboxForm.propTypes = {
  title: PropTypes.string,
  register: PropTypes.func,
  arrOfCheckedItem: PropTypes.array,
  setArrOfCheckedItem: PropTypes.func,
  itemCLicked: PropTypes.string,
  setIdemCliked: PropTypes.func,
  categories: PropTypes.any,
};
