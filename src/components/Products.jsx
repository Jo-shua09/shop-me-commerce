import React from "react";
import { ProductData } from "../assets/assets";
import { LiaStarSolid } from "react-icons/lia";

const Products = () => {
  return (
    <div className="pt-16 pb-10 dark:text-white dark:bg-gray-900 sm:pt-20 gap-y-6">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center gap-y-1">
          <h3 data-aos="fade-up" data-aos-once="true" className="text-xl font-semibold normal-case text-primary">
            Top Selling Products for you
          </h3>
          <h1 data-aos="fade-up" data-aos-once="true" className="text-6xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" data-aos-once="true" className="text-xl text-gray-400 normal-case">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>

        <div className="container grid items-center grid-cols-1 mt-10 gap-x-5 gap-y-10 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3">
          {ProductData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="flex flex-col items-center p-4 pb-8 duration-300 border rounded-lg shadow-sm cursor-pointer dark:border-none dark:shadow-2xl group hover:shadow-2xl"
            >
              <div className="overflow-hidden transition-all duration-200 ">
                <img
                  src={data.img}
                  alt={data.title}
                  className="object-cover group-hover:scale-[1.1] w-[30rem] overflow-hidden rounded-lg h-[26rem]"
                />
              </div>
              <h3 className="pb-3 text-3xl font-semibold mt-7">{data.title}</h3>
              <h5 className="pb-3 text-2xl text-gray-500">{data.color}</h5>
              <div className="flex mt-2 text-2xl text-yellow-500">
                {Array.from({ length: data.stars }, (_, index) => (
                  <LiaStarSolid key={index} className="transition-all duration-700 group-hover:rotate-180" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className=" flex items-center px-6 py-4 mx-auto text-2xl font-bold text-white capitalize transition-all duration-500 ease-in-out rounded-lg mt-20 md:mx-0 bg-gradient-to-r from-primary to-secondary">
          view all
        </button>
      </div>
    </div>
  );
};

export default Products;
