import axios from "../ulits/instance/instance";

export const addNewComment = async (product, content) => {
  const { data } = await axios.post("/comments", {
    product,
    content,
  });
  return data;
};

export const deleteComment = async (id) => {
  const { data } = await axios.delete(`/comments/${id}`);
  return data;
};

export const getCommentOfProduct = async (id) => {
  const { data } = await axios.get(`/comments/product/${id}`);
  return data;
};
