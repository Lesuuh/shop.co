
import image1 from "../../assets/image 7.png";
import image2 from "../../assets/image 7-1.png";
import image3 from "../../assets/image 8.png";
import image4 from "../../assets/image 8-1.png";
import image5 from "../../assets/image 8-2.png";
import image6 from "../../assets/image 9.png";
import ProductCard from "./ProductCard";

const newArrivals = [
  {
    id: 1,
    title: "T-shirt with Tape Design",
    image: image1,
    price: "120",
    star: "4",
  },
  {
    id: 2,
    title: "T-shirt with Tape Design",
    image: image2,
    price: "150",
    star: "5",
  },

  {
    id: 3,
    title: "T-shirt with Tape Design",
    image: image3,
    price: "120",
    star: "4",
  },
  {
    id: 4,
    title: "T-shirt with Tape Design",
    image: image4,
    price: "120",
    star: "4",
  },
  {
    id: 5,
    title: "T-shirt with Tape Design",
    image: image5,
    price: "120",
    star: "4",
  },
  {
    id: 6,
    title: "T-shirt with Tape Design",
    image: image6,
    price: "120",
    star: "4",
  },
];

const NewArrivals = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto px-4 md:px-10 lg:px-20 mt-8">
      <h2 className="text-center font-black text-2xl mb-2">NEW ARRIVALS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-4">
        {newArrivals.map((item) => (
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

export default NewArrivals;
