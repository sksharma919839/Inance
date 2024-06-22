import React from "react";
import aboutImg from "../../assets/about-img.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="my-[80px] flex flex-wrap items-center justify-center">
        <div className="sm:w-[400px] w-auto sm:mx-[50px] mx-[20px] lg:mb-0 mb-[40px]">
          <h2 className="text-[32px] text-[#040000] mb-[20px] font-semibold">
            ABOUT US
          </h2>
          <p className="text-[16px] text-[#040000] mb-[40px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non iure
            alias voluptas odio. Sapiente eius a quas vel voluptatem fuga rerum
            harum quidem, corrupti est expedita fugiat ullam quisquam. Numquam
            id dicta voluptate tempore quis. Facilis, velit necessitatibus qui,
            obcaecati placeat illo natus quaerat non, unde eveniet vitae nam
            suscipit.
          </p>
          <Link
            to="/about"
            className="text-[16px] text-[#ffffff] bg-[#0355cc] py-[10px] px-[45px] hover:text-[#0355cc] hover:bg-transparent border border-[#0355cc]"
          >
            Read More
          </Link>
        </div>
        <div>
          <img
            src={aboutImg}
            className="sm:w-[530px] w-[280px] mx-[20px] sm:h-[368px]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default About;
