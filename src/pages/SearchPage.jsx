import { CiSearch } from "react-icons/ci";
import products from "../../database";
import ProductCard from "../components/ui/ProductCard";
import useSearchFilter from "../hooks/useSearchFilter";
console.log(products.title);

const SearchPage = () => {
  const {
    filteredSearch,
    handleKeyDown,
    handleSearchChange,
    handleSearchSubmit,
    searchQuery,
  } = useSearchFilter();

  return (
    <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20 mx-auto ">
      <form onSubmit={handleSearchSubmit}>
        <div className="relative">
          <input
            type="text"
            required
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
      {filteredSearch.length === 0 ? (
        <p className="text-center my-5 mt-5">
          {searchQuery ? "No Products found" : "Type to search a product"}
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 my-5 items-center justify-center place-items-center">
          {filteredSearch.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchPage;
