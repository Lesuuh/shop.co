import Button from "../Button";

const Hero = () => {
  return (
    <section className="w-full max-w-[100vw] px-4 bg-[#f2f0f1]">
      <h2 className="font-black text-4xl pt-6 leading-8 pb-1">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h2>
      <p className=" text-xs leading-4 font-light text-[#3b3b3b]">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <Button text="Shop now" className="" />

      <div className="text-center mt-5">
        <p className="font-semibold text-xl">30,000+</p>
        <small className="text-xs font-extralight">Happy Customers</small>
      </div>
    </section>
  );
};

export default Hero;
