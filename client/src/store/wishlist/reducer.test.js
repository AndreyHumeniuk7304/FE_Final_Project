import reducer from "./reducer";

describe("wishlist reducer", () => {
  it("should return default value", () => {
    expect(reducer({ list: [] }, {})).toEqual({
      list: [],
    });
  });
});

it("should to set wishlist", () => {
  expect(
    reducer(
      {
        list: [],
      },
      {
        type: "SET_WISHLIST",
        payload: [{ product: { id: 123, name: "test" } }],
      }
    )
  ).toEqual({
    list: [{ product: { id: 123, name: "test" } }],
  });
});
