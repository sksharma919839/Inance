import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import c1 from "../../assets/client-1.jpg";
import c2 from "../../assets/client-2.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function Clint() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <h2 className="text-[32px] text-[#040000] text-center font-semibold mb-[50px]">
        WHAT OUR CLIENTS SAY
      </h2>
      <Slider
        className="overflow-hidden"
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div
          key={1}
          className="md:max-w-[460px] max-w-[300px] md:h-[330px] h-auto p-[10px] clint-box my-[50px] mx-[20px]"
        >
          <div className="flex items-center">
            <img src={c2} className="w-[125px] h-[121px] rounded-full" alt="" />
            <h6 className="ml-[20px] text-[16px] text-[#040000]">
              Jorch morik
            </h6>
          </div>
          <p className="mt-[40px] text-[16px] text-[#040000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque distinctio in fuga maxime voluptatum deleniti omnis sapiente
            repellendus labore.
          </p>
        </div>
        <div
          key={2}
          className="md:max-w-[460px] max-w-[300px] md:h-[330px] h-auto p-[15px] clint-box my-[50px] mx-[20px]"
        >
          <div className="flex items-center">
            <img src={c1} className="w-[125px] h-[121px] rounded-full" alt="" />
            <h6 className="ml-[20px] text-[16px] text-[#040000]">
              Jorch morik
            </h6>
          </div>
          <p className="mt-[40px] text-[16px] text-[#040000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque distinctio in fuga maxime voluptatum deleniti omnis sapiente
            repellendus labore.
          </p>
        </div>
        <div
          key={3}
          className="md:max-w-[460px] max-w-[300px] md:h-[330px] h-auto p-[15px] clint-box my-[50px] mx-[20px]"
        >
          <div className="flex items-center">
            <img src={c2} className="w-[125px] h-[121px] rounded-full" alt="" />
            <h6 className="ml-[20px] text-[16px] text-[#040000]">
              Jorch morik
            </h6>
          </div>
          <p className="mt-[40px] text-[16px] text-[#040000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque distinctio in fuga maxime voluptatum deleniti omnis sapiente
            repellendus labore.
          </p>
        </div>
        <div
          key={4}
          className="md:max-w-[460px] max-w-[300px] md:h-[330px] h-auto p-[15px] clint-box my-[50px] mx-[20px]"
        >
          <div className="flex items-center">
            <img src={c1} className="w-[125px] h-[121px] rounded-full" alt="" />
            <h6 className="ml-[20px] text-[16px] text-[#040000]">
              Jorch morik
            </h6>
          </div>
          <p className="mt-[40px] text-[16px] text-[#040000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque distinctio in fuga maxime voluptatum deleniti omnis sapiente
            repellendus labore.
          </p>
        </div>
        <div
          key={5}
          className="md:max-w-[460px] max-w-[300px] md:h-[330px] h-auto p-[15px] clint-box my-[50px] mx-[20px]"
        >
          <div className="flex items-center">
            <img src={c2} className="w-[125px] h-[121px] rounded-full" alt="" />
            <h6 className="ml-[20px] text-[16px] text-[#040000]">
              Jorch morik
            </h6>
          </div>
          <p className="mt-[40px] text-[16px] text-[#040000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque distinctio in fuga maxime voluptatum deleniti omnis sapiente
            repellendus labore.
          </p>
        </div>
        <div
          key={6}
          className="md:max-w-[460px] max-w-[300px] md:h-[330px] h-auto p-[15px] clint-box my-[50px] mx-[20px]"
        >
          <div className="flex items-center">
            <img src={c1} className="w-[125px] h-[121px] rounded-full" alt="" />
            <h6 className="ml-[20px] text-[16px] text-[#040000]">
              Jorch morik
            </h6>
          </div>
          <p className="mt-[40px] text-[16px] text-[#040000]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            itaque distinctio in fuga maxime voluptatum deleniti omnis sapiente
            repellendus labore.
          </p>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button
          className="h-[60px] w-[100px] text-[#ffffff] px-[35px] bg-[#0355cc]"
          onClick={previous}
        >
          <FaArrowLeft size={30} />
        </button>
        <button
          className="h-[60px] ml-[30px] w-[100px] text-[#ffffff] px-[35px] bg-[#0355cc]"
          onClick={next}
        >
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
}

export default Clint;
