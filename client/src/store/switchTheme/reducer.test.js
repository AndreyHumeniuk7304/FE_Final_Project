import reducer from "./reducer";
import { SWITCH_MODE } from "./type";

describe("switch theme reducer", () => {
  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual(true);
  });

  it("should return turn off night mode", () => {
    const state = true;
    expect(reducer({}, { type: SWITCH_MODE, payload: state })).toEqual(false);
  });

  it("should return turn on night mode", () => {
    const state = false;
    expect(reducer({}, { type: SWITCH_MODE, payload: state })).toEqual(true);
  });
});
