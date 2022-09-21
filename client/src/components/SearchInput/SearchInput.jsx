import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";
import PropTypes from "prop-types";
import theme from "../../theme";
import { Box } from "@mui/material";

const SearchInput = ({ isExpandInput, setIsExpandInput }) => {
  const [valueInput, setValueInput] = useState("");
  const [activeFocus, setActiveFocus] = useState([]);
  const searchIcon = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (searchIcon.current != e.target) {
        setActiveFocus(true);
        window.screen.width < 720 && setIsExpandInput(true);
        e.target == input.current
          ? window.screen.width < 720 && setIsExpandInput(false)
          : setActiveFocus(false);
      } else {
        setActiveFocus(false);
      }
    });
  }, []);

  const clearInput = () => {
    setValueInput("");
    input.current.value = "";
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        margin: "0 10px 0 10px",
        [theme.breakpoints.down("tablet")]: {
          margin: "0 25px 0 0",
        },
      }}
    >
      <SearchIcon
        ref={searchIcon}
        onClick={() => {
          input.current.focus();
          window.screen.width < 720 && setIsExpandInput(false);
        }}
        sx={{ cursor: "pointer" }}
      />
      <Box
        sx={{
          width: "150px",
          height: "56px",
          fontSize: "10px",
          [theme.breakpoints.down("tablet")]: {
            display: "none",
          },
        }}
        onSubmit={(e) => e.preventDefault()}
        style={{ display: !isExpandInput ? "block" : "none" }}
      >
        <TextField
          sx={{ input: { color: "#fff" } }}
          id="standard-basic"
          inputRef={input}
          label="Search"
          variant="standard"
          size="small"
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          InputLabelProps={{
            style: {
              color: "#fff",
              paddingLeft: "5px",
              fontFamily: "Montserrat, sans-serif",
            },
          }}
        />
      </Box>

      {valueInput != "" && (
        <SearchModal
          value={valueInput}
          activeFocus={activeFocus}
          setActiveFocus={setActiveFocus}
          clearInput={clearInput}
        />
      )}
    </Box>
  );
};

SearchInput.propTypes = {
  isExpandInput: PropTypes.bool,
  setIsExpandInput: PropTypes.func,
};

export default SearchInput;
