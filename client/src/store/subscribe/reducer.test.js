import reducer from "./reducer";

describe("subscribe reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          enabled: false,
          email: null,
          error: {},
        },
        {}
      )
    ).toEqual({
      enabled: false,
      email: null,
      error: {},
    });
  });

  it("should to get subscribe", () => {
    expect(
      reducer(
        {
          enabled: true,
          email: "test@gmail.com",
          error: {},
        },
        {
          type: "GET_SUBSCRIBE",
          payload: { enabled: true, email: "test@gmail.com" },
        }
      )
    ).toEqual({
      enabled: true,
      email: "test@gmail.com",
      error: {},
    });
  });
  it("should to dellete subscribe", () => {
    expect(
      reducer(
        {
          enabled: false,
          email: null,
          error: {},
        },
        {
          type: "DELETE_SUBSCRIBE",
          payload: "test@gmail.com",
        }
      )
    ).toEqual({
      enabled: false,
      email: null,
      error: {},
    });
  });
  it("should to set error", () => {
    expect(
      reducer(
        {
          enabled: false,
          email: null,
          error: { message: "error" },
        },
        {
          type: "SET_SUBSCRIBE_ERROR",
          payload: { message: "error" },
        }
      )
    ).toEqual({
      enabled: false,
      email: null,
      error: { message: "error" },
    });
  });
});
