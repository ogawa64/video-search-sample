import React, { useReducer } from "react";
import "./App.css";

import TextInput from "components/TextInput";

interface InitialState {
  query: string;
}

export const initialState: InitialState = {
  query: "default",
};

export const appContext = React.createContext(initialState);

const App: React.FC = () => {
  return (
    <appContext.Provider value={initialState}>
      <div className="App">
        <h1>動画検索DEMO</h1>
        <TextInput />
      </div>
    </appContext.Provider>
  );
};

export default App;
