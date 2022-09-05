import axios from "axios";
import { API_URL } from "../../config/keys";

const instance = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default instance;
