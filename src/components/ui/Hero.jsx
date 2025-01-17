// import Button from "../Button";
import heroImg from "../../assets/hero-img.png";
import vectorStar from "../../assets/Vector.png";

const Hero = () => {
  return (
    <section className="w-full max-w-[100vw] bg-[#f2f0f1]">
      <div className="md:flex items-center px-4 md:px-10 lg:px-20 justify-between">
        <div className="w-full lg:md:w-[600px]">
          <h2 className="font-black text-4xl pt-6 leading-8 md:text-5xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className=" py-3 text-xs leading-4 font-light text-[#3b3b3b] md:w-[500px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="">
            <button className="bg-[#111] w-full md:w-[150px] rounded-3xl text-xs  text-white py-2 my-2 md:py-3 md:px-2">
              Shop Now
            </button>
          </div>

          <div className="mt-10 flex items-center justify-center md:justify-start w-full space-x-5">
            <div className="hidden md:flex border-r px-5 flex-col -space-y-1">
              <p className="font-semibold text-xl md:text-2xl leading-3 text-center flex-1">
                200+
              </p>
              <small className="text-xs font-extralight text-center flex-1">
                International Brands
              </small>
            </div>
            <div className="hidden md:flex border-r px-5 flex-col -space-y-1">
              <p className="font-semibold text-xl md:text-2xl leading-none text-center flex-1">
                2000+
              </p>
              <small className="text-xs font-extralight text-center flex-1">
                High Quality Products
              </small>
            </div>
            <div className="px-5 flex flex-col md:-space-y-1">
              <p className="font-semibold text-xl md:text-2xl leading-3 text-center flex-1">
                30,000+
              </p>
              <small className="text-xs font-extralight text-center flex-1">
                Happy Customers
              </small>
            </div>
          </div>
        </div>

        <div className="relative ">
          <img src={heroImg} alt="hero-img" className="w-full" />
          <img
            src={vectorStar}
            alt=""
            className="absolute top-32 left-0 w-10 "
          />
          <img
            src={vectorStar}
            alt=""
            className="absolute top-5 right-0 w-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
