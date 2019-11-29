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
    case "loose":
      return {
        ...state,
        data: [],
        selected: []
      };
    default:
      return { ...state };
  }
};

export const Store = props => {
  const [state, dispatch] = useReducer(reducer, { data: [], selected: [] });

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
