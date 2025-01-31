import { CiSearch } from "react-icons/ci";
import { useSearchContext } from "../contexts/SearchContext";
import { useLocation } from "react-router-dom";
import ProductCard from "../components/ui/ProductCard";
// import { useEffect } from "react";

const SearchPage = () => {
  const {
    filteredProducts,
    searchQuery,
    handleKeyDown,
    handleSearchChange,
    handleSearchSubmit,
  } = useSearchContext();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search).get("q");
  console.log(queryParams);

  return (
    <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20 mx-auto ">
      <form onSubmit={handleSearchSubmit} className="md:hidden">
        <div className="relative">
          <input
            type="text"
            required
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder="Search for your best clothes"
            className="border text-xs font-normal px-2 rounded-xl py-2 w-full"
          />
          <button type="submit">
            <CiSearch className="absolute top-1/2 right-2 -translate-y-[50%] cursor-pointer" />
          </button>
        </div>
      </form>

      <div className="my-10">
        <h2>{`Search result${
          filteredProducts.length === 1 ? "" : "s"
        } for: ${searchQuery}`}</h2>
        {filteredProducts.length === 0 ? (
          <p className="">
            {searchQuery ? "No Products found" : "Type to search a product"}
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 my-5 items-center justify-center place-items-center">
            {filteredProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchPage;
