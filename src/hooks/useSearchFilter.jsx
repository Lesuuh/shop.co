import { useState } from "react";
import products from "../../database";

const useSearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSearch, setFilteredSearch] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log(searchQuery);
  //   using the query to filter the products
  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const filteredSearch = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSearch(filteredSearch);
    console.log(filteredSearch);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };
  return {
    filteredSearch,
    handleKeyDown,
    handleSearchChange,
    handleSearchSubmit,
    searchQuery,
  };
};

export default useSearchFilter;
