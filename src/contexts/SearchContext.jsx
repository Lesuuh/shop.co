/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import useSearchFilter from "../hooks/useSearchFilter";
// import { useNavigate } from "react-router-dom";

// creating the context
const SearchContext = createContext();

// provider component
export const SearchProvider = ({ children }) => {
  const search = useSearchFilter();

  return (
    <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
  );
};

// making the searchContext accessible everywhere
export const useSearchContext = () => useContext(SearchContext);
