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
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsFilterPreloader } from "../../../store/catalog/actions";

const Filter = () => {
  const [currentPrice, setCurrentPrice] = useState([100, 1000]);
  const [isFilterUsing, setIsFilterUsing] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [categories, setCategories] = useState(getCategories(search));
  const [isItemChecked, setIsItemChecked] = useState([]);
  const [itemCLicked, setIdemCliked] = useState("");
  const dispatch = useDispatch();
  const [isMobileFilterBtnShow, setIsMobileFilterBtnShow] = useState(false);
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );
  const location = useLocation();

  const nightMode = useSelector((state) => state.nightMode);

  useEffect(() => {
    location.state && setCategories(location.state.categories);
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
    setIsMobileFilterBtnShow(false);
    document.getElementById("filter").classList.remove("filter__form--active");
  };

  const resetFilter = () => {
    reset();
    setSearch(categories.length ? `categories=${categories}` : "");
    setCurrentPrice(getMinMaxPrice(categorieProductList));
    setIsFilterUsing(false);
    setIsItemChecked([]);
  };

  const getLinkOnChange = (values) => {
    dispatch(
      fetchAllProductsFilterPreloader(
        "/products/filter" + setFilterLink(values, currentPrice)
      )
    );
  };

  return (
    <>
      <div className="filter-wrapper filter">
        <FilterMobileHeader
          isMobileFilterBtnShow={isMobileFilterBtnShow}
          setIsMobileFilterBtnShow={setIsMobileFilterBtnShow}
        />
        <Stack>
          <CheckedFilterItem isItemChecked={isItemChecked} />

          <form
            onSubmit={handleSubmit((data) => {
              submitFilter(data);
            })}
            onChange={handleSubmit((values) => getLinkOnChange(values))}
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
                  itemCLicked={itemCLicked}
                  setIdemCliked={setIdemCliked}
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
            <Button
              style={{ color: nightMode ? "#fff" : "#000" }}
              type="submit"
            >
              Apply
            </Button>
            <Button
              type="button"
              onClick={resetFilter}
              disabled={!isFilterUsing}
              style={{ color: nightMode ? "#fff" : "#000" }}
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
