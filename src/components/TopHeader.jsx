// import { Link } from "react-router-dom";

import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const TopHeader = () => {
  const closeRef = useRef();
  const handleClick = () => {
    closeRef.current.style.display = "none";
  };
  return (
    <div
      ref={closeRef}
      className="bg-black text-white text-center relative py-1  w-full "
    >
      <div className="w-full flex items-center justify-center gap-3">
        <p className="text-center">Sign up and get 20% off your first order.</p>
        <a
          href="#"
          className="font-semibold underline underline-offset-2 text-white"
        >
          Sign up now
        </a>
      </div>
      <button
        onClick={handleClick}
        className="hidden md:inline-block text-white  absolute top-1/2 right-32 transfrom -translate-y-[50%]"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default TopHeader;
