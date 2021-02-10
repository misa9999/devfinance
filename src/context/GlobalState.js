import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    {
      id: 1,
      description: "Payment",
      amount: 1000,
      date: "23/01/2021",
    },
    {
      id: 2,
      description: "Book",
      amount: -50,
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
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
