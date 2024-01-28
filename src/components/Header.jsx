import React from "react";
import sneakersLogo from "../assets/logo.svg";
import iconCart from "../assets/icon-cart.svg";
import imageAvatar from "../assets/image-avatar.png";

export default function Header() {
  return (
    <div className="h-20 py-4 flex justify-between items-center border-b-2 border-gray-200">
      <div className="flex items-center">
        <img
          src={sneakersLogo}
          alt="Sneakers Logo"
          className="w-20 h-4 mr-10"
        />
        <ul className="flex space-x-5 dark-grayish-blue ">
          <li className="text-[0.8rem] border-b-2 border-transparent hover:text-gray-900 hover:border-orange-500 py-7 transition duration-300 cursor-pointer">
            Collections
          </li>
          <li className="text-[0.8rem] border-b-2 border-transparent hover:text-gray-900 hover:border-orange-500 py-7 transition duration-300 cursor-pointer">
            Men
          </li>
          <li className="text-[0.8rem] border-b-2 border-transparent hover:text-gray-900 hover:border-orange-500 py-7 transition duration-300 cursor-pointer">
            Women
          </li>
          <li className="text-[0.8rem] border-b-2 border-transparent hover:text-gray-900 hover:border-orange-500 py-7 transition duration-300 cursor-pointer">
            About
          </li>
          <li className="text-[0.8rem] border-b-2 border-transparent hover:text-gray-900 hover:border-orange-500 py-7 transition duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src={iconCart}
          alt="Cart"
          className="w-[1rem] h-[1rem] mr-5 cursor-pointer"
        />
        <img
          src={imageAvatar}
          alt="Avatar"
          className="w-7 h-7 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
