import React from "react";
import { HeroData } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 800, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 4000, // Auto-play interval
    cssEase: "ease-inout",
    pauseOnHover: false, // Pause on hover
    pauseOnFocus: false, // Pause on focus
    arrows: false, // Show navigation arrows
  };

  return (
    <div className="relative overflow-hidden flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200  min-h-[550px] sm:min-h-[650px] bg-gray-100">
      {/* background pattern */}
      <div className="h-[70%]  w-[700px] bg-primary/40 -z-9 absolute -top-1/2 right-0 rounded-3xl rotate-45 "></div>

      {/*  hero section */}
      <div className="container z-10 pb-8 sm:pb-0">
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id} className="w-full mt-20 md:mt-0">
              <div className="grid flex-wrap-reverse items-center justify-between grid-cols-1 gap-4 text-center gap-x-10 md:text-left md:grid-cols-2">
                {/* Image content */}
                <div className="flex items-center justify-center order-1 w-full pl-8 mx-auto sm:justify-end md:order-2">
                  <img src={data.img} alt={data.title} className="w-[100%] object-cover h-auto mt-10 rounded-lg sm:mt-0" />
                </div>

                {/* Text content */}
                <div className="order-2 w-full md:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="font-extrabold sm:text-[5.5rem] text-7xl sm:leading-[6rem] sm:pb-10 md:pb-5 pb-2"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                    className="pb-10 mt-4 text-xl font-medium text-gray-500 normal-case dark:text-white sm:text-2xl"
                  >
                    {data.description}
                  </p>
                  <button className="flex items-center px-6 py-4 mx-auto text-3xl text-white transition-all duration-500 ease-in-out rounded-full md:mx-0 bg-gradient-to-r from-primary to-secondary">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
