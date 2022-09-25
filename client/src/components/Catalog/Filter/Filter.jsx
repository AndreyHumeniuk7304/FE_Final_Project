import { Box, Button, List, ListItem, Stack } from "@mui/material";
import CheckboxForm from "./FilterItems/CheckboxForm";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import MaterialSlider from "./FilterItems/MaterialSlider";
import FilterMobileHeader from "./FilterMobileHeader";
import {
  getMinMaxPrice,
  setFilterLink,
  getCategories,
  getItemInFilter,
} from "./filterFunctions";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsFilterPreloader } from "../../../store/catalog/actions";
import CheckedFilterItem from "./checkedFilterItem";
import { defaultFilterData, filterTitles } from "./data";
import SortProduct from "./Sort/Sort";

const filterTitleStyle = {
  flexDirection: "column",
  alignItems: "start",
  pl: 0,
};
const Filter = () => {
  const [currentPrice, setCurrentPrice] = useState([]);
  const [isFilterUsing, setIsFilterUsing] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [categories, setCategories] = useState("");
  const [arrOfCheckedItem, setArrOfCheckedItem] = useState([]);
  const [itemCLicked, setItemCliked] = useState("");
  const dispatch = useDispatch();
  const [isMobileFilterBtnShow, setIsMobileFilterBtnShow] = useState(false);
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );
  const [defaultPrice, setDefaultPrice] = useState([0, 1000]);
  const location = useLocation();

  const nightMode = useSelector((state) => state.nightMode);

  useEffect(() => {
    location.state && setCategories(location.state.categories);
    setCurrentPrice(getMinMaxPrice(categorieProductList));
    getItemInFilter(search, setArrOfCheckedItem, categories);
    setDefaultPrice(getMinMaxPrice(categorieProductList));
  }, [categorieProductList]);

  useEffect(() => {
    getItemInFilter(search, setArrOfCheckedItem, categories);
  }, [categories]);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: defaultFilterData,
  });

  const submitFilter = (values) => {
    categories ? (values = { ...values, categories: categories }) : values;
    const link = setFilterLink(values, currentPrice);
    setSearch(link + "&perPage=10&startPage=1");
    setIsFilterUsing(true);
    setIsMobileFilterBtnShow(false);
    document.getElementById("filter").style = "none";
    setItemCliked("");
  };

  const resetFilter = () => {
    reset();
    setSearch(
      categories.length ? `categories=${categories}&perPage=10&startPage=1` : ""
    );
    setCurrentPrice(getMinMaxPrice(categorieProductList));
    setIsFilterUsing(false);
    setArrOfCheckedItem([!categories ? [] : [categories]]);
    setIsMobileFilterBtnShow(false);
    setItemCliked("");
  };

  const getLinkOnChange = (values) => {
    categories && (values = { ...values, categories: categories });
    dispatch(
      fetchAllProductsFilterPreloader(
        "/products/filter" + setFilterLink(values, currentPrice)
      )
    );
  };

  const filterTitleList = (title) => (
    <ListItem key={title} sx={filterTitleStyle}>
      <CheckboxForm
        title={title}
        register={register}
        arrOfCheckedItem={arrOfCheckedItem}
        setArrOfCheckedItem={setArrOfCheckedItem}
        itemCLicked={itemCLicked}
        setIdemCliked={setItemCliked}
        categories={categories}
      />
    </ListItem>
  );

  const filterTitleListLogic = (title) =>
    categories.length
      ? categories === "accessories"
        ? title.toLowerCase() !== "mechanism" &&
          title.toLowerCase() !== "categories" &&
          filterTitleList(title)
        : title.toLowerCase() !== "categories" && filterTitleList(title)
      : filterTitleList(title);

  const filterForm = (
    <form
      onSubmit={handleSubmit((data) => {
        submitFilter(data);
      })}
      onChange={handleSubmit((values) => getLinkOnChange(values))}
    >
      <List>
        {filterTitles.map((title) => filterTitleListLogic(title))}
        <ListItem sx={filterTitleStyle}>
          <MaterialSlider
            title={"currentPrice"}
            name="currentPrice"
            defaultValues={defaultPrice}
            register={register}
            currentPrice={currentPrice}
            setCurrentPrice={setCurrentPrice}
          />
        </ListItem>
      </List>

      <Stack direction="row" justifyContent="space-evenly">
        <Button sx={{ color: nightMode ? "#fff" : "#000" }} type="submit">
          Apply
        </Button>
        <Button
          type="button"
          onClick={resetFilter}
          disabled={!isFilterUsing}
          sx={{ color: nightMode ? "#fff" : "#000" }}
        >
          Reset
        </Button>
      </Stack>
    </form>
  );

  return (
    <Box p={2} width={{ mobile: "100%", desktop: 280 }} textAlign="center">
      <FilterMobileHeader
        isMobileFilterBtnShow={isMobileFilterBtnShow}
        setIsMobileFilterBtnShow={setIsMobileFilterBtnShow}
      />

      <Stack>
        <CheckedFilterItem arrOfCheckedItem={arrOfCheckedItem} />
        <SortProduct />
        <Box display={{ mobile: "none", desktop: "block" }} id="filter">
          {filterForm}
        </Box>
      </Stack>
    </Box>
  );
};

export default Filter;
