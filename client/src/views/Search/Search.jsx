import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Catalog from "../../components/Catalog/Catalog";
import { fetchCategoriesProducts } from "../../store/catalog/actions";
import { useSelector } from "react-redux";

const Search = () => {
  const searchWord = useSelector((state) => state.catalog.searchWord);
  const [search, setSearch] = useSearchParams();
  let querystring = `filter?Categories=Ladies,Mens,Accessories`;
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
    <div>
      <Catalog
        categories={"Ladies,Mens,Accessories"}
        setSearch={setSearch}
        search={search}
      />
    </div>
  );
};

export default Search;
