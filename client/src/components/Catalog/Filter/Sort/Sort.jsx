import { Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { sortDropList } from "./index";
import PropTypes from "prop-types";
import Form from "../../../Forms/Form";
import { Sort } from "@mui/icons-material";
import { useEffect } from "react";

const SortProduct = ({ categories }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { sort: "Default" },
  });

  useEffect(() => {
    reset();
  }, [categories]);

  const setLink = (queryParam) => {
    const indexStartSort = location.search.indexOf("sort");
    const index = location.search.indexOf("&perPage");
    const str = location.search.slice(0, indexStartSort - 1);

    return (
      str.slice(0, index) + `&sort=${queryParam}` + "&perPage=10&startPage=1"
    );
  };

  const setValidation = (e) => {
    const value = e.target.value;
    value === "Low price" && navigate(setLink("+currentPrice"));
    value === "High price" && navigate(setLink("-currentPrice"));
    value === "Default" && navigate(setLink(""));
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ div: { p: 0, textAlign: "start" } }}
    >
      <Sort />
      <Form
        control={control}
        handleSubmit={handleSubmit}
        handleChange={setValidation}
        formArr={sortDropList}
        errors={{}}
      />
    </Stack>
  );
};

export default SortProduct;

SortProduct.propTypes = {
  categories: PropTypes.string,
};
