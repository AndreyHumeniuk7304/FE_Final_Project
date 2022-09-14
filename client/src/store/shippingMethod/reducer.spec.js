import shippingMethodReducer from "./reducer";

describe("shipping method reducer", () => {
  it("should return default value", () => {
    expect(shippingMethodReducer(undefined, {})).toEqual({});
  });

  it("should add active shipping method", () => {
    const activeShippingMethod = {
      name: "Nova Poshta",
      cost: 100,
      period: "2 days",
    };
    expect(
      shippingMethodReducer(undefined, {
        type: "CHOOSE_SHIPPING_METHOD",
        payload: activeShippingMethod,
      })
    ).toEqual(activeShippingMethod);
  });

  it("should change active method", () => {
    const state = {
      name: "Nova Poshta",
      cost: 100,
      period: "2 days",
    };

    const newShippingMethod = {
      name: "UkrPoshta",
      cost: 50,
      period: "3 days",
    };
    expect(
      shippingMethodReducer(state, {
        type: "CHOOSE_SHIPPING_METHOD",
        payload: newShippingMethod,
      })
    ).toEqual(newShippingMethod);
  });
});
