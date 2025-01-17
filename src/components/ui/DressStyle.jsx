import image1 from "../../assets/image 11.png";
import image2 from "../../assets/image 12.png";
import image3 from "../../assets/image 13.png";
import image4 from "../../assets/image 14.png";

const DressStyle = () => {
  return (
    <section className="w-full max-w-[1500px] px-4 mt-10 md:px-10 lg:px-20">
      <div className="bg-[#e8e8e8] px-4 md:px-10 lg:px-20 py-10 rounded-lg">
        <h2 className="font-black text-3xl text-center py-4">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative rounded-lg w-full md:">
            <h3 className="absolute top-4 left-4 text-2xl font-semibold">
              Casual
            </h3>
            <img
              src={image1}
              alt="image"
              className="rounded-lg w-full object-cover h-[250px]"
            />
          </div>
          <div className="relative md:">
            <h3 className="absolute top-4 left-4 text-2xl font-semibold">
              Formal
            </h3>
            <img
              src={image3}
              alt="image"
              className="rounded-lg w-full object-cover h-[250px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 md:flex-row ">
          <div className="relative">
            <h3 className="absolute top-4 left-4 text-2xl font-semibold">
              Party
            </h3>
            <img
              src={image2}
              alt="image"
              className="rounded-lg w-full object-cover h-[250px]"
            />
          </div>
          <div className="relative w-full">
            <h3 className="absolute top-4 left-4 text-2xl font-semibold">
              Gym
            </h3>
            <img
              src={image4}
              alt="image"
              className="rounded-lg w-full object-cover h-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyle;
