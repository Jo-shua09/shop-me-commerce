import React from "react";
import { assets } from "../assets/assets";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" w-full bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url('footer-pattern.jpg')` }}>
        <div className="container pt-24 pb-20 items-center grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full justify-between gap-x-32 gap-y-7 ">
          <div className="flex flex-col gap-y-6">
            <div className=" flex gap-x-3 items-center">
              <img src={assets.logo} alt="" className="w-[5rem]" /> <span>shopME</span>
            </div>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
          </div>
          <div className="flex flex-col gap-y-5">
            <h3 className="">Important Links</h3>
            <div className=" flex flex-col gap-y-7">
              <a href="" className="">
                home
              </a>
              <a href="" className="">
                about
              </a>
              <a href="" className="">
                contact
              </a>
              <a href="" className="">
                blog
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-y-5">
            <h3 className="">Links</h3>
            <div className=" flex flex-col gap-y-7">
              <a href="" className="">
                home
              </a>
              <a href="" className="">
                about
              </a>
              <a href="" className="">
                contact
              </a>
              <a href="" className="">
                blog
              </a>
            </div>
          </div>

          <div className=" flex gap-y-7 flex-col">
            <div className="flex gap-x-5">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedin />
            </div>
            <div className="flex gap-x-5 items-center">
              <FaTelegram /> <p className="">Noida, Uttar Pradesh</p>
            </div>
            <div className="flex gap-x-5 items-center">
              <FaPhone />
              <p>+000 000 000 0000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
