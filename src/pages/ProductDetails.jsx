import image1 from "../assets/image 7.png";
import image2 from "../assets/image 7-1.png";
import image3 from "../assets/image 8.png";
import MainLayout from "../layouts/MainLayout";
import { useState } from "react";

const ProductDetails = () => {
  const [displayImage, setDisplayImage] = useState(image1);

  return (
    <MainLayout>
      <section className="w-full my-5 max-w-[1500px] px-4 md:px-10 lg:px-20">
        <div className="breadcrumbs">
          <p className="text-sm font-thin">
            Home {">"} Shop {">"} Men {">"}{" "}
            <span className="font-normal">T-shirt</span>
          </p>
        </div>
        <div className="space-y-3 my-3">
          <div>
            <img src={displayImage} alt="" className="rounded-lg w-full" />
          </div>
          <div className="flex items-center justify-between">
            <img
              onClick={() => setDisplayImage(image1)}
              src={image1}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
            <img
              onClick={() => setDisplayImage(image2)}
              src={image2}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
            <img
              onClick={() => setDisplayImage(image3)}
              src={image3}
              alt=""
              className="rounded-lg w-24 h-24 cursor-pointer"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProductDetails;
