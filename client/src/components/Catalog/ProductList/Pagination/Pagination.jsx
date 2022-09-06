import { Button, Pagination } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Paginations = () => {
  const [search, setSearch] = useSearchParams();
  const [numOfProductsOnPage, setNumOfProductsOnPage] = useState(
    +search.getAll("perPage")
  );
  const [currentPage, setCurrentPage] = useState(+search.getAll("startPage"));

  const productsQuntity = useSelector((state) => state.catalog.productsQuntity);
  const categorieProductList = useSelector(
    (state) => state.catalog.categorieProductList
  );

  useEffect(() => {
    setPage();
  }, [numOfProductsOnPage, currentPage]);

  const setPage = () => {
    const linkWithoutPagesInfo = search
      .toString()
      .slice(0, search.toString().search("perPage"));

    setSearch(
      linkWithoutPagesInfo +
        `perPage=${numOfProductsOnPage}&startPage=${currentPage}`
    );
  };

  return (
    <>
      {productsQuntity > numOfProductsOnPage &&
        +search.getAll("startPage") === 1 && (
          <Button
            onClick={() => setNumOfProductsOnPage(numOfProductsOnPage + 10)}
          >
            Show more
          </Button>
        )}
      <Pagination
        shape="rounded"
        onChange={(e, v) => {
          setCurrentPage(v);
        }}
        page={+search.getAll("startPage")}
        count={Math.ceil(productsQuntity / +search.getAll("perPage"))}
      />
    </>
  );
};

export default Paginations;
