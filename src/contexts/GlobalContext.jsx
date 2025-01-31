/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const products = useFetch();

  return (
    <GlobalContext.Provider value={products}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
