import ProjectCard from "./ProjectCard";


const Projects = () => {
    return (
        <div className="text-gray-600 body-font">
        <div className="container  mx-auto ">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 ">
          
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          </div>
          </div>
      </div>
    );
};

export default Projects;