import React from "react";
import { assets } from "../assets/assets";
import { FaFacebook, FaInstagram, FaLinkedin, FaPersonBooth, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" w-full bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url('footer-pattern.jpg')` }}>
        <div className="container pt-24 items-start grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-white grid-cols-1 pb-64 w-full justify-between gap-x-32 gap-y-20 ">
          <div className="flex flex-col gap-y-6">
            <div className=" flex gap-x-3 items-center">
              <img src={assets.logo} alt="" className="w-[5rem]" /> <span className="text-4xl font-semibold">shopME</span>
            </div>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
          </div>
          <div className="flex flex-col gap-y-7">
            <h3 className="text-4xl font-semibold">Important Links</h3>
            <div className=" flex flex-col gap-y-7">
              <a href="" className="text-2xl">
                home
              </a>
              <a href="" className="text-2xl">
                about
              </a>
              <a href="" className="text-2xl">
                contact
              </a>
              <a href="" className="text-2xl">
                blog
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-y-7">
            <h3 className="text-4xl font-semibold">Links</h3>
            <div className=" flex flex-col gap-y-7">
              <a href="" className="text-2xl hover:text-primary">
                home
              </a>
              <a href="" className="text-2xl hover:text-primary">
                about
              </a>
              <a href="" className="text-2xl hover:text-primary">
                contact
              </a>
              <a href="" className="text-2xl hover:text-primary">
                blog
              </a>
            </div>
          </div>

          <div className=" flex gap-y-10 flex-col">
            <div className="flex gap-x-5">
              <FaInstagram className="text-5xl" />
              <FaFacebook className="text-5xl" />
              <FaLinkedin className="text-5xl" />
            </div>
            <div className="flex gap-x-5 items-center">
              <FaTelegram className="text-3xl" /> <p className="text-3xl font-normal">Noida, Uttar Pradesh</p>
            </div>
            <div className="flex gap-x-5 items-center">
              <FaPersonBooth className="text-3xl" />
              <p className="text-3xl font-normal">cloned by Tuma.Dev</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
