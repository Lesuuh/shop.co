import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <section className="max-[100vw] px-4 py-2 w-full border flex items-center">
      <div className="flex items-center mr-auto">
        <div className="menu-button">
          <MdMenu size={20} />
        </div>
        <div className="logo font-black text-2xl pl-4">SHOP.CO</div>
      </div>
      <div className="flex items-center space-x-2">
        <CiSearch />
        <IoCartOutline />
        <VscAccount />
      </div>
    </section>
  );
};

export default Header;
