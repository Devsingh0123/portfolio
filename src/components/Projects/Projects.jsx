import React from "react";
import ProjectCard from "./ProjectCard";
import AirbnbLogo from "../../assets/AirbnbLogo.png";
import YouTubeLogo from "../../assets/YouTubeLogo.png";
import TaskManagementLogo from "../../assets/TaskManagementLogo.jpg"

const Projects = () => {
  return (
    <div id="Projects" className="p-12  text-white md:mx-20 ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>

      <div
        className="py-12 
  px-4 sm:px-8 md:px-12 lg:px-20
  flex flex-wrap gap-6
  justify-center md:justify-start
  items-stretch
  shadow-xl bg-opacity-30 rounded-lg"
      >
        <ProjectCard
          title="Airbnb-Clone"
          logo={AirbnbLogo}
          main="Developed a full-stack Airbnb-like web application enabling users to list properties, 
browse listings, and manage bookings with secure authentication and role-based access. "
          demoLink="https://airbnb-clone-1-nqmg.onrender.com/"
          GithubLink="https://github.com/Devsingh0123/Airbnb-clone"
        />
        <ProjectCard
          title="Youtue Clone"
          logo={YouTubeLogo}
          main="Developed YouTube-like platform allowing users to browse, search, and play videos with responsive card-based UI and fixed controls"
          demoLink="https://you-tube-clone-gilt-nine.vercel.app/"
          GithubLink="https://github.com/Devsingh0123/YouTube-Clone"
        />
        
        <ProjectCard
          title="Task Management App"
          logo={TaskManagementLogo}
          main="This is a full-stack Task Management application.


Users can register, log in, and manage their personal tasks through a clean and responsive dashboard."
demoLink="https://frontend-developer-task-rho.vercel.app/"
          GithubLink="https://github.com/Devsingh0123/Frontend-Developer-Task"
        />
        
      </div>
    </div>
  );
};

export default Projects;
