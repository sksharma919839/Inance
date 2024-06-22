import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const navItem = [
  {
    name: "Home",
    id: 1,
    Link: "/inance",
  },
  {
    name: "About",
    id: 2,
    Link: "/about",
  },
  {
    name: "Services",
    id: 3,
    Link: "/service",
  },
  {
    name: "Contact Us",
    id: 4,
    Link: "/contact",
  },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-[64px] flex items-center justify-between px-[30px] bg-[#D1E3FF]">
        <div>
          <Link
            to="/inance"
            className="text-[24px] text-[#0355cc] font-semibold"
          >
            INANCE
          </Link>
        </div>
        <ul className="md:flex hidden items-center justify-evenly">
          {navItem.map((item) => (
            <li key={item.id} className="mx-[20px]">
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[16px] text-[#0355cc] hover:text-[#0355cc] transition-all duration-500"
                      : "text-[16px] text-[#000000] hover:text-[#0355cc] transition-all duration-500"
                  }`
                }
                to={item.Link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className=" md:hidden" onClick={menuClick}>
          {isOpen ? <IoCloseSharp size={40} /> : <IoMenu size={40} />}
        </div>
        <ul
          className={
            isOpen
              ? "fixed lg:hidden left-0 top-[118px] w-[100%] h-full  bg-[#d1e3ff] "
              : " w-[50%] fixed top-[-100%] bottom-0 "
          }
        >
          <div className="flex items-center justify-center">
            <div>
              {navItem.map((items) => (
                <li key={items.id} className="mx-[20px] my-[15px]">
                  <NavLink
                    to={items.Link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-[#0355cc] " : "text-[#000000]"
                      } py-[7px] text-[16px] hover:text-[#0355cc]`
                    }
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
