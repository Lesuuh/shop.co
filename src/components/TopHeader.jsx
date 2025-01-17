// import { Link } from "react-router-dom";

import { useRef } from "react";
import { IoMdClose } from "react-icons/io";

const TopHeader = () => {
  const closeRef = useRef();
  const handleClick = () => {
    closeRef.current.style.display = "none";
  };
  return (
    <p
      ref={closeRef}
      className="px-6 bg-[#222] flex items-center gap-2 justify-center text-[#e7e4e4] text-xs py-1"
    >
      Sign up and get 20% off your first order.
      <a
        href="#"
        className="font-semibold underline underline-offset-2 text-white"
      >
        Sign up now
      </a>
      <button
        onClick={handleClick}
        className="hidden md:inline-block text-white"
      >
        <IoMdClose />
      </button>
    </p>
  );
};

export default TopHeader;
