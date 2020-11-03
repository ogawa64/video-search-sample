import React, { useState, useContext, useReducer } from "react";
import { initialState, reducer } from "App";

import { TextField } from "@material-ui/core";

const TextInput: React.FC = () => {
  const [searchQuery, setQuery] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);
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
      <p>TextInput: {state.query}</p>
      <p>{searchQuery}</p>
    </form>
  );
};

export default TextInput;
