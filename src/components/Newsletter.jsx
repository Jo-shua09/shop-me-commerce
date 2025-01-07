import React from "react";

const Newsletter = () => {
  return (
    <div className="">
      <div className=" w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('orange-pattern.jpg')` }}>
        <div className=" mx-auto p-16 flex flex-col justify-center backdrop-blur-sm items-center gap-y-6 w-full">
          <p data-aos="fade-up" className="sm:text-6xl text-4xl whitespace-nowrap text-white font-semibold">
            Get Notified About New Products
          </p>
          <div data-aos="fade-up" className="w-full">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="dark:bg-gray-800 mx-auto flex dark:text-white pl-3 sm:w-1/2 w-full h-20 text-2xl text-gray-700 rounded-md normal-case focus:border focus:border-gray-700 dark:focus:border-white "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
