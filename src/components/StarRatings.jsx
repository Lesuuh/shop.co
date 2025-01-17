import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";

const StarRatings = ({ ratings }) => {
  let stars = [];
  let maxStars = 5;

  for (let i = 0; i < maxStars; i++) {
    if (ratings >= i + 1) {
      stars.push(<FaStar key={i} size={20} className="text-yellow-500" />);
    } else if (ratings >= i + 0.5) {
      stars.push(
        <FaStarHalfAlt key={i} size={20} className="text-yellow-500" />
      );
    } else {
      stars.push(<HiOutlineStar key={i} size={20} className="" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default StarRatings;
