import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    {
      id: 1,
      description: "Energy",
      amount: -50000,
      date: "23/01/2021",
    },
    {
      id: 2,
      description: "Website",
      amount: 500000,
      date: "23/01/2021",
    },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  return (
    <GlobalContext.Provider value={{ transactions: state.trasactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
