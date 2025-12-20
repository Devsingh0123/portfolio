import React from "react";
import img2 from "../../assets/img2.png";
import { PiArrowFatLinesRightFill } from "react-icons/pi";

const About = () => {
  return (
    <div  id="About"
      className="text-white md:flex md:flex-row overflow-hidden items-center   bg-[#00000051] md:justify-between shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-b-lg p-12"
    >
      
      <div className=" md:flex md:flex-row  md:justify-between">
        <h2 className="text-2xl  md:text-4xl font-bold ">About</h2>
        
        <div className="md:flex flex-wrap flex-col md:flex-row items-center  md:flex-nowrap md:gap-30">
          <img className="md:h-80" src={img2} alt="About" />
          <ul>
            <div className="flex gap-3 py-4">
              <PiArrowFatLinesRightFill size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  What I do
                </h1>
                <p className="text-sm md:text-md leading-tight">
Building complete applications using React, Node.js, Express, and MongoDB.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <PiArrowFatLinesRightFill size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  React.js, JavaScript (ES6+), Redux Toolkit, Tailwind CSS, Responsive UI
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <PiArrowFatLinesRightFill size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Skills
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 REST APIs, JWT Authentication, Cookies, MongoDB, Mongoose, Cloudinary.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
