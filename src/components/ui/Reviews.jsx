import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    starRatings: 4,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 2,
    name: "Mary J.",
    starRatings: 4,
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
    starRatings: 4,
    reviews:
      "Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus.",
  },
  {
    id: 5,
    name: "John D.",
    starRatings: 4,
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
  return (
    <section className="w-full px-4 my-10 ">
      <h2 className="text-3xl md:text-4xl font-black">OUR HAPPY CUSTOMERS</h2>
      <div className="py-5 relative">
        <Splide
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
            arrows: true,
          }}
        >
          {/* <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">Prev</button>
            <button className="splide__arrow splide__arrow--next">Next</button>
          </div> */}
          {reviews.map((item) => (
            <SplideSlide key={item.id}>
              <div className="h-auto space-y-3 border p-3 rounded-lg">
                <div className="flex items-center">
                  <FaStar /> <FaStar /> <FaStar />
                </div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>{`"${item.reviews}"`}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Reviews;
