import reducer from "./reducer";

describe("product reducer", () => {
  const state = [
    {
      productList: [],
      isLoading: false,
      hasError: false,
    },
  ];

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  describe("for START_FETCH_PRODUCTS action", () => {
    it("should show loading...", () => {
      expect(
        reducer(state, {
          type: "START_FETCH_PRODUCTS",
        })
      ).toEqual({
        ...state,
        isLoading: true,
      });
    });
  });

  describe("for LOADED_PRODUCTS action", () => {
    it("should add products", () => {
      expect(
        reducer(state, {
          type: "LOADED_PRODUCTS",
          payload: {
            name: "asus",
            title: "laptop 1",
            vendorCode: 111111,
          },
        })
      ).toEqual({
        ...state,
        productList: {
          name: "asus",
          title: "laptop 1",
          vendorCode: 111111,
        },
        isLoading: false,
        hasError: false,
      });
    });
  });

  describe("for ERROR_LOADED_PRODUCTS action", () => {
    it("should show error", () => {
      expect(
        reducer(state, {
          type: "ERROR_LOADED_PRODUCTS",
        })
      ).toEqual({
        ...state,
        isLoading: false,
        hasError: true,
      });
    });
  });
});
