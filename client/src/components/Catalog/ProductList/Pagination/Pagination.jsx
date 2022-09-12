import { Pagination } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const theme = createTheme({
  pagination: {
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
  },
});

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

  console.log(
    nightMode
      ? { ul: theme.pagination.ulDark }
      : { ul: theme.pagination.ulWhite }
  );
  return (
    <>
      <Pagination
        sx={
          nightMode
            ? { ul: theme.pagination.ulDark }
            : { ul: theme.pagination.ulWhite }
        }
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
