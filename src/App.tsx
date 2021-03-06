import React from "react";
import { IState, Context } from "./index";

export interface IItem {
  text: string;
  index: number;
}

enum actionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export interface IAction {
  type: actionTypes;
  data?: any;
}

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const item: IItem = {
        text: action.data.text,
        index: state.items.length + 1,
      };

      return {
        ...state,
        items: [...state.items, item],
      };

    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.index !== state.items.length),
      };

    default:
      throw new Error("Type unknown in reducer");
  }
};

interface ItemProps {
  text: string;
  index: number;
}

const Item: React.FC<ItemProps> = ({ text, index }: IItem) => {
  return (
    <li>
      Item number: {index} - Text: {text}
    </li>
  );
};

const App: React.FC = () => {
  const { state, dispatch } = React.useContext(Context);
  const [inputValue, setInputValue] = React.useState("");

  const handleAddClick = () => {
    dispatch({ type: actionTypes.ADD_ITEM, data: { text: inputValue } });
  };

  const handleDeleteClick = () => {
    dispatch({ type: actionTypes.REMOVE_ITEM });
  };

  return (
    <div>
      <h1>React - Typescript useReducer Example</h1>
      <p>Add text</p>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        type="text"
        name="text"
        id="text"
      />
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {state &&
          state.items.map((item: IItem) => (
            <Item text={item.text} index={item.index} key={item.index} />
          ))}
      </ul>
      <p>Delete last item</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default App;
