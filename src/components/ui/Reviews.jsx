import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";

import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import StarRatings from "../StarRatings";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    starRatings: 5,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 2,
    name: "Mary J.",
    starRatings: 3.5,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 3,
    name: "Xnight UK.",
    starRatings: 4,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 4,
    name: "Lesuuh UK.",
    starRatings: 2.5,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 5,
    name: "John D.",
    starRatings: 4.5,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 6,
    name: "Jane S.",
    starRatings: 4,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
];

const Reviews = () => {
  const splideRef = useRef();
  return (
    <section className="w-full max-w-[1500px] mx-auto px-4 md:px-10 lg:px-20 my-10 ">
      <h2 className="text-3xl md:text-3xl font-black">OUR HAPPY CUSTOMERS</h2>
      <div className="py-5 relative">
        <div className="flex items-center justify-end pb-2">
          <IoIosArrowRoundBack
            className="cursor-pointer"
            size={30}
            onClick={() => splideRef.current.go("<")}
          />
          <IoIosArrowRoundForward
            className="cursor-pointer"
            size={30}
            onClick={() => splideRef.current.go(">")}
          />
        </div>
        <Splide
          ref={splideRef}
          options={{
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
              1000: {
                perPage: 2,
              },
            },
            gap: "1rem",
            type: "loop",
            autoplay: true,
            pauseOnHover: true,
            resetProgress: false,
            speed: 1000,
            interval: 3000,
            pagination: false,
            arrows: false,
          }}
        >
          {reviews.map((item) => (
            <SplideSlide key={item.id}>
              <div className="h-auto space-y-3 border p-3 rounded-lg">
                <div className="flex items-center">
                  <StarRatings ratings={item.starRatings} />
                </div>
                <div className="flex items-center">
                  <h3 className="font-semibold">{item.name}</h3>
                  <IoIosCheckmarkCircleOutline
                    size={20}
                    className="text-green-500 ml-2"
                  />
                </div>
                <p className="font-light text-xs leading-4">{`"${item.reviews}"`}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Reviews;
