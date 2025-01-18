import { FaFacebook } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="w-full -z-40  md:pt-20 bg-[#e8e8e8] py-5 mt-10 space-y-5 px-4 md:px-10 lg:px-20">
      <div className="md:flex md:gap-10">
        <div className="md:w-[30%]">
          <div>
            <h2 className="font-black text-2xl">SHOP.CO</h2>
            <p className="font-light text-xs">
              We have clothes that suits yor style and which youre proud to
              wear. From women to men
            </p>
          </div>
          <div className="flex space-x-5">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaFacebook />
            </span>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-5 border-b border-[#2828281a] pb-10">
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
              <li className="font-light text-xs text-[#333]">Privacy Policy</li>
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
      <div className="flex flex-col text-center justify-center item-center md:flex-row md:justify-between ">
        <p className="text-xs text-center font-light text-[#333]">
          Shop.co 2000-2025. All Rights Reserved
        </p>
        <div className="flex items-center gap-5">
          <FaCcVisa />
          <FaCcVisa />
          <FaCcVisa />
          <FaCcVisa />
          <FaCcVisa />
        </div>
      </div>
    </section>
  );
};

export default Footer;
