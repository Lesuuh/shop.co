import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// importing the images
import versace from "../../assets/versace-logo.png";
import zara from "../../assets/zara-logo.png";
import calvin_klein from "../../assets/calvin-klein-logo.png";
import gucci from "../../assets/gucci-logo-1 1.png";
import prada from "../../assets/prada-logo-1 1.png";

const Brands = () => {
  return (
    <section className="bg-black w-full h-auto py-5 px-4 md:px-10 lg:px-20">
      <Splide
        options={{
          perPage: 5,
          breakpoints: {
            640: {
              perPage: 3,
            },
          },
          gap: "1rem",
          type: "loop",
          autoplay: true,
          pauseOnHover: true,
          resetProgress: false,
          speed: 100000,
          interval: 1000,
          pagination: false,
          arrows: false,
        }}
      >
        <SplideSlide>
          <img src={versace} alt="" size={50} className="h-5 w-auto" />
        </SplideSlide>
        <SplideSlide>
          <img src={zara} alt="" size={50} className="h-5 w-auto" />
        </SplideSlide>
        <SplideSlide>
          <img src={calvin_klein} alt="" size={50} className="h-5 w-auto" />
        </SplideSlide>
        <SplideSlide>
          <img src={gucci} alt="" size={50} className="h-5 w-auto" />
        </SplideSlide>
        <SplideSlide>
          <img src={prada} alt="" size={50} className="h-5 w-auto" />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default Brands;
