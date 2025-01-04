import React from "react";
import { DropDown, Menu, assets } from "../assets/assets";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="relative z-[99999] duration-200 bg-white shadow-md dark:bg-gray-900 sm:mb-20 mb-0 dark:text-white">
      {/* Upper Navbar */}
      <div className="py-4 sm:py-2 bg-primary/40">
        <div className="container flex items-center justify-between">
          <div className="">
            <a href="#">
              <span className="flex items-center font-sans text-6xl font-bold normal-case sm:text-4xl gap-x-2">
                <img src={assets.logo} alt="Logo" className="w-[3rem]" />
                shopME
              </span>
            </a>
          </div>

          {/*  search section starts */}
          <div className="flex items-center justify-between flex-nowrap gap-x-5">
            <div className="relative hidden group sm:block">
              <input
                type="text"
                className="pl-4 border border-gray-300 rounded-full text-2xl transition-all duration-300 text-black w-[20rem] h-[3.5rem] hover:w-[24rem] focus:w-[24rem] focus:shadow-xl dark:bg-gray-900 dark:text-white "
                placeholder="search..."
              />
              <IoMdSearch className="absolute text-gray-900 transform -translate-y-1/2 cursor-pointer group-hover:text-primary dark:text-white size-8 right-4 top-1/2" />
            </div>

            {/*  order button starts */}
            <button
              onClick={() => alert("Order function unavailable for now!!")}
              className="flex items-center px-4 py-2 text-3xl text-white transition-all duration-500 ease-in-out rounded-full bg-gradient-to-r from-primary to-secondary gap-x-2 group"
            >
              <span className="hidden font-medium group-hover:block">Order</span>
              <FaShoppingCart className="text-5xl sm:text-3xl " />
            </button>

            {/*  dark mode starts */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="absolute left-0 right-0 z-[9999] hidden  items-center justify-center  w-full gap-12 py-4 mx-auto shadow-md dark:bg-gray-900 top-18 sm:flex">
        {Menu.map((menu) => (
          <div key={menu.id}>
            <ul>
              <li className="flex list-none">
                <a href={menu.link} className="text-2xl font-semibold duration-200 hover:text-primary">
                  {menu.name}
                </a>
              </li>
            </ul>
          </div>
        ))}

        {/* Drop down menu */}
        <li className="relative z-[999] list-none group">
          <a href="#" className="flex items-center gap-1 py-2 text-2xl font-semibold transition-all duration-200 ">
            trending products
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>

          <div className="w-full text-black hidden group-hover:block absolute  z-[9999]  py-3 bg-white dark:bg-gray-900 dark:text-white  rounded-md shadow-lg">
            <ul className="">
              {DropDown.map((drop) => (
                <li key={drop.id} className="px-2 list-none ">
                  <a href={drop.link} className="inline-block w-full px-4 py-3 text-xl font-semibold rounded-lg hover:bg-primary/20 ">
                    {drop.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
