import React from "react";
import ProjectCard from "./ProjectCard";
import AirbnbLogo from "../../assets/AirbnbLogo.png";
import YouTubeLogo from "../../assets/YouTubeLogo.png"

const Projects = () => {
  return (
    <div id="Projects" className="p-12  text-white md:mx-20 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      <div className="py-12 px-20 flex flex-wrap gap-5 shadow-xl bg-opacity-30 rounded-lg">
        <ProjectCard
          title="Airbnb-Clone"
          logo={AirbnbLogo}
          main="Developed a full-stack Airbnb-like web application enabling users to list properties, 
browse listings, and manage bookings with secure authentication and role-based access. "
        />
        <ProjectCard
          title="Youtue Clone"
          logo={YouTubeLogo}
          main="Developed a full-stack Airbnb-like web application enabling users to list properties, 
browse listings, and manage bookings with secure authentication and role-based access. "
        />
        <ProjectCard
          title="Netflix Clone"
          main="this is a blogging website created this ijsdjf l in next js and used some component library used some component library"
        />
      </div>
    </div>
  );
};

export default Projects;
