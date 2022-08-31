import { Box, Button, Stack } from "@mui/material";
import CheckboxForm from "./CheckboxForm";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MaterialSlider } from "./MaterialSlider";
import { CheckedFilterItem } from "./checkedFilterItem";
import FilterMobileHeader from "./FilterMobileHeader";
import {
  getMinMaxPrice,
  setFilterLink,
  getCategories,
  getItemInFilter,
  filterTitles,
} from "./filterFunctions";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Filter = () => {
  const [currentPrice, setCurrentPrice] = useState([100, 1000]);
  const [isFilterUsing, setIsFilterUsing] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [categories, setCategories] = useState(getCategories(search));
  const [isItemChecked, setIsItemChecked] = useState([]);
  const { categorieProductList, searchWord } = useSelector(
    (state) => state.catalog
  );

  useEffect(() => {
    setCategories(getCategories(search));
    setCurrentPrice(getMinMaxPrice(categorieProductList));
    getItemInFilter(search, setIsItemChecked);
  }, [categorieProductList]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      categories: [],
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
    setIsFilterUsing(true);
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
    setIsFilterUsing(false);
    setIsItemChecked([]);
  };

  return (
    <>
      <div className="filter-wrapper filter">
        <FilterMobileHeader />
        <Stack>
          <CheckedFilterItem isItemChecked={isItemChecked} />

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
                  isItemChecked={isItemChecked}
                  setIsItemChecked={setIsItemChecked}
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
              disabled={!isFilterUsing}
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
