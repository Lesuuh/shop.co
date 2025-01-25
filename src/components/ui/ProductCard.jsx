/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  // console.log(item.id);
  return (
    <Link to={`/products/${parseInt(item.id)}`}>
      <div key={item.id} className="border p-2 w-full max-w-[250px]">
        <img src={item.images[0]} alt="" className="rounded-md w-full" />
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{item.title}</h4>
          <div className="flex text-sm items-center">
            <div className="flex items-center text-yellow-300">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="ml-2">{item.rating}/5</p>
          </div>
          <h2 className="font-semibold">{`$${item.price.new.toFixed(2)}`}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
