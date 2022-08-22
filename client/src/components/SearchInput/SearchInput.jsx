import React, { useEffect, useRef } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";
import PropTypes from "prop-types";

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

  return (
    <div className="header__account-input">
      <SearchIcon
        ref={searchIcon}
        id="searchicon"
        onClick={() => {
          input.current.focus();
          window.screen.width < 720 && setIsExpandInput(false);
        }}
        className="searchIcon"
      />
      <form
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
        className="header__account-form"
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
      </form>
      {valueInput != "" && (
        <SearchModal
          value={valueInput}
          activeFocus={activeFocus}
          setActiveFocus={setActiveFocus}
        />
      )}
    </div>
  );
};

SearchInput.propTypes = {
  isExpandInput: PropTypes.bool,
  setIsExpandInput: PropTypes.func,
};

export default SearchInput;
