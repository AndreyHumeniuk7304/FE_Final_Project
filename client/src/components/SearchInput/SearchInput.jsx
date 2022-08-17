import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import SearchModal from "../SearchModal/SearchModal";

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

const SearchInput = () => {
  const [valueInput, setValueInput] = useState("");

  const focusOnInput = () => {
    if (
      window.screen.width < 720 &&
      !(document.getElementById("standard-basic") === document.activeElement)
    ) {
      document.getElementById("search-form").style.display = "block";
      document.querySelector(".account").style.display = "none";
      document.querySelector(".shopping-bag").style.display = "none";
      document.querySelector(".burger").style.display = "none";
    }
    document.getElementById("standard-basic").focus();
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        window.screen.width < 720 &&
        document.querySelector("#standard-basic") != document.activeElement
      ) {
        document.getElementById("search-form").style.display = "none";
        document.querySelector(".account").style.display = "flex";
        document.querySelector(".shopping-bag").style.display = "flex";
        document.querySelector(".burger").style.display = "flex";
      }
    });
  }, []);

  const clearInput = () => {
    document.querySelector("#standard-basic").value.blur();
    document.querySelector("#standard-basic").value = "";
    setValueInput("");
  };

  return (
    <Wrapper className="header__account-input">
      <SearchIcon onClick={focusOnInput} className="searchIcon" />
      <Form
        component="form"
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
      >
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          size="small"
          onChange={() => {
            setValueInput(document.querySelector("#standard-basic").value);
          }}
          InputLabelProps={{ className: "textField__label" }}
        />
      </Form>
      {valueInput != "" && (
        <SearchModal value={valueInput} clearInput={clearInput} />
      )}
    </Wrapper>
  );
};

export default SearchInput;
