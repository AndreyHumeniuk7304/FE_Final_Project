export const API_URL =
  process.env.REACT_APP_MODE === "production"
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
