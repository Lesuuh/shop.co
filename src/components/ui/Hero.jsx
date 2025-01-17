import Button from "../Button";
import heroImg from "../../assets/hero-img.png";
import vectorStar from "../../assets/Vector.png";

const Hero = () => {
  return (
    <section className="w-full max-w-[100vw] bg-[#f2f0f1]">
      <h2 className="font-black text-4xl px-4 pt-6 leading-8 ">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h2>
      <p className="px-4 py-3 text-xs leading-4 font-light text-[#3b3b3b]">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <div className="px-4">
        <Button text="Shop now" />
      </div>

      <div className=" px-4 mt-10 flex items-center flex-col">
        <p className="font-semibold text-xl leading-3 text-center flex-1">
          30,000+
        </p>
        <small className="text-xs font-extralight text-center flex-1">
          Happy Customers
        </small>
      </div>

      <div className="relative">
        <img src={heroImg} alt="hero-img" />
        <img src={vectorStar} alt="" className="absolute top-32 left-0 w-10 " />
        <img src={vectorStar} alt="" className="absolute top-5 right-0 w-16" />
      </div>
    </section>
  );
};

export default Hero;
