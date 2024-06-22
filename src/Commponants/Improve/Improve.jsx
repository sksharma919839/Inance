import React from "react";
import "../../App.css";
import { GiAutoRepair } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { ImHome3 } from "react-icons/im";

function Improve() {
  return (
    <>
      <div className="flex items-center justify-evenly mt-[-122px] flex-wrap mb-[80px] sm:mx-[100px] mx-0">
        <div className="w-[290px] h-[224px] lg:mx-0 mx-[15px] lg:mt-0 mt-[30px] py-[45px] improve-1">
          <div className="flex items-center justify-center">
            <GiAutoRepair className="h-[90px] w-[90px] text-[#555089]" />
          </div>
          <h5 className="text-[20px] mt-[15px] text-[#555089] text-center">
            REPAIR
          </h5>
        </div>
        <div className="w-[290px] h-[224px] py-[45px] lg:mx-0 mx-[15px] lg:mt-0 mt-[30px] bg-[#ff8a1d]">
          <div className="flex items-center justify-center">
            <ImHome3 className="h-[90px] w-[90px] text-[#ffffff]" />
          </div>
          <h5 className="text-[20px] mt-[15px] text-[#ffffff] text-center">
            IMPROVE
          </h5>
        </div>
        <div className="w-[290px] h-[224px] py-[45px] lg:mx-0 mx-[15px] lg:mt-0 mt-[30px] improve-1">
          <div className="flex items-center justify-center">
            <IoHomeOutline className="h-[90px] w-[90px] text-[#555089]" />
          </div>
          <h5 className="text-[20px] mt-[15px] text-[#555089] text-center">
            MAINTAIN
          </h5>
        </div>
      </div>
    </>
  );
}

export default Improve;
