import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "../assets/assets";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrow: "false",
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-16 pb-10 dark:text-white dark:bg-gray-900 sm:pt-20 gap-y-6">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center gap-y-1">
          <h3 data-aos="fade-up" data-aos-once="true" className="text-xl font-semibold normal-case text-primary">
            What our customers are saying
          </h3>
          <h1 data-aos="fade-up" data-aos-once="true" className="text-6xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" data-aos-once="true" className="text-xl text-gray-400 normal-case">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>
      </div>

      <div className=" container mt-16 sm:mt-20 mb-20 w-full">
        <Slider {...settings}>
          {Testimonial.map((data) => (
            <div data-aos="fade-right" data-aos-once="true" key={data.id} className="p-6 overflow-hidden">
              <div className="flex flex-col pt-10 pb-10 dark:bg-gray-800 gap-y-5 shadow-[1px_1px_10px_rgba(0,0,0,0.5)] items-start bg-primary/10 p-10 rounded-2xl w-full h-full">
                <img src={data.img} alt="" className="w-28 h-28 rounded-full object-cover" />
                <p className="text-xl text-gray-600 pt-10 pb-5">{data.text}</p>
                <h3 className="text-3xl font-bold">{data.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
