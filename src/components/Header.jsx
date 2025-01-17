import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { useState } from "react";
// import { useRef } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

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
          <div className="text-2xl font-black ml-2">SHOP.CO</div>
        </div>

        <ul className="hidden md:flex items-center md:space-x-4">
          <li className="flex items-center font-light text-sm">
            Shop <IoIosArrowDown className="ml-1" />
          </li>
          <li className="font-light text-sm">On Sale</li>
          <li className="font-light text-sm">New Arrivals</li>
          <li className="font-light text-sm">Brands</li>
        </ul>

        <form className="relative hidden md:flex">
          <input
            type="text"
            placeholder="Search your clothes..."
            className="border rounded-lg focus:outline-slate-800 focus:outline-0 py-1.5 w-full md:w-[15rem] lg:w-[20rem] xl:w-[35rem]  min-w-[5rem] pl-7 text-sm"
          />
          <CiSearch className="absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer " />
        </form>

        <div className="flex items-center space-x-3 ">
          <CiSearch className="md:hidden font-semibold " size={20} />
          <IoCartOutline size={20} />
          <VscAccount size={20} />
        </div>

        {/* menu */}
        {menu && (
          <div className="absolute top-0 left-0 bg-white w-[70%] h-[100dvh]  z-10">
            <IoMdClose
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
