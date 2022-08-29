import axios from "axios";

const instance = axios.create({
  baseURL: "https://fe-final-project.herokuapp.com/api",
});

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export default instance;
