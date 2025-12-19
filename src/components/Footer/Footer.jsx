import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Contact"
      className="flex justify-around bg-[#00000051] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail color="#D04B3E" size={20} />

          <a href="mailto:iamdevsingh123@gmail.com" target="_blank">
            iamdevsingh123@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaLinkedin color="#0270AD"/>
          <a href="https://www.linkedin.com/in/dev-singh123" target="_blank">
            linkdlin.com/dev-singh123
          </a>
          
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub color ="#161414"/>
          <a href="https://github.com/Devsingh0123" target="_blank">
            github.com/Devsingh0123
          </a>
         
        </li>
      </ul>
    </div>
  );
};

export default Footer;
