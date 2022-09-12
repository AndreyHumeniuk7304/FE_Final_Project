import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const useStylesDark = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));
const useStylesWhite = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#686868",
    },
  },
}));

const Paginations = () => {
  const [search, setSearch] = useSearchParams();
  const productsQuntity = useSelector((state) => state.catalog.productsQuntity);
  const setPage = (currentPage) => {
    const linkWithoutPagesInfo = search
      .toString()
      .slice(0, search.toString().search("perPage"));

    setSearch(linkWithoutPagesInfo + `perPage=10&startPage=${currentPage}`);
  };

  const nightMode = useSelector((state) => state.nightMode);
  const classesDark = useStylesDark();
  const classesWhite = useStylesWhite();

  return (
    <>
      <Pagination
        classes={nightMode ? { ul: classesDark.ul } : { ul: classesWhite.ul }}
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
