/* eslint-disable react/prop-types */
import { RiDeleteBinFill } from "react-icons/ri";
import MainLayout from "../layouts/MainLayout";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <MainLayout>
      <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20">
        <div className="breadcrumbs">
          <p className="text-sm font-thin ">
            <Link
              to="/"
              className="hover:text-black hover:font-normal hover:underline mr-1"
            >
              Home
            </Link>
            {">"} <span className="font-normal"> Cart</span>
          </p>
        </div>
        <h2 className="font-semibold text-2xl py-3">Your Cart</h2>
        {cart.length === 0 ? (
          <div className="text-sm font-light text-center flex flex-col items-center justify-center space-y-3 py-10">
            <IoMdCart size={60} className="" />
            <p className="font-semibold text-xl">Your cart is empty</p>
            <p className="font-normal">
              Please browse our products and discover our best deals
            </p>
          </div>
        ) : (
          <div className="border p-3 rounded-xl my-3">
            {cart.map((cartItem) => (
              <div
                key={cartItem.id}
                className="relative border-b pb-5 mb-5 flex w-full space-x-3"
              >
                <div className="img">
                  <img
                    src="../../images/image 10-1.png"
                    alt=""
                    className="w-[100px] rounded-xl"
                  />
                </div>
                <div className="w-full flex flex-col items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold">Checkered Shirt</h3>
                    <p className="text-xs font-light">
                      Size:{" "}
                      <span className="font-extralight">{cartItem.size}</span>
                    </p>
                    <p className="text-xs font-light">
                      Color:{" "}
                      <span className="font-extralight">{cartItem.color}</span>
                    </p>
                  </div>
                  <div className="flex justify-between w-full">
                    <h3 className="font-semibold">$145</h3>
                    <div className="flex items-center ml-auto">
                      <button className="rounded-l-2xl bg-gray-100 text-xl px-3">
                        -
                      </button>
                      <span className="bg-gray-100 text-xs py-1.5 px-2 ">
                        {cartItem.quantity}
                      </span>
                      <button className="rounded-r-2xl bg-gray-100 text-xl  px-3">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <RiDeleteBinFill className="absolute top-0 right-0 text-red-500" />
              </div>
            ))}
          </div>
        )}
      </section>
    </MainLayout>
  );
};

export default Cart;
