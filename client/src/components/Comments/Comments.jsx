import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentsInputName, commentsSchema } from "./dataComments";
import Form from "../Forms/Form";
import "./comments.scss";
import {
  addNewComment,
  deleteComment,
  getCommentOfProduct,
} from "../../api/comments";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const Comments = ({ id }) => {
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const user = useSelector((state) => state.userAccount.customer.id);
  const [comments, setComments] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(commentsSchema),
    defaultValues: {
      content: "",
    },
  });
  const handleSubmitForm = async (value) => {
    await addNewComment(id, value.content);
    setComments(await getCommentOfProduct(id));
  };
  useEffect(() => {
    getCommentOfProduct(id).then((result) => setComments(result));
  }, []);
  const deleteCommentClick = async (commentId, productId) => {
    await deleteComment(commentId);
    setComments(await getCommentOfProduct(productId));
  };
  const addCommentsList = () => {
    return comments.map((comment) => (
      <li key={comment._id} className="content">
        <div className="content__item">
          <p className="content__item-username">{comment.customer.firstName}</p>
          {user === comment.customer._id && (
            <IconButton
              className="content__item-close"
              onClick={deleteCommentClick.bind(this, comment._id, id)}
              color={"secondary"}
              sx={{
                padding: 0,
              }}
            >
              <Close fontSize="small" />
            </IconButton>
          )}
        </div>
        <p className="content__comment">{comment.content}</p>
      </li>
    ));
  };

  return (
    <>
      <p className="comments-title container">Comments:</p>
      <ul className="container list">{comments && addCommentsList()}</ul>
      {isLogin && (
        <Form
          actionWithForm={handleSubmitForm}
          formArr={commentsInputName}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          btnName={"Add comment"}
        />
      )}
    </>
  );
};

Comments.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Comments;
