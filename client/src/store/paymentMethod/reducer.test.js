import reducer from "./reducer";
import { CHOOSE_PEYMENT_METHOD } from "./type";

describe("payment method reducer", () => {
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it("should return payment method", () => {
    const state = {
      name: "Cards",
    };
    expect(
      reducer({}, { type: CHOOSE_PEYMENT_METHOD, payload: state })
    ).toEqual(state);
  });
});
