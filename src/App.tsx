import React, { useReducer } from "react";
import "./App.css";

import TextInput from "components/TextInput";
import List from "components/List"

export interface InitialState {
  query: string;
}

export interface Action {
  type: string,
  payload: {
    query: string
  }
}

export const initialState: InitialState = {
  query: "default",
};

export const reducer = (state: InitialState, action: Action) => {
  console.log("dispatched ", action.type);
  switch (action.type) {
    case "UPDATE_QUERY":
      return {
        ...state,
        query: action.payload.query
      }
    default:
      console.log(action.payload.query);
      return {
        ...state
      }
  }
}

export const AppContext = React.createContext(initialState);

const App: React.FC = () => {
  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <h1>動画検索DEMO</h1>
        <TextInput />
        <List />
      </div>
    </AppContext.Provider>
  );
};

export default App;
