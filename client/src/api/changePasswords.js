import axios from "../ulits/instance/instance";

const changePasswords = (passwords) =>
  axios.put("/customers/password", passwords);

export default changePasswords;
