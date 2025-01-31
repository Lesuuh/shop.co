import { useState } from "react";
import products from "../../database";

const useSearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //   using the query to filter the products
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredSearch = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filteredSearch);
  };

  // on pressing enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit(e);
    }
  };

  return {
    filteredProducts,
    handleKeyDown,
    handleSearchChange,
    handleSearchSubmit,
    searchQuery,
  };
};

export default useSearchFilter;
