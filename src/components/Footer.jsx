import React from "react";
import { assets } from "../assets/assets";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className=" w-full bg-cover h-full bg-center bg-no-repeat" style={{ backgroundImage: `url('footer-pattern.jpg')` }}>
        <div className="container pb-96">
          <div className="">
            <img src={assets.logo} alt="" />
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
          </div>
          <div className="">
            <h3 className="">Important Links</h3>
            <div className="">
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

          <div className="">
            <h3 className="">Links</h3>
            <div className="">
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

          <div className="">
            <div className="">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedin />
            </div>
            <div className="">
              <FaTelegram /> <p className="">Noida, Uttar Pradesh</p>
            </div>
            <div className="">
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
