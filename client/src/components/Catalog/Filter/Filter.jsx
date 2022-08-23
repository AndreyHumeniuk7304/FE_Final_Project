import { Box, Button, Stack } from "@mui/material";
import CheckboxForm from "./CheckboxForm";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchCategoriesProducts } from "../../../store/catalog/actions";
import { useForm } from "react-hook-form";
import { MaterialSlider } from "./MaterialSlider";
import { CheckedFilterItem } from "./checkedFilterItem";
import FilterMobileHeader from "./FilterMobileHeader";

const filterTitles = ["brand", "mechanism", "material", "color"];

const Filter = ({ setSearch, search, categories }) => {
  const [currentPrice, setCurrentPrice] = useState([]);
  const [curentValues, setCurentValues] = useState();

  const productList = useSelector(
    (state) => state.catalog.categorieProductList
  );
  const searchWord = useSelector((state) => state.catalog.searchWord);

  useEffect(() => {
    setCurrentPrice(getMinMaxPrice());
  }, [productList]);

  useEffect(() => {
    console.log();
    search.toString() === "" && setCurentValues({ categories: categories });
  }, [search.toString()]);

  const dispatch = useDispatch();

  const getMinOrMaxPrice = (arr, minMax) =>
    arr.length &&
    arr.reduce((prev, curr) =>
      minMax === ">"
        ? prev.currentPrice < curr.currentPrice
          ? prev
          : curr
        : prev.currentPrice > curr.currentPrice
        ? prev
        : curr
    );

  const setFilterLink = (values) => {
    setCurentValues({ ...values, currentPrice: currentPrice });

    let link = "filter?";
    for (let key in values) {
      let value = "";
      Array.isArray(values[key])
        ? (value = values[key].join().toLowerCase())
        : (value = values[key]);
      key === "currentPrice"
        ? (link =
            link +
            "minPrice" +
            "=" +
            currentPrice[0] +
            "&" +
            "maxPrice" +
            "=" +
            currentPrice[1] +
            "&")
        : value !== ""
        ? (link = link + key + "=" + value + "&")
        : null;
    }
    setSearch(link);
    searchWord !== ""
      ? dispatch(fetchCategoriesProducts(`products/${link}brand=${searchWord}`))
      : dispatch(fetchCategoriesProducts(`products/${link}`));
  };

  const getMinMaxPrice = () => [
    getMinOrMaxPrice(productList, ">").currentPrice,
    getMinOrMaxPrice(productList, "<").currentPrice,
  ];

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Categories: categories,
      brand: [],
      mechanism: [],
      material: [],
      color: [],
      currentPrice: getMinMaxPrice(),
    },
  });

  const getFilterItem = (caregory) => {
    let newList = productList.map(
      (listItem) => listItem[caregory] && listItem[caregory].trim()
    );
    newList = [...new Set(newList)];
    return newList;
  };

  const resetFilter = () => {
    reset();
    setSearch("");
    setCurrentPrice(getMinMaxPrice());
    setCurentValues({ categories: categories });
    dispatch(
      fetchCategoriesProducts(`products/filter?Categories=${categories}`)
    );
  };

  return (
    <>
      <div className="filter-wrapper filter">
        <FilterMobileHeader />
        <Stack>
          <CheckedFilterItem
            curentValues={curentValues}
            defaultValues={getMinMaxPrice()}
          />

          <form
            onSubmit={handleSubmit((data) => {
              setFilterLink(data);
            })}
            className="filter__form"
            id="filter"
          >
            {filterTitles.map((title) => (
              <Box className="checkbox" key={title}>
                <CheckboxForm
                  title={title}
                  getFilterItem={getFilterItem}
                  register={register}
                  search={search}
                />
              </Box>
            ))}

            <MaterialSlider
              title={"currentPrice"}
              name="currentPrice"
              defaultValues={getMinMaxPrice()}
              register={register}
              currentPrice={currentPrice}
              setCurrentPrice={setCurrentPrice}
            />
            <Button type="submit">Apply</Button>
            <Button type="button" onClick={resetFilter}>
              Reset
            </Button>
          </form>
        </Stack>
      </div>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  categories: PropTypes.string,
  setSearch: PropTypes.func,
  search: PropTypes.object,
};
