import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="mt-[220px] bg-[#0a0f43]">
        <div>
          <h4 className="text-[24px] text-[#ffffff]  font-semibold py-[50px] text-center">
            GET IN TOUCH
          </h4>
        </div>
        <div className="flex items-center justify-evenly flex-wrap pb-[50px]">
          <div className="w-[265px] h-[201px]">
            <div className="w-[80px] h-[80px] rounded-full mx-[95px] mb-[40px] bg-[#0355cc] text-[#ffffff] flex items-center justify-center">
              <FaLocationDot size={30} />
            </div>
            <p className="text-[16px] text-[#ffffff] text-center">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="w-[265px] h-[201px]">
            <div className="w-[80px] h-[80px] rounded-full mx-[95px] mb-[40px] bg-[#0355cc] text-[#ffffff] flex items-center justify-center">
              <FaPhoneAlt size={30} />
            </div>
            <p className="text-[16px] text-[#ffffff] text-center">
              +02 1234567890
            </p>
          </div>
          <div className="w-[265px] h-[201px]">
            <div className="w-[80px] h-[80px] rounded-full mx-[95px] mb-[40px] bg-[#0355cc] text-[#ffffff] flex items-center justify-center">
              <IoMdMail size={30} />
            </div>
            <p className="text-[16px] text-[#ffffff] text-center">
              mail@domain.com
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-[24px] text-[#ffffff] font-semibold text-center pb-[50px]">
            FOLLOW US
          </h4>
        </div>
        <div className="flex items-center justify-center pb-[100px]">
          <div className="w-[137px] h-[34px] bg-[#ffffff] flex items-center justify-evenly text-[#0355cc]">
            <a href="/inance">
              <FaFacebookF />
            </a>
            <a href="/inance">
              <FaTwitter />
            </a>
            <a href="/inance">
              <TfiYoutube />
            </a>
            <a href="/inance">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-[83%] border-t border-t-[#ffffff]">
            <p className="text-[16px] py-[30px] text-[#ffffff] text-center">
              © 2024 All Rights Reserved. By HTML Design
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
