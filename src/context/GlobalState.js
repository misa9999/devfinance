import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const Storage = {
  get() {
    const localData = localStorage.getItem('dev.finances:transactions');
    return localData ? JSON.parse(localData) : [];
  },
};

// Initial State
const initialState = {
  transactions: Storage.get(),
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem(
      'dev.finances:transactions',
      JSON.stringify(state.transactions)
    );
  }, [state]);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
