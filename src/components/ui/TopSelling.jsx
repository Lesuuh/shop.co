import ProductCard from "./ProductCard";

import db from "../../../db";

const topSelling = db;

const TopSelling = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 mt-8">
      <h2 className="text-center font-black text-2xl mb-2">TOP SELLINGS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {topSelling.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="border px-3 mt-5 py-1 rounded-lg bg-[#fff] text-xs text-black">
          View all
        </button>
      </div>
    </section>
  );
};

export default TopSelling;
