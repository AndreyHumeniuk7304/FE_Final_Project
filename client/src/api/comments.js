import axios from "../ulits/instance/instance";

export const addComment = async (customerId, product, content) => {
  const { data } = await axios.post("/comments", {
    product,
    customerId,
    content,
  });
  return data;
};
export const getAllComments = async () => {
  const { data } = await axios.get("/comments");
  return data;
};

export const deleteComment = async (id) => {
  const { data } = await axios.delete(`/comments/${id}`);
  return data;
};
