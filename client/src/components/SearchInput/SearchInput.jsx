import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";
import PropTypes from "prop-types";

const Form = styled("form")(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    display: "none",
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("tablet")]: {
    margin: "0px 25px 0px 0px",
  },
}));

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

  const clearInput = (value) => {
    value.blur();
    setValueInput("");
  };

  return (
    <Wrapper className="header__account-input">
      <SearchIcon
        ref={searchIcon}
        id="searchicon"
        onClick={() => {
          input.current.focus();
          window.screen.width < 720 && setIsExpandInput(false);
        }}
        className="searchIcon"
      />
      <Form
        sx={{
          "& > :not(style)": {
            maxWidth: "25ch",
            height: "56px",
            fontSize: "10px",
          },
        }}
        noValidate
        autoComplete="off"
        id="search-form"
        style={{ display: !isExpandInput ? "block" : "none" }}
      >
        <TextField
          id="standard-basic"
          inputRef={input}
          label="Search"
          variant="standard"
          size="small"
          onChange={(e) => {
            setValueInput(e.target.value);
          }}
          InputLabelProps={{ className: "textField__label" }}
        />
      </Form>
      {valueInput != "" && (
        <SearchModal
          value={valueInput}
          clearInput={clearInput}
          activeFocus={activeFocus}
          setActiveFocus={setActiveFocus}
        />
      )}
    </Wrapper>
  );
};

SearchInput.propTypes = {
  isExpandInput: PropTypes.bool,
  setIsExpandInput: PropTypes.func,
};

export default SearchInput;
