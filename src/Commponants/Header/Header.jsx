import React from "react";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="h-[54px] w-full bg-[#040000] sm:px-[30px] flex  items-center justify-between">
        <Link to="/" className="flex items-center">
          <IoCall size={20} className="text-[#FF8A1D]" />
          <div className="text-[#ffffff] sm:text-[16px] text-[12px]">
            Call : +01 123455678990
          </div>
        </Link>
        <Link to="/" className="flex items-center">
          <IoIosMail size={23} className="text-[#FF8A1D]" />
          <div className="text-[#ffffff] sm:text-[16px] text-[12px]">
            Email : mail@domain.com
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
