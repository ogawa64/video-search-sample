import React, { useState, useContext } from "react";
import { AppContext } from "App";

import { TextField } from "@material-ui/core";

const TextInput: React.FC = () => {
  const [searchQuery, setQuery] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: 'UPDATE_QUERY',
      payload: {
        query: searchQuery
      }
    });
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
      <p>state : {state.query}</p>
    </form>
  );
};

export default TextInput;
