import { Box, Stack } from "@mui/material";
import { useState } from "react";
import EntryHeader from "../../components/Cabinet/Entry/EntryHeader";
import Login from "../../components/Cabinet/Entry/Login";
import Registration from "../../components/Cabinet/Entry/Registrations";

const Entry = () => {
  const [activeTitle, setActiveTitle] = useState("login");

  return (
    <Box maxWidth={400} p={2} m="auto">
      <Stack direction="row" justifyContent="space-around">
        <EntryHeader
          activeTitle={activeTitle}
          setActiveTitle={setActiveTitle}
          title={"Login"}
        />
        <EntryHeader
          activeTitle={activeTitle}
          setActiveTitle={setActiveTitle}
          title={"Registration"}
        />
      </Stack>
      <Box>
        {activeTitle === "login" && <Login />}
        {activeTitle === "registration" && (
          <Registration setActiveTitle={setActiveTitle} />
        )}
      </Box>
    </Box>
  );
};

export default Entry;
