import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="text-gray-600 body-font">
      <div className="container  mx-auto ">
        <div className="flex flex-wrap  gap-8">
          <ProjectCard
            shortDes="Portfolio website created with nextjs."
            imageSrc={"/projects/project1.png"}
            DeployLink="https://next-portfolio-5n3a.vercel.app/"
            githubLink="https://github.com/Mahedi-Hasan10/NextPortfolio"
            technology="Next.js"

          />
          <ProjectCard
            shortDes="Simple Travel website created with nextjs."
            imageSrc={"/projects/project2.png"}
            DeployLink="https://travel-app-chi-pink.vercel.app/"
            githubLink="https://github.com/Mahedi-Hasan10/travel_app"
            technology="Next.js"

          />
          <ProjectCard
            shortDes="Simple Educational website created with nextjs."
            imageSrc={"/projects/project3.png"}
            DeployLink="https://stack-junior-jni6.vercel.app"
            githubLink="https://github.com/Mahedi-Hasan10/stack-junior"
            technology="Next.js"

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
