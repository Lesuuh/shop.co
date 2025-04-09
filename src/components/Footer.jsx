import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FaCcVisa, FaCcPaypal } from "react-icons/fa6";
import Newsletters from "./Newsletters";

const Footer = () => {
  return (
    <section className="w-full max-w-[1500px] mx-auto md:pt-20 relative">
      <Newsletters />
      <div className="bg-[#e8e8e8] py-5 mt-5 md:pt-28 lg:pt-24 px-4 md:px-10 lg:px-20 ">
        <div className="md:flex md:gap-10 ">
          <div className="md:w-[30%]">
            <div>
              <h2 className="font-black text-2xl">SHOP.CO</h2>
              <p className="font-light text-xs">
                We have clothes that suits yor style and which youre proud to
                wear. From women to men
              </p>
            </div>
            <div className="flex space-x-5 items-center my-5">
              <span className="w-8 h-8 border rounded-full border-black/30 flex items-center justify-center group hover:bg-black transition ease-in-out duration-500 cursor-pointer">
                <FaTwitter className="group-hover:text-white" />
              </span>
              <span className="w-8 h-8 border rounded-full border-black/30 flex items-center justify-center group hover:bg-black transition ease-in-out duration-500 cursor-pointer">
                <FaInstagram className="group-hover:text-white" />
              </span>
              <span className="w-8 h-8 border rounded-full border-black/30 flex items-center justify-center group hover:bg-black transition ease-in-out duration-500 cursor-pointer">
                <FaFacebook className="group-hover:text-white" />
              </span>
              <span className="w-8 h-8 border rounded-full border-black/30 flex items-center justify-center group hover:bg-black transition ease-in-out duration-500 cursor-pointer">
                <FaGithub className="group-hover:text-white" />
              </span>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-5  pb-10">
            <div>
              <h4 className="font-normal text-sm">COMPANY</h4>
              <ul className="space-y-2 pt-2">
                <li className="font-light text-xs text-[#333]">About</li>
                <li className="font-light text-xs text-[#333]">Features</li>
                <li className="font-light text-xs text-[#333]">Works</li>
                <li className="font-light text-xs text-[#333]">Career</li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-sm">HELP</h4>
              <ul className="space-y-2 pt-2">
                <li className="font-light text-xs text-[#333]">
                  Customer Support
                </li>
                <li className="font-light text-xs text-[#333]">
                  Delivery Details
                </li>
                <li className="font-light text-xs text-[#333]">
                  Terms & Conditions
                </li>
                <li className="font-light text-xs text-[#333]">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-sm">FAQ</h4>
              <ul className="space-y-2 pt-2">
                <li className="font-light text-xs text-[#333]">Account</li>
                <li className="font-light text-xs text-[#333]">
                  Manage Deliveries
                </li>
                <li className="font-light text-xs text-[#333]">Orders</li>
                <li className="font-light text-xs text-[#333]">Payment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-normal text-sm">RESOURCES</h4>
              <ul className="space-y-2 pt-2">
                <li className="font-light text-xs text-[#333]">Free eBook</li>
                <li className="font-light text-xs text-[#333]">
                  Development Tutorial
                </li>
                <li className="font-light text-xs text-[#333]">How to -Blog</li>
                <li className="font-light text-xs text-[#333]">
                  Youtube Playlist
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-5 text-center justify-center item-center md:flex-row md:justify-between border-t border-[#2828281a]">
          <p className="text-xs my-3 text-center font-light text-[#333]">
            Shop.co 2000-2025. All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-5">
            <FaCcVisa size={30} />
            <FaCcPaypal size={30} />
            <FaCcVisa size={30} />
            <FaCcPaypal size={30} />
            <FaCcVisa size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
