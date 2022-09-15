import reducer from "./reducer";

describe("userAccaunt reducer", () => {
  it("should return default value", () => {
    expect(
      reducer(
        {
          isLogin: false,
          error: {},
          customer: {},
          wishList: [],
          token: "",
        },
        {}
      )
    ).toEqual({
      isLogin: false,
      error: {},
      customer: {},
      wishList: [],
      token: "",
    });
  });

  it("should to set isLogin", () => {
    expect(
      reducer(
        {
          isLogin: true,
          error: {},
          customer: {},
          wishList: [],
          token: "",
        },
        {
          type: "SET_IS_LOGIN",
          payload: true,
        }
      )
    ).toEqual({
      isLogin: true,
      error: {},
      customer: {},
      wishList: [],
      token: "",
    });
  });

  it("should to set token", () => {
    expect(
      reducer(
        {
          isLogin: true,
          error: {},
          customer: {},
          wishList: [],
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZkNDMzNjExMDllMzU0MDhmNDc3ZCIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE1ODQzMiwiZXhwIjoxNjYzMTk0NDMyfQ.1HG4jUuX67vjF2QRbFiZhyaHP1jumupiCKaGcWBXezA",
        },
        {
          type: "GET_LOGIN_SUCCESS",
          payload:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZkNDMzNjExMDllMzU0MDhmNDc3ZCIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE1ODQzMiwiZXhwIjoxNjYzMTk0NDMyfQ.1HG4jUuX67vjF2QRbFiZhyaHP1jumupiCKaGcWBXezA",
        }
      )
    ).toEqual({
      isLogin: true,
      error: {},
      customer: {},
      wishList: [],
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZkNDMzNjExMDllMzU0MDhmNDc3ZCIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE1ODQzMiwiZXhwIjoxNjYzMTk0NDMyfQ.1HG4jUuX67vjF2QRbFiZhyaHP1jumupiCKaGcWBXezA",
    });
  });
  it("should to set customer data", () => {
    expect(
      reducer(
        {
          isLogin: true,
          error: {},
          customer: {
            isAdmin: true,
            enabled: true,
            firstName: "admin",
            lastName: "admin",
            login: "admin",
            email: "fe.advjs.final.project.3@gmail.com",
          },
          wishList: [],
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZkNDMzNjExMDllMzU0MDhmNDc3ZCIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE1ODQzMiwiZXhwIjoxNjYzMTk0NDMyfQ.1HG4jUuX67vjF2QRbFiZhyaHP1jumupiCKaGcWBXezA",
        },
        {
          type: "SET_USER_DATA",
          payload: {
            isAdmin: true,
            enabled: true,
            firstName: "admin",
            lastName: "admin",
            login: "admin",
            email: "fe.advjs.final.project.3@gmail.com",
          },
        }
      )
    ).toEqual({
      isLogin: true,
      error: {},
      customer: {
        isAdmin: true,
        enabled: true,
        firstName: "admin",
        lastName: "admin",
        login: "admin",
        email: "fe.advjs.final.project.3@gmail.com",
      },
      wishList: [],
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZWZkNDMzNjExMDllMzU0MDhmNDc3ZCIsImZpcnN0TmFtZSI6ImFkbWluIiwibGFzdE5hbWUiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzE1ODQzMiwiZXhwIjoxNjYzMTk0NDMyfQ.1HG4jUuX67vjF2QRbFiZhyaHP1jumupiCKaGcWBXezA",
    });
  });
  it("should to set error", () => {
    expect(
      reducer(
        {
          isLogin: false,
          error: { message: "Error.Try again later" },
          customer: {},
          wishList: [],
          token: "",
        },
        {
          type: "GET_LOGIN_ERROR",
          payload: { message: "Error.Try again later" },
        }
      )
    ).toEqual({
      isLogin: false,
      error: { message: "Error.Try again later" },
      customer: {},
      wishList: [],
      token: "",
    });
  });
});
