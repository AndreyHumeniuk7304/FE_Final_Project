import reducer from "./reducer";

describe("subscribe reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          isSubscribe: false,
          email: null,
        },
        {}
      )
    ).toEqual({
      isSubscribe: false,
      email: null,
    });
  });

  it("should to get subscribe", () => {
    expect(
      reducer(
        {
          isSubscribe: true,
          email: "test@gmail.com",
        },
        {
          type: "GET_SUBSCRIBE",
          payload: { isSubscribe: true, email: "test@gmail.com" },
        }
      )
    ).toEqual({
      isSubscribe: true,
      email: "test@gmail.com",
    });
  });
  it("should to dellete subscribe", () => {
    expect(
      reducer(
        {
          isSubscribe: false,
          email: null,
        },
        {
          type: "DELETE_SUBSCRIBE",
          payload: "test@gmail.com",
        }
      )
    ).toEqual({
      isSubscribe: false,
      email: null,
    });
  });
});
