/* eslint-disable react/prop-types */
// import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRatings from "../StarRatings";
import calculateNewPrice from "../CalculateNewPrice";

const ProductCard = ({ item }) => {
  // console.log(item.id);
  return (
    <Link to={`/products/${parseInt(item.id)}`}>
      <div key={item.id} className="border p-2 w-full max-w-[250px]">
        <img
          src={`../../../images/${item.images[0]}`}
          alt={item.title}
          className="rounded-md w-full"
        />
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{item.title}</h4>
          <div className="flex text-sm items-center">
            <StarRatings ratings={item.rating} size={15} />
            <p className="ml-2">{`(${item.reviews.length})`}</p>
          </div>
          <h2 className="font-semibold">{`$${calculateNewPrice(item)}`}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
