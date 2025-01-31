/* eslint-disable react/prop-types */
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useSearchFilter from "../hooks/useSearchFilter";
import React from "react";

const MainLayout = ({ children, totalQuantity }) => {
  const {
    filteredSearch,
    handleKeyDown,
    handleSearchChange,
    handleSearchSubmit,
  } = useSearchFilter();

  // I'M HAVING A BUG IN LIFTING THE STATE, I'LL IMPLEMENT CONTEXT API
  return (
    <>
      <TopHeader />
      <Header
        totalQuantity={totalQuantity}
        handleKeyDown={handleKeyDown}
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      {React.cloneElement(children, { filteredSearch })}
      <Footer />
    </>
  );
};

export default MainLayout;
