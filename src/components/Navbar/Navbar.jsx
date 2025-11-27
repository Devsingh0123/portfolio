import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-col justify-center items-center text-[#FFFFFF] md:flex md:flex-row md:justify-between md:items-center md:py-4 md:px-12 ">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      
        {showMenu ? (
          <FiAlignJustify
            className=" md:hidden "
            onClick={() => {
              setShowMenu(!showMenu);
              setMenu(!menu);
            }}
          />
        ) : (
          <IoMdClose className="md:hidden "  onClick={() => {
              setShowMenu(!showMenu);
              setMenu(!menu)
              ;
            }} />
        )}

        <ul
          className={` ${
            menu ? "block" : "hidden"
          }  py-5 mt-4 bg-black  px-2 rounded-xl bg-opacity-30 text-center md:flex md:static text-sm md:text-md md:bg-transparent md:mt-0  md:gap-6`}
        >
          <Link to="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              About
            </li>
          </Link>
          <Link to={""}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              Skills
            </li>
          </Link>
          <Link to={""}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              Projects
            </li>
          </Link>
          <Link to={""}>
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              Contact
            </li>
          </Link>
        </ul>
      
    </nav>
  );
};

export default Navbar;
