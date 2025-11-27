import React from "react";

import img1 from "../../assets/img1.png"


const Home = () => {
  return (
    <div className="text-[#FFFFFF] flex w-full justify-between items-start p-10 md:20 ">
      <div className="md:w-2/4 pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal  tracking-tighter">
          Hello,I am Dev
        </h1>

        <p className="text-sm md:text-2xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi iusto
          provident at quia aut pariatur tempora fuga itaque tempore repellat?
          Nulla dolore molestiae deserunt. Illo nisi minima laborum quis autem.
        </p>

        <button className="mt-5 md:mt-10 text-[#FFFFFF] py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#6A5ACD] ">
          Contect Me
        </button>
      </div>
        
        <img src={img1} alt="img" className=" mt-[50%] md:mt-0" />
    </div>
  );
};

export default Home;
