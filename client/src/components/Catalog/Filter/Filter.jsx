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
import { getMinMaxPrice } from "./filterFunctions";

export const filterTitles = ["brand", "mechanism", "material", "color"];

const Filter = ({ setSearch, search, categories }) => {
  const [currentPrice, setCurrentPrice] = useState([]);

  const { categorieProductList, searchWord } = useSelector(
    (state) => state.catalog
  );

  useEffect(() => {
    setCurrentPrice(getMinMaxPrice(categorieProductList));
  }, [categorieProductList]);

  const dispatch = useDispatch();

  const setFilterLink = (values) => {
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

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Categories: categories,
      brand: [],
      mechanism: [],
      material: [],
      color: [],
      currentPrice: getMinMaxPrice(categorieProductList),
    },
  });

  const resetFilter = () => {
    reset();
    setSearch("");
    setCurrentPrice(getMinMaxPrice(categorieProductList));
    dispatch(
      fetchCategoriesProducts(`products/filter?Categories=${categories}`)
    );
  };

  return (
    <>
      <div className="filter-wrapper filter">
        <FilterMobileHeader />
        <Stack>
          <CheckedFilterItem search={search} />

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
                  register={register}
                  search={search}
                />
              </Box>
            ))}

            <MaterialSlider
              title={"currentPrice"}
              name="currentPrice"
              defaultValues={getMinMaxPrice(categorieProductList)}
              register={register}
              currentPrice={currentPrice}
              setCurrentPrice={setCurrentPrice}
            />
            <Button type="submit">Apply</Button>
            <Button
              type="button"
              onClick={resetFilter}
              disabled={!search.toString().length}
            >
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
