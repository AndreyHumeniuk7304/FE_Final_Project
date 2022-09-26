import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { useSelector } from "react-redux";
import Products from "../Products/Products";
import { Box } from "@mui/material";

const Search = () => {
  const searchWord = useSelector((state) => state.catalog.searchWord);
  const [search, setSearch] = useSearchParams();
  let querystring = `filter?categories=ladies,mens,accessories`;
  search.toString() && (querystring = "filter?" + search.toString().slice(9));
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("searchWord") && searchWord === "") {
      let word = JSON.parse(localStorage.getItem("searchWord"));
      dispatch(
        fetchCategoriesProducts(`products/${querystring}&brand=${word}`)
      );
    } else {
      localStorage.setItem("searchWord", JSON.stringify(searchWord));
      dispatch(
        fetchCategoriesProducts(`products/${querystring}&brand=${searchWord}`)
      );
    }
  }, [search.toString(), searchWord]);

  return (
    <Box>
      <Products
        categories={"ladies,mens,accessories"}
        setSearch={setSearch}
        search={search}
      />
    </Box>
  );
};

export default Search;
