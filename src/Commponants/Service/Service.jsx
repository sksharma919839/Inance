import React from "react";
import serviceImage from "../../assets/professional-img.png";
import { Link } from "react-router-dom";

function Service() {
  return (
    <>
      <div className="lg:h-[728px] h-auto pb-[50px] bg-[#d1e3ff] flex items-center justify-center flex-wrap">
        <div className="mr-[30px]">
          <img
            src={serviceImage}
            className="w-[450px] mt-[30px] h-[488px]"
            alt=""
          />
        </div>
        <div className="w-[480px]">
          <h2 className="text-[32px] text-[#0355cc] font-semibold mb-[40px]">
            WE PROVIDE PROFESSIONAL HOME SERVICES.
          </h2>
          <p className="text-[16px] text-[#040000] mb-[50px]">
            randomised words which dont look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isnt anything embarrassing hidden in the middle of text. All
            randomised words which dont look even slightly
          </p>
          <Link
            to="/inance"
            className="text-[16px] text-[#ffffff] bg-[#ff8a1d] rounded-sm py-[10px] px-[45px] hover:text-[#ff8a1d] hover:bg-transparent border border-[#ff8a1d]"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </>
  );
}

export default Service;
