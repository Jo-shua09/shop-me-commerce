import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { BestProduct } from "../assets/assets";

const BestProducts = () => {
  return (
    <div className="pt-10 pb-10 md:pt-20 dark:text-white dark:bg-gray-900 sm:pt-20 gap-y-6">
      <div className="container flex flex-col justify-start">
        <div className="flex flex-col text-left gap-y-1">
          <h3 className="text-xl font-semibold normal-case text-primary">Top Selling Products for you</h3>
          <h1 className="text-6xl font-bold">Best Products</h1>
          <p className="text-xl text-gray-400 normal-case">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>
      </div>

      <div className="w-full grid lg:gap-x-56 md:gap-x-40 md:gap-y-5 gap-y-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 container">
        {BestProduct.map((data) => (
          <div
            className="relative flex flex-col hover:bg-gray-900 p-6 rounded-3xl shadow-lg group cursor-pointer bg-white dark:bg-gray-800 pt-32 mt-56 items-center  text-center gap-x-1 dark:hover:bg-secondary"
            key={data.id}
          >
            <div className="w-full flex justify-center  transition-all duration-400 overflow-hidden">
              <img
                src={data.img}
                alt={data.title}
                className="w-[15rem] group-hover:scale-[1.05] absolute -top-1/2 mx-auto right-0 left-0 bottom-0 h-auto object-cover"
              />
            </div>
            <div className=" ">
              <div className="flex mt-2 text-2xl justify-center text-yellow-500 ">
                {Array.from({ length: data.stars }, (_, index) => (
                  <LiaStarSolid key={index} className="transition-all duration-700 group-hover:rotate-180 mb-3" />
                ))}
              </div>
              <h3 className="text-3xl group-hover:text-white font-semibold pb-3">{data.title}</h3>
              <p className="text-xl normal-case text-gray-400 pb-5 group-hover:text-white">{data.description}</p>
              <button
                className="px-6 py-4 mx-auto text-2xl font-semibold text-white capitalize transition-all duration-500 ease-in-out rounded-lg md:mx-0 bg-gradient-to-r 
              group-hover:text-primary group-hover:from-white  group-hover:to-white   dark:from-primary dark:to-secondary dark:text-white from-primary to-secondary"
              >
                order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
