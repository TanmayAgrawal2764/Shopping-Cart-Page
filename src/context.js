// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
import "./index.css";

const AppContext = React.createContext();

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  loading: false,
  cart: cartItems,
  total: 4,
  amount: 2499,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING" });
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch({ type: "DISPLAY_ITEMS", payload: data });
      } catch (error) {
        dispatch({ type: "DISPLAY_ITEMS", payload: [] });
      }
    };

    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {state.loading ? (
        <span className="loading-spinner">Loading...</span>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// ... (export statements)
