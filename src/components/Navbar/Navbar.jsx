import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className="flex flex-col justify-center items-center text-[#FFFFFF] md:flex md:flex-row md:justify-between md:items-center pt-4 md:px-12 ">
      <div className=" w-full flex  justify-between px-10 md:px-0 ">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <span className="text-xl font-bold tracking-wide">{showMenu ? (
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
        )}</span></div>
      
        

        <ul
          className={` ${
            menu ? "block" : "hidden"
          }   mt-4  px-2 rounded-xl bg-opacity-30 text-center md:flex md:static text-sm md:text-md md:bg-transparent md:mt-0  md:gap-6`}
        >
          <a href="#About">
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              About
            </li>
          </a>
          <a href="#Skills">
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              Skills
            </li>
          </a>
          <a href="#Projects">
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
             Projects
            </li>
            </a>
        
          <a href="#Contact">
            <li className="text-md transition-all duration-300 p-1 md:p-0 ">
              Contact
            </li>
          </a>
        </ul>
      
    </nav>
  );
};

export default Navbar;
