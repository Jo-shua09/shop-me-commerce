import React from "react";
import { assets } from "../assets/assets";
import { FaLock } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white">
      <div className="container pt-24 pb-32">
        <div className="grid container md:grid-cols-2 grid-cols-1 h-auto gap-x-10 gap-y-8">
          <div className=" w-full " data-aos="zoom-in" data-aos-delay="100">
            <img src={assets.women2} alt="" className="md:w-[45rem] mx-auto h-[35rem] shadow-[1px_1px_10px rgba(0,0,0,0.5)] object-cover" />
          </div>
          <div className="w-full">
            <h1 data-aos="fade-up" className="sm:text-6xl text-4xl whitespace-nowrap font-bold normal-case pb-7">
              Winter Sale upto 50% Off
            </h1>
            <p data-aos="fade-up" className="text-2xl  text-gray-400 normal-case pb-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex  flex-col gap-y-6">
              <div data-aos="fade-up" className="flex gap-x-8 items-center">
                <div className="rounded-full bg-primary p-7">
                  <FaLock className=" font-bold text-2xl " />
                </div>
                <span className="text-2xl font-light">Quality Products</span>
              </div>
              <div data-aos="fade-up" className="flex gap-x-8 items-center">
                <div className="rounded-full bg-primary p-7">
                  <FaLock className=" font-bold text-2xl " />
                </div>
                <span className="text-2xl font-light"> fast delivery</span>
              </div>
              <div data-aos="fade-up" className="flex gap-x-8 items-center">
                <div className="rounded-full bg-primary p-7">
                  <FaLock className=" font-bold text-2xl " />
                </div>
                <span className="text-2xl font-light">easy payment method</span>
              </div>
              <div data-aos="fade-up" className="flex gap-x-8 items-center">
                <div className="rounded-full bg-primary p-7">
                  <FaLock className=" font-bold text-2xl " />
                </div>
                <span className="text-2xl font-light">get offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
