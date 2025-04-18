/* eslint-disable react/prop-types */
import { RiDeleteBinFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiTag } from "react-icons/fi";
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  const {
    cart,
    deleteFromCart,
    subPrice,
    handlePrice,
    handleCartQuantityDecrement,
    handleCartQuantityIncrement,
    handlePromoChangeEvent,
    handlePromoButton,
    goToCheckout,
    discountPercentage,
    isPromoApplied,
    discountedPrice,
    deliveryFee,
    total,
  } = useCartContext();

  return (
    <section className="w-full my-5 max-w-[1500px] mx-auto px-4 md:px-10 lg:px-20">
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
      <div className=" w-full md:flex items-start gap-4">
        <div className="w-full space-x-10">
          {cart.length === 0 ? (
            <div className="text-sm  font-light text-center flex flex-col items-center justify-center space-y-3 py-10">
              <IoMdCart size={60} />
              <p className="font-semibold text-xl">Your cart is empty</p>
              <p className="font-normal">
                Please browse our{" "}
                <Link to="/products" className="font-semibold underline">
                  products
                </Link>{" "}
                and discover our best deals
              </p>
            </div>
          ) : (
            <div className="border p-3 rounded-xl mb-10 md:mb-0">
              {/* CART ITEMS */}
              {cart.map((cartItem) => (
                <div
                  key={cartItem.cartId}
                  className="flex w-full space-x-3 py-3 border-b "
                >
                  <img
                    src={`../../images/${cartItem.image}`}
                    alt=""
                    className=" min-w-[100px] w-[100px] sm:w-[150px] rounded-xl"
                  />
                  <div className="w-full relative  flex flex-col items-start justify-between">
                    <div className="flex flex-col">
                      <Link to={`/products/${cartItem.id}`}>
                        <h3 className="text-sm sm:text-lg font-semibold">
                          {cartItem.name}
                        </h3>
                      </Link>

                      <p className="text-xs font-light">
                        Size:{" "}
                        <span className="font-extralight">{cartItem.size}</span>
                      </p>
                      <p className="text-xs font-light">
                        Color:{" "}
                        <span className="font-extralight">
                          {cartItem.color}
                        </span>
                      </p>
                      <p className="text-xs font-light">
                        Quantity:{" "}
                        <span className="font-extralight">
                          {cartItem.quantity}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-between w-full">
                      <h3 className="font-semibold">
                        ${handlePrice(cartItem.price, cartItem.quantity)}
                      </h3>
                      <div className="flex items-center ml-auto">
                        <button
                          onClick={() => handleCartQuantityDecrement(cartItem)}
                          className="rounded-l-2xl bg-gray-100 text-xl px-3 md:px-4 md:py-1"
                        >
                          -
                        </button>
                        <span className="bg-gray-100 text-xs py-1.5 px-2  md:px-4 md:py-2.5">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleCartQuantityIncrement(cartItem.cartId)
                          }
                          className="rounded-r-2xl bg-gray-100 text-xl  px-3 md:px-4 md:py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <RiDeleteBinFill
                      onClick={() => deleteFromCart(cartItem)}
                      className="absolute top-0 right-0 text-red-500 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ORDER SUMMARY */}
        <div className="border rounded-lg p-4 w-full md:w-[50%]">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="border-b pb-2">
            <div className="flex items-center justify-between space-y-3">
              <p className="text-sm font-extralight">Subtotal</p>
              <p className="font-semibold">${subPrice.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-between space-y-3">
              <p className="text-sm font-extralight">
                Discount (-{discountPercentage}%)
              </p>
              <p className="font-semibold text-red-500">
                -${discountedPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center justify-between space-y-3">
              <p className="text-sm font-extralight">Delivery Fee</p>
              <p className="font-semibold">${deliveryFee.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-sm font-extralight">Total</p>
            <p className="font-semibold">${total.toFixed(2)}</p>
          </div>
          <div className="space-y-4 mt-3">
            <form>
              <div className="flex gap-4 justify-between">
                <div className="relative w-full">
                  <input
                    onChange={handlePromoChangeEvent}
                    type="text"
                    placeholder="Add Promo code"
                    disabled={isPromoApplied}
                    className="w-[100%] min-w-5 text-xs font-extralight bg-gray-100 py-3 rounded-3xl pl-8 pr-5 text-gray-600"
                  />
                  <FiTag
                    className="text-gray-500 absolute top-1/2 left-3 transform -translate-y-[50%]"
                    size={15}
                  />
                </div>
                <button
                  onClick={handlePromoButton}
                  disabled={isPromoApplied}
                  className={` bg-black text-xs text-white rounded-3xl px-6 py-3 transition ${
                    isPromoApplied && "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isPromoApplied ? "Applied" : "Apply"}
                </button>
              </div>
            </form>
            <button
              onClick={() => goToCheckout()}
              className="w-full cursor-pointer bg-black text-white text-xs font-light rounded-3xl py-3"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
