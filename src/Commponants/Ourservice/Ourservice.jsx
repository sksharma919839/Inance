import React from "react";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import { Link } from "react-router-dom";

function Ourservice() {
  return (
    <>
      <div className="my-[120px]">
        <div className="mb-[60px]">
          <h2 className="text-[32px] text-[#040000] font-semibold text-center">
            OUR SERVICE
          </h2>
        </div>
        <div className="flex items-center justify-evenly flex-wrap mb-[50px]">
          <div className="w-[290px] h-[264px] our-box px-[30px] lg:mt-0 mt-[40px]">
            <div className="flex items-center justify-center py-[20px]">
              <img src={s1} className="w-[65px] h-[65px] " alt="" />
            </div>
            <h5 className="text-[20px] text-[#040000] text-center py-[10px] font-semibold">
              Maintenance
            </h5>
            <p className="text-[16px] text-center text-[#040000] pb-[20px]">
              when looking at its layout. The point of using Lorem Ipsum isthat
              it has a more-or-less normal
            </p>
          </div>
          <div className="w-[290px] h-[264px] our-box px-[30px] lg:mt-0 mt-[40px]">
            <div className="flex items-center justify-center py-[20px]">
              <img src={s2} className="w-[65px] h-[65px] " alt="" />
            </div>
            <h5 className="text-[20px] text-[#040000] text-center py-[10px] font-semibold">
              Electrical
            </h5>
            <p className="text-[16px] text-center text-[#040000] pb-[20px]">
              when looking at its layout. The point of using Lorem Ipsum isthat
              it has a more-or-less normal
            </p>
          </div>
          <div className="w-[290px] h-[264px] our-box px-[30px] lg:mt-0 mt-[40px]">
            <div className="flex items-center justify-center py-[20px]">
              <img src={s3} className="w-[65px] h-[65px] " alt="" />
            </div>
            <h5 className="text-[20px] text-[#040000] text-center py-[10px] font-semibold">
              Plumbing
            </h5>
            <p className="text-[16px] text-center text-[#040000] pb-[20px]">
              when looking at its layout. The point of using Lorem Ipsum isthat
              it has a more-or-less normal
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/inance"
            className="text-[16px] text-[#ffffff] bg-[#0355cc] py-[10px] px-[45px] hover:text-[#0355cc] hover:bg-transparent border border-[#0355cc]"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
}

export default Ourservice;
