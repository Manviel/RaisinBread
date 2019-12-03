import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, data: [...state.data, action.payload] };
    case "select":
      return { ...state, selected: [...state.selected, action.payload] };
    case "remove":
      return {
        ...state,
        selected: state.selected.filter(e => e !== action.payload)
      };
    case "lost":
      return {
        ...state,
        data: state.data.filter(el => !action.payload.includes(el.id)),
        selected: []
      };
    case "click":
      return { ...state, clicks: state.clicks + 1 };
    case "video":
      return { ...state, clicks: 0 };
    default:
      return { ...state };
  }
};

export const Store = props => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    selected: [],
    clicks: 0
  });

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
