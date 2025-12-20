import React from "react";

import img1 from "../../assets/img1.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div  className="text-white md:flex items-center  md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30  p-12 rounded-t-lg ">
      <div className="md:w-2/4 ">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal  tracking-tighter">
          Hello,I am Dev
        </h1> 

        <p className="text-sm md:text-2xl tracking-tight">
          I'm a passionate learner who's always willing to learn and work across
          technologies and domains. I love to explore new technologies to solve
          real-world problem.
          <a
            href="/Dev_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] underline text-black hover:font-semibold"
          >
            [View Resume]
          </a>
        </p>
        <div className="flex gap-4 ">

        <a
          href="https://wa.me/+916200481457"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-5 md:mt-10 text-[#FFFFFF] py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#00000051] rounded-lg cursor-pointer">WhatsApp</button>
        </a>

        <a href="mailto:iamdevsingh123@gmail.com"
        target="_blank">
          <button className="mt-5 md:mt-10 text-[#FFFFFF] py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#00000051] rounded-lg cursor-pointer">Email</button></a></div>



        
      </div>

      <img src={img1} alt="img"  />
    </div>
  );
};

export default Home;
