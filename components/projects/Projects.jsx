import ProjectCard from "./ProjectCard";


const Projects = () => {
    return (
        <div className="text-gray-600 body-font">
        <div className="container  mx-auto ">
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 :gap-8">
          
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
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