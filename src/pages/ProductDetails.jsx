/* eslint-disable react/prop-types */
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import { useParams } from "react-router-dom";
import allProducts from "../../database";
import StarRatings from "../components/StarRatings";
import calculateNewPrice from "../components/CalculateNewPrice";
// import ClipLoader from "react-spinners/ClipLoader";

const ProductDetails = ({ cart, setCart, addToCart }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [displayImage, setDisplayImage] = useState(null);
  const [userSelection, setUserSelection] = useState({
    id: id,
    name: "",
    image: null,
    color: null,
    size: null,
    price: null,
    quantity: 1,
  });
  // let [loading, setLoading] = useState(true);
  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };

  useEffect(() => {
    const foundProduct = allProducts.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct && foundProduct.images && foundProduct.images.length > 0) {
      setDisplayImage(foundProduct.images[0]);
    }
    const newPrice = calculateNewPrice(foundProduct);
    setUserSelection((prevState) => ({
      ...prevState,
      name: foundProduct.title,
      image: foundProduct.images[0],
      price: newPrice,
    }));

  }, [id, setCart]);


  const [btnActiveState, setBtnActiveState] = useState("");

  const handleReduceCartQuantity = (quantity) => {
    if (quantity > 1) {
      setUserSelection((prevState) => ({
        ...prevState,
        quantity: quantity - 1,
      }));
    }
  };
  const handleIncreaseCartQuantity = (quantity) => {
    setUserSelection((prevState) => ({ ...prevState, quantity: quantity + 1 }));
  };

  const handleColor = (color) => {
    setUserSelection((prevState) => ({ ...prevState, color }));
  };
  const handleSize = (size) => {
    setUserSelection((prevState) => ({ ...prevState, size }));
    setBtnActiveState(size);
  };

  if (!product) {
    return (
      <p>Product not found</p>
      // <ClipLoader
      //   loading={loading}
      //   cssOverride={override}
      //   size={150}
      //   aria-label="Loading Spinner"
      //   data-testid="loader"
      // />
    );
  }

  return (
    <MainLayout>
      <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20">
        <div className="breadcrumbs">
          <p className="text-sm font-thin">
            Home {">"} Shop {">"} Men {">"}{" "}
            <span className="font-normal">{product.type}</span>
          </p>
        </div>
        <div className="space-y-3 my-3">
          <div>
            <img
              src={`../../images/${displayImage}`}
              alt=""
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <img
              onClick={() => setDisplayImage(product.images[0])}
              src={`../../images/${product.images[0]}`}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
            <img
              onClick={() => setDisplayImage(product.images[1])}
              src={`../../images/${product.images[1]}`}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
            <img
              onClick={() => setDisplayImage(product.images[2])}
              src={`../../images/${product.images[2]}`}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h2 className="font-black text-2xl">
            {product.title.toLocaleUpperCase()}
          </h2>
          <div className="flex items-center space-x-2 my-2">
            <StarRatings ratings={product.rating} />
            <p className="text-xs font-light">{product.rating}/5</p>
          </div>
          <div className="flex items-center my-2">
            <p className="font-bold">${calculateNewPrice(product)}</p>
            <del className="text-black/30 font-bold ml-2">
              ${product.price.old}
            </del>
            <span className="w-auto px-2 py-1 rounded-2xl text-red-500 bg-red-500/10 text-xs font- ml-2">
              -{product.discount}%
            </span>
          </div>
          <div className="border-b border-black/5 pb-5 pt-1">
            <p className="text-xs font-extralight">{product.description}</p>
          </div>
          <div className="my-5 space-y-2 border-b border-black/5 pb-5 ">
            <p className="text-xs font-extralight">Select Colors</p>
            <div className="flex items-center">
              <div
                onClick={() => handleColor("black")}
                className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
              >
                {cart.color === "black" ? (
                  <GoCheck
                    className={`${
                      userSelection.color === "black" ? "text-white" : ""
                    }`}
                  />
                ) : (
                  ""
                )}
              </div>
              <div
                onClick={() => handleColor("gray")}
                className="w-8 h-8 bg-gray-500 rounded-full ml-2 flex items-center justify-center"
              >
                {userSelection.color === "gray" ? <GoCheck /> : ""}
              </div>
              <div
                onClick={() => handleColor("red")}
                className="w-8 h-8 bg-red-500 rounded-full ml-2 flex items-center justify-center"
              >
                {userSelection.color === "red" ? <GoCheck /> : ""}
              </div>
            </div>
          </div>
          {/* buttons */}
          <div className="my-5 space-y-2 border-b border-black/5 pb-5">
            <p className="text-xs font-extralight">Choose Size</p>
            <div className="flex items-center">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSize(size)}
                  className={`border p-2  text-xs font-extralight rounded-2xl px-4 border-none outline-none hover:bg-black hover:text-white ${
                    btnActiveState === size
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-betweeen">
            <div className="flex items-center">
              <button
                onClick={() => handleReduceCartQuantity(userSelection.quantity)}
                className="rounded-l-2xl bg-gray-100 text-xl py-1 px-3"
              >
                -
              </button>
              <span className="bg-gray-100 text-xs py-2.5 px-2 ">
                {userSelection.quantity}
              </span>
              <button
                onClick={() =>
                  handleIncreaseCartQuantity(userSelection.quantity)
                }
                className="rounded-r-2xl bg-gray-100 text-xl py-1 px-3"
              >
                +
              </button>
            </div>
            <button
              onClick={() => addToCart(userSelection)}
              className="flex-1 ml-2 bg-black text-white text-xs rounded-2xl py-2 font-light"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="my-5">
          <h4 className="text-sm border-b border-black/10 pb-2">
            Ratings & Reviews
          </h4>
          <h3 className="font-semibold mt-2">
            All Reviews{" "}
            <span className="font-light text-xs">
              ({product.reviews.length})
            </span>
          </h3>

          <div>
            {product.reviews.map((review) => (
              <div key={review.user} className="border rounded-xl p-4 my-2">
                <StarRatings ratings={review.rating} />
                <h5 className="font-semibold">{review.user}</h5>
                <p className="text-xs font-light text-gray-500 mt-2">
                  {review.comment}
                </p>
                <p className="text-xs font-light text-gray-500 mt-2">
                  Posted on August 15, 2023
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
