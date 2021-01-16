import React from "react";
import ReactDOM from "react-dom";
import App, { IItem } from "./App";

export interface IState {
  items: IItem[];
}

export const initialState: IState = {
  items: [{ index: 1, text: "First item" }],
};

const Context = React.createContext(initialState);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={initialState}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
