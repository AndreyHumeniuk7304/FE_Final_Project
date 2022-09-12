import { Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const useStyles = makeStyles(() => ({
  ulWhite: {
    "& .MuiPaginationItem-root": {
      color: "#686868",
    },
  },
  ulDark: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
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
  const classes = useStyles();

  return (
    <>
      <Pagination
        classes={nightMode ? { ul: classes.ulDark } : { ul: classes.ulWhite }}
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
