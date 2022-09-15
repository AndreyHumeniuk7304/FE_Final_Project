import reducer from "./reducer";

describe("subscribe reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          isSubscribe: false,
          email: null,
          error: {},
        },
        {}
      )
    ).toEqual({
      isSubscribe: false,
      email: null,
      error: {},
    });
  });

  it("should to get subscribe", () => {
    expect(
      reducer(
        {
          isSubscribe: true,
          email: "test@gmail.com",
          error: {},
        },
        {
          type: "GET_SUBSCRIBE",
          payload: { enabled: true, email: "test@gmail.com" },
        }
      )
    ).toEqual({
      isSubscribe: true,
      email: "test@gmail.com",
      error: {},
    });
  });
  it("should to dellete subscribe", () => {
    expect(
      reducer(
        {
          isSubscribe: false,
          email: null,
          error: {},
        },
        {
          type: "DELETE_SUBSCRIBE",
          payload: "test@gmail.com",
        }
      )
    ).toEqual({
      isSubscribe: false,
      email: null,
      error: {},
    });
  });
  it("should to set error", () => {
    expect(
      reducer(
        {
          isSubscribe: false,
          email: null,
          error: { message: "error" },
        },
        {
          type: "SET_SUBSCRIBE_ERROR",
          payload: { message: "error" },
        }
      )
    ).toEqual({
      isSubscribe: false,
      email: null,
      error: { message: "error" },
    });
  });
});
