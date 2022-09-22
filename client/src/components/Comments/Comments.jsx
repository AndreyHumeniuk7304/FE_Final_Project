import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { commentsInputName, commentsSchema } from "./dataComments";
import Form from "../Forms/Form";
import {
  addNewComment,
  deleteComment,
  getCommentOfProduct,
} from "../../api/comments";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  IconButton,
  List,
  Box,
  Typography,
  Container,
  Stack,
} from "@mui/material";
import { Close } from "@mui/icons-material";

const Comments = ({ id }) => {
  const isLogin = useSelector((state) => state.userAccount.isLogin);
  const user = useSelector((state) => state.userAccount.customer._id);
  const nightMode = useSelector((state) => state.nightMode);

  const [comments, setComments] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    control,
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
    reset();
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
      <List
        key={comment._id}
        sx={{
          border: "1px solid grey",
          borderRadius: "4px",
          mb: "20px",
        }}
      >
        <Stack
          sx={{
            justifyContent: "space-between",
            p: "0.625rem",
            borderBottom: "1px solid grey",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              textTransform: "capitalize",
              fontSize: "1.05rem",
              lineHeight: "1.6rem",
            }}
          >
            {comment.customer.firstName}
          </Typography>
          {user === comment.customer._id && (
            <IconButton
              onClick={deleteCommentClick.bind(this, comment._id, id)}
              color={"secondary"}
              sx={{
                padding: 0,
              }}
              style={{ color: nightMode ? "#fff" : "#000" }}
            >
              <Close fontSize="small" />
            </IconButton>
          )}
        </Stack>
        <Typography
          sx={{
            p: "0.925rem",
            fontSize: "0.75rem",
            lineHeight: "1.25rem",
          }}
        >
          {comment.content}
        </Typography>
      </List>
    ));
  };

  return (
    <>
      <Container maxWidth={"lgDesktop"}>
        <Typography
          sx={{
            mt: "1.25rem",
            mb: " 1.25rem",
            fontWeight: "600",
            fontSize: "1.25rem",
          }}
        >
          {comments.length === 0
            ? "There are no comments for this product"
            : "Comments"}
        </Typography>
        <Box>{comments && addCommentsList()}</Box>
        {isLogin && (
          <Form
            actionWithForm={handleSubmitForm}
            formArr={commentsInputName}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            btnName={"Add comment"}
            control={control}
          />
        )}
      </Container>
    </>
  );
};

Comments.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Comments;
