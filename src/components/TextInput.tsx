import React, { useState, useContext, useReducer } from "react";
import appContext from "App";

import { TextField } from "@material-ui/core";

const TextInput: React.FC = () => {
  const [query, setQuery] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="filled-basic"
        label="search"
        variant="standard"
        onChange={handleChangeInput}
      />
    </form>
  );
};

export default TextInput;
