import reducer from "./reducer";

describe("product reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          categorieProductList: [],
          searchWord: "",
          isLoading: false,
          hasError: false,
          isFilterOpenMobile: false,
          productsQuntity: 0,
          filterOnChange: { isLoading: false, productsQuntityOnChange: null },
        },
        {}
      )
    ).toEqual({
      categorieProductList: [],
      searchWord: "",
      isLoading: false,
      hasError: false,
      isFilterOpenMobile: false,
      productsQuntity: 0,
      filterOnChange: { isLoading: false, productsQuntityOnChange: null },
    });
  });

  describe("for START_FETCH_PRODUCTS action", () => {
    it("should show loading...", () => {
      expect(
        reducer(
          {
            categorieProductList: [],
            searchWord: "",
            isLoading: false,
            hasError: false,
            isFilterOpenMobile: false,
            productsQuntity: 0,
            filterOnChange: { isLoading: false, productsQuntityOnChange: null },
          },
          {
            type: "START_FETCH_PRODUCTS",
          }
        )
      ).toEqual({
        categorieProductList: [],
        searchWord: "",
        isLoading: true,
        hasError: false,
        isFilterOpenMobile: false,
        productsQuntity: 0,
        filterOnChange: { isLoading: false, productsQuntityOnChange: null },
      });
    });
  });

  describe("for LOADED_PRODUCTS action", () => {
    it("should add products", () => {
      expect(
        reducer(
          {
            categorieProductList: [
              { name: "asus", title: "laptop 1", vendorCode: 111111 },
            ], //in future
            searchWord: "",
            isLoading: false,
            hasError: false,
            isFilterOpenMobile: false,
            productsQuntity: 0,
            filterOnChange: { isLoading: false, productsQuntityOnChange: null },
          },
          {
            type: "LOADED_PRODUCTS",
            payload: [{ name: "asus", title: "laptop 1", vendorCode: 111111 }],
          }
        )
      ).toEqual({
        categorieProductList: [
          { name: "asus", title: "laptop 1", vendorCode: 111111 },
        ],
        searchWord: "",
        isLoading: false,
        hasError: false,
        isFilterOpenMobile: false,
        productsQuntity: 0,
        filterOnChange: { isLoading: false, productsQuntityOnChange: null },
      });
    });
  });

  describe("for ERROR_LOADED_PRODUCTS action", () => {
    it("should show error", () => {
      expect(
        reducer(
          {
            categorieProductList: [],
            searchWord: "",
            isLoading: false,
            hasError: false,
            isFilterOpenMobile: false,
            productsQuntity: 0,
            filterOnChange: { isLoading: false, productsQuntityOnChange: null },
          },
          {
            type: "ERROR_LOADED_PRODUCTS",
          }
        )
      ).toEqual({
        categorieProductList: [],
        searchWord: "",
        isLoading: false,
        hasError: true,
        isFilterOpenMobile: false,
        productsQuntity: 0,
        filterOnChange: { isLoading: false, productsQuntityOnChange: null },
      });
    });
  });
});
