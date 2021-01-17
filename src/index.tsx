import React, { Dispatch } from "react";
import ReactDOM from "react-dom";
import App, { IItem, IAction, reducer } from "./App";

export interface IState {
  items: IItem[];
}

export const initialState: IState = {
  items: [{ index: 1, text: "First item" }],
};

interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}

export const Context = React.createContext({} as IContext);

const Index: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
