import { Button, Pagination } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Paginations = () => {
  const [search, setSearch] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [numOfProductsOnPage, setNumOfProductsOnPage] = useState(10);
  const productsQuntity = useSelector((state) => state.catalog.productsQuntity);

  useEffect(() => {
    setPage();
  }, [currentPage, numOfProductsOnPage]);

  const setPage = () => {
    const linkWithoutPagesInfo = search
      .toString()
      .slice(0, search.toString().search("&perPage"));

    setSearch(
      linkWithoutPagesInfo +
        `&perPage=${numOfProductsOnPage}&startPage=${currentPage}`
    );
  };

  return (
    <>
      <Button onClick={() => setNumOfProductsOnPage(numOfProductsOnPage + 10)}>
        Show more
      </Button>
      <Pagination
        shape="rounded"
        onChange={(e, v) => {
          setCurrentPage(v);
        }}
        page={+search.getAll("startPage")}
        count={Math.ceil(productsQuntity / 10)}
      />
    </>
  );
};

export default Paginations;
