import React from "react";
import { assets } from "../assets/assets";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="relative z-40 duration-200 bg-white shadow-md dark:bg-gray-900 dark:text-white">
      {/* Uper Navbar */}

      <div className="py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div className="">
            <a href="#">
              <span className="flex items-center font-sans text-4xl font-bold normal-case gap-x-2">
                <img src={assets.logo} alt="Logo" className="w-[3rem]" />
                shopME
              </span>
            </a>
          </div>

          {/*  search section starts */}
          <div className="flex items-center justify-between flex-nowrap gap-x-5">
            <div className="relative">
              <input
                type="text"
                className="pl-4 border border-gray-300 rounded-full text-2xl transition-all duration-300 text-black w-[20rem] h-[3.5rem] hover:w-[24rem] focus:w-[24rem] focus:shadow-xl hidden sm:block "
                placeholder="search..."
              />
              <IoMdSearch color="black" className="absolute sm:size-7 size-11 cursor-pointer -top-5 right-0  sm:right-4 sm:top-[1rem]" />
            </div>

            {/*  order button starts */}
            <button
              onClick={() => alert("order function inavailable for now!!")}
              className="flex items-center px-4 py-2 text-3xl text-white transition-all duration-500 ease-in-out rounded-full bg-gradient-to-r from-primary to-secondary gap-x-2 group"
            >
              <span className="hidden font-medium group-hover:block">Order</span>
              <FaShoppingCart />
            </button>

            {/*  dark mode starts */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className=""></div>
    </div>
  );
};

export default Navbar;
