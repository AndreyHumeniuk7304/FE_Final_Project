import { Button } from "@mui/material";

const Comments = () => {
  return (
    <>
      <div>
        <textarea placeholder="Write comment"></textarea>
      </div>
      <Button sx={{ backgroundColor: "primary.dark", cursor: "pointer" }}>
        Add comment
      </Button>
    </>
  );
};

export default Comments;
