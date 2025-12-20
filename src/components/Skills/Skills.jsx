// import React from "react";
// import { FaCss3,FaNodeJs  , FaHtml5, FaJs, FaReact } from "react-icons/fa";
// import { SiTailwindcss  } from "react-icons/si";
// import { FaGoogle } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { RiNetflixFill } from "react-icons/ri";
// import { FaAmazon } from "react-icons/fa";
// const Skills = () => {
//   return (
//     <div id="Skills" className="p-10 md:p-24">
//       <h1 className="text-2xl md:text-4xl text-white font-bold">Skills</h1>
//       <div className="flex flex-wrap items-center justify-around">
//         <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaHtml5 color="#E34F26" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaCss3 color="#1572B6" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaReact color="#61DAFB" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaJs color="#F7DF1E" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiTailwindcss  color="#36B7F0" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <SiMongodb color="#47A248" size={50} />
//           </span>
//           <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
//             <FaNodeJs  color="#83CD29" size={50} />
//           </span>
//         </div>
//         {/* <div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
//             <FaGoogle color="#4285F4" size={50} />
//             <span className="text-white">
//               <h2 className="leading-tight">Software Engineer , Google</h2>
//               <p className="text-sm leading-tight font-thin">
//                 Sept 2023 - Present
//               </p>
//               <ul className="text-sm p-2">
//                 <li>- Work as software developer</li>
//                 <li>- Senior SDE-developer</li>
//               </ul>
//             </span>
//           </div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
//             <RiNetflixFill color="#E50914" size={50} />
//             <span className="text-white">
//               <h2 className="leading-tight">Software Engineer, Google</h2>
//               <p className="text-sm leading-tight font-thin">
//                 Sept 2023 - Present
//               </p>
//               <ul className="text-sm p-2">
//                 <li>- Work as software developer.</li>
//                 <li>- Senior SDE-developer</li>
//               </ul>
//             </span>
//           </div>
//           <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
//             <FaAmazon color="#FF9900" size={50} />
//             <span className="text-white">
//               <h2 className="leading-tight">Software Engineer, Google</h2>
//               <p className="text-sm leading-tight font-thin">
//                 Sept 2023 - Present
//               </p>
//               <ul className="text-sm p-2">
//                 <li>- Work as software developer.</li>
//                 <li>- Senior SDE-developer</li>
//               </ul>
//             </span>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiRedux } from "react-icons/si";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="Skills" className="p-12 text-white md:mx-20">
      <h1 className="text-2xl md:text-4xl font-bold">Skills</h1>
      <div className="px-[30%]">
        {/* Frontend */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Frontend</h2>
          <div className="flex gap-6 flex-wrap">
            <SkillCard icon={<FaHtml5 color="#E34F26" />} name="HTML5" />
            <SkillCard icon={<FaCss3Alt color="#1572B6" />} name="CSS3" />
            <SkillCard icon={<FaJs color="#F7DF1E" />} name="JavaScript" />
            <SkillCard icon={<FaReact color="#61DAFB" />} name="React.js" />
            <SkillCard
              icon={<SiRedux color="#7747BC" />}
              name="Redux Toolkit"
            />
            <SkillCard
              icon={<SiTailwindcss color="#36B7F0" />}
              name="Tailwind CSS"
            />
          </div>
        </div>

        {/* Backend */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Backend</h2>
          <div className="flex gap-6 flex-wrap">
            <SkillCard icon={<FaNodeJs color="#83CD29" />} name="Node.js" />
            <SkillCard icon={<SiExpress color="#F7F7F7" />} name="Express.js" />
          </div>
        </div>

        {/* Database */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Database</h2>
          <div className="flex gap-6 flex-wrap">
            <SkillCard icon={<SiMongodb color="#47A248" />} name="MongoDB" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
