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
  const productsQuntity = useSelector((state) => state.catalog.productsQuntity);

  // const getMoreProducts = () => {
  //   setNumOfProductsOnPage(numOfProductsOnPage + 10);
  //   +search.getAll("perPage") === numOfProductsOnPage
  //     ? setNumOfProductsOnPage(numOfProductsOnPage + 10)
  //     : setPage();
  // };

  const setPage = (currentPage = 1) => {
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
      {/* <Button onClick={getMoreProducts}>Show more</Button> */}
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
