import React, { createContext, useReducer, useContext } from "react";
import { reducer } from "./reducer";
import { initialState } from "./initialState";

export const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => (
  <GlobalState.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GlobalState.Provider>
);

export const useGlobalState = () => useContext(GlobalState);
