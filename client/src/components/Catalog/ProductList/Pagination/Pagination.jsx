import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Paginations = () => {
  const [search, setSearch] = useSearchParams();
  const productsQuntity = useSelector((state) => state.catalog.productsQuntity);
  const setPage = (currentPage) => {
    const linkWithoutPagesInfo = search
      .toString()
      .slice(0, search.toString().search("perPage"));

    setSearch(linkWithoutPagesInfo + `perPage=10&startPage=${currentPage}`);
  };

  return (
    <>
      <Pagination
        shape="rounded"
        onChange={(e, v) => {
          setPage(v);
        }}
        page={+search.getAll("startPage")}
        count={Math.ceil(productsQuntity / 10)}
      />
    </>
  );
};

export default Paginations;
