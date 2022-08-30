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
import {
  getMinMaxPrice,
  setFilterLink,
  getCategories,
} from "./filterFunctions";
import { useSearchParams } from "react-router-dom";

export const filterTitles = [
  "categories",
  "brand",
  "mechanism",
  "material",
  "color",
];

const Filter = () => {
  const [currentPrice, setCurrentPrice] = useState([100, 1000]);
  const [search, setSearch] = useSearchParams();
  const [categories, setCategories] = useState(getCategories(search));
  const { categorieProductList, searchWord } = useSelector(
    (state) => state.catalog
  );

  useEffect(() => {
    getCategories(search).length && setCategories(getCategories(search));
    setCurrentPrice(getMinMaxPrice(categorieProductList));
  }, [categorieProductList]);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      categories: categories,
      brand: [],
      mechanism: [],
      material: [],
      color: [],
      currentPrice: getMinMaxPrice(categorieProductList),
    },
  });

  const submitFilter = (values) => {
    const link = setFilterLink(values, currentPrice);
    setSearch(link);
    // searchWord !== ""
    //   ? dispatch(
    //       fetchCategoriesProducts(`products/filter?${link}brand=${searchWord}`)
    //     )
    //   : dispatch(fetchCategoriesProducts(`products/filter?${link}`));
  };

  const resetFilter = () => {
    reset();
    setSearch(categories.length ? `categories=${categories}` : "");
    setCurrentPrice(getMinMaxPrice(categorieProductList));
    // dispatch(
    //   fetchCategoriesProducts(`products/filter?categories=${categories}`)
    // );
  };

  return (
    <>
      <div className="filter-wrapper filter">
        <FilterMobileHeader />
        <Stack>
          <CheckedFilterItem search={search} />

          <form
            onSubmit={handleSubmit((data) => {
              submitFilter(data);
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
              //disabled={!search.toString().length}
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
