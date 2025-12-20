import React from "react";
import AirbnbLogo from "../../assets/AirbnbLogo.png";
const ProjectCard = ({ title, main,logo }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] rounded-lg shadow-xl shadow-slate-900 ">
      <img className="p-4 w-[100%] h-[25%] " src={logo} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href="https://airbnb-clone-1-nqmg.onrender.com/">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#5dade243]">
          Demo
        </button></a>
        <a href="https://github.com/Devsingh0123/Airbnb-clone">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#5dade243]">
          Source Code
        </button></a>
      </div>
    </div>
  );
};

export default ProjectCard;