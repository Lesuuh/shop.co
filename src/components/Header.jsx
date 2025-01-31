/* eslint-disable react/prop-types */
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

// custom hook

import { useSearchContext } from "../contexts/SearchContext";

const Header = ({ totalQuantity }) => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  // context
  const { searchQuery, handleSearchChange, handleSearchSubmit } =
    useSearchContext();

  const handleSearchSubmitLocal = (e) => {
    // e.preventDefault();
    handleSearchSubmit(e);
    navigate("/search");
  };

  const handleKeyDownLocal = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmitLocal(e);
    }
  };

  return (
    // mobile view
    <section className="max-w-[1500px] h-auto mx-auto py-2 w-full border-b">
      <div
        className={`flex justify-between items-center relative px-4 lg:px-20`}
      >
        <div className="flex items-center">
          <MdMenu
            onClick={() => setMenu(true)}
            size={30}
            className="md:hidden"
          />
          <NavLink to="/" end>
            <div className="text-2xl font-black ml-2">SHOP.CO</div>
          </NavLink>
        </div>

        <ul className="hidden md:flex items-center md:space-x-4">
          <NavLink to="/products">
            <li className="flex items-center font-light text-sm">
              Shop <IoIosArrowDown className="ml-1" />
            </li>
          </NavLink>
          <li className="font-light text-sm">On Sale</li>
          <li className="font-light text-sm">New Arrivals</li>
          <li className="font-light text-sm">Brands</li>
        </ul>

        <form
          onSubmit={handleSearchSubmitLocal}
          className="relative hidden md:flex"
        >
          <input
            type="text"
            onChange={handleSearchChange}
            value={searchQuery}
            onKeyDown={handleKeyDownLocal}
            placeholder="Search your clothes..."
            className="border rounded-lg focus:outline-slate-800 focus:outline-0 py-1.5 w-full md:w-[15rem] lg:w-[20rem] xl:w-[35rem]  min-w-[5rem] pl-7 text-sm"
          />
          <button type="submit">
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer " />
          </button>
        </form>

        <div className="flex items-center space-x-3 ">
          <NavLink to="/search">
            <CiSearch className="md:hidden font-semibold " size={20} />
          </NavLink>
          <NavLink to="/cart" className="relative">
            <IoCartOutline size={20} />
            {totalQuantity > 0 && (
              <span className="text-red-500 font-bold absolute -top-2 right-0 text-xs">
                {totalQuantity}
              </span>
            )}
          </NavLink>
          <Link>
            <VscAccount size={20} />
          </Link>
        </div>

        {/* menu */}
        {menu && (
          <div className="absolute top-0 left-0 bg-white w-[70%] h-[100dvh]  z-10">
            <IoMdClose
              size={20}
              onClick={() => setMenu(false)}
              className="float-right mr-4"
            />
            <ul className=" space-y-4 pl-4 pt-3">
              <li className="flex items-center font-light text-sm">
                Shop <IoIosArrowDown className="ml-1" />
              </li>
              <li className="font-light text-sm">On Sale</li>
              <li className="font-light text-sm">New Arrivals</li>
              <li className="font-light text-sm">Brands</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
