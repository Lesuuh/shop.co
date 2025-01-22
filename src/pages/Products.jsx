import MainLayout from "../layouts/MainLayout";
import db from "../../db";
import ProductCard from "../components/ui/ProductCard";

const products = db;

const Products = () => {
  return (
    <MainLayout>
      <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20">
        <h2 className="text-center font-black text-2xl md:text-3xl">
          All Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;
