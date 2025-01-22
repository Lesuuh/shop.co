import image1 from "../assets/image 7.png";
import image2 from "../assets/image 7-1.png";
import image3 from "../assets/image 8.png";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GoCheck } from "react-icons/go";

const ProductDetails = () => {
  const [displayImage, setDisplayImage] = useState(image1);
  const [selection, setSelection] = useState({
    color: null,
    size: null,
    quantity: "1",
  });

  const handleColor = (color) => {
    setSelection((prevState) => ({ ...prevState, color }));
  };
  const handleSize = (size) => {
    setSelection((prevState) => ({ ...prevState, size }));
  };

  console.log(selection);

  return (
    <MainLayout>
      <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20">
        <div className="breadcrumbs">
          <p className="text-sm font-thin">
            Home {">"} Shop {">"} Men {">"}{" "}
            <span className="font-normal">T-shirt</span>
          </p>
        </div>
        <div className="space-y-3 my-3">
          <div>
            <img src={displayImage} alt="" className="rounded-lg w-full" />
          </div>
          <div className="flex items-center justify-between">
            <img
              onClick={() => setDisplayImage(image1)}
              src={image1}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
            <img
              onClick={() => setDisplayImage(image2)}
              src={image2}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
            <img
              onClick={() => setDisplayImage(image3)}
              src={image3}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h2 className="font-black text-2xl">ONE LIFE GRAPHIC T-SHIRT</h2>
          <div className="flex items-center space-x-2 my-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <p className="text-xs font-light">4.5/5</p>
          </div>
          <div className="flex items-center my-2">
            <p className="font-bold">$260</p>
            <del className="text-black/30 font-bold ml-2">$300</del>
            <span className="w-auto px-2 py-1 rounded-2xl text-red-500 bg-red-500/10 text-xs font- ml-2">
              -40%
            </span>
          </div>
          <div className="border-b border-black/5 pb-5 pt-1">
            <p className="text-xs font-extralight">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
          </div>
          <div className="my-5 space-y-2 border-b border-black/5 pb-5 ">
            <p className="text-xs font-extralight">Select Colors</p>
            <div className="flex items-center">
              <div
                onClick={() => handleColor("black")}
                className="w-8 h-8 bg-black rounded-full"
              >
                <GoCheck />
              </div>
              <div
                onClick={() => handleColor("gray")}
                className="w-8 h-8 bg-gray-500 rounded-full ml-2"
              >
                <GoCheck />
              </div>
              <div
                onClick={() => handleColor("red")}
                className="w-8 h-8 bg-red-500 rounded-full ml-2"
              >
                <GoCheck />
              </div>
            </div>
          </div>
          <div className="my-5 space-y-2 border-b border-black/5 pb-5">
            <p className="text-xs font-extralight">Choose Size</p>
            <div className="flex items-center">
              <button
                onClick={() => handleSize("Small")}
                className="border p-2 bg-gray-100 text-xs font-extralight rounded-2xl px-4 border-none outline-none active:bg-black active:text-white hover:bg-black hover:text-white"
              >
                Small
              </button>
              <button
                onClick={() => handleSize("Medium")}
                className="border p-2 bg-gray-100 text-xs font-extralight rounded-2xl px-4 border-none outline-none active:bg-black active:text-white hover:bg-black hover:text-white ml-2"
              >
                Medium
              </button>
              <button
                onClick={() => handleSize("Large")}
                className="border p-2 bg-gray-100 text-xs font-extralight rounded-2xl px-4 border-none outline-none active:bg-black active:text-white hover:bg-black hover:text-white ml-2"
              >
                Large
              </button>
              <button
                onClick={() => handleSize("X-Large")}
                className="border p-2 bg-gray-100 text-xs font-extralight rounded-2xl px-4 border-none outline-none active:bg-black active:text-white hover:bg-black hover:text-white ml-2"
              >
                X-Large
              </button>
            </div>
          </div>
          <div className="flex items-center justify-betweeen">
            <div className="flex items-center">
              <button className="rounded-l-2xl bg-gray-100 text-xl py-1 px-3">
                -
              </button>
              <span className="bg-gray-100 text-xs py-2.5 px-2 ">1</span>
              <button className="rounded-r-2xl bg-gray-100 text-xl py-1 px-3">
                +
              </button>
            </div>
            <button className="flex-1 ml-2 bg-black text-white text-xs rounded-2xl py-2 font-light">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
