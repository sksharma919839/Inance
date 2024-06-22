import React from "react";
import HeroImg from "../../assets/slider-img.png";

function Hero() {
  return (
    <>
      <div className="h-auto bg-[#D1E3FF] lg:flex justify-center lg:px-0 sm:px-[90px] px-[10px]">
        <div className="sm:w-[450px] w-auto mr-[120px]">
          <h1 className="text-[40px] text-[#0355cc] font-bold pt-[80px] pb-[20px]">
            Repair and Maintenance Services
          </h1>
          <p className="text-[#444444] text-[15px] mb-[70px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <a
            href="/"
            className="text-[#ffffff] text-[16px] border border-[#ff8a1d] bg-[#ff8a1d] py-[10px] sm:px-[45px] px-[30px] rounded-lg hover:bg-transparent hover:text-[#ff8a1d] transition-all duration-500"
          >
            CONTACT US
          </a>
        </div>
        <div className="lg:mt-0 mt-[40px]">
          <img
            src={HeroImg}
            className="sm:w-[450px] w-[300px] sm:h-[640px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
