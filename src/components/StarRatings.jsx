/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const StarRatings = ({ ratings, size }) => {
  let stars = [];
  let maxStars = 5;

  for (let i = 0; i < maxStars; i++) {
    if (ratings >= i + 1) {
      stars.push(<FaStar key={i} size={size} className="text-yellow-500" />);
    } else if (ratings >= i + 0.5) {
      stars.push(
        <FaStarHalfAlt key={i} size={size} className="text-yellow-500" />
      );
    } else {
      stars.push(<CiStar key={i} size={size} className="" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default StarRatings;
