import React, { useReducer } from "react";
import "./App.css";

import TextInput from "components/TextInput";
import List from "components/List"

export type State = {
  query: string;
}

export type Action = {
  type: string,
  payload: {
    query: string
  }
}

const initialState = {
  query: "",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "UPDATE_QUERY":
      return {
        ...state,
        query: action.payload.query
      }
    default:
      return {
        ...state
      }
  }
}

export const AppContext = React.createContext({} as { state: State, dispatch: React.Dispatch<Action> });

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <h1>動画検索DEMO</h1>
        <TextInput />
        <List />
      </div>
    </AppContext.Provider>
  );
};

export default App;
