import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { IProjects, ProjectsItem } from "./ProjectsItem";
import { PROJECTS } from "../../store/data";
import { useRouter } from "next/router";

const Projects: React.FC<{}> = () => {
  const router = useRouter();
  const { ref: projectsRef, inView: isComponentVisible } = useInView({
    triggerOnce: true,
  });

  const handleViewProjects = () => {
    router.push("/projects");
  };

  const projectsLength = PROJECTS.length;

  return (
    <section
      ref={projectsRef}
      id="projects"
      className={`w-full h-auto min-h-screen mt-[200px] `}
    >
      <div className="w-full h-full mx-auto px-4 md:px-12 xl:px-24 flex justify-center items-center space-x-12">
        <div className="flex-col">
          <h1
            className={`tracking-widest text-center text-[#ab3a3adf] ${
              isComponentVisible ? "animate-scale" : "hidden"
            }`}
          >
            PROJECTS
          </h1>
          <div>
            <p className="py-4 text-gray-600 sm:max-w-[100%] tracking-wide text-center">
              Some of the projects I built/contributed with so far
            </p>
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 ${
              projectsLength <= 2 && projectsLength % 2 === 0
                ? "xl:grid-cols-2"
                : "xl:grid-cols-3"
            }`}
          >
            {PROJECTS.map(
              ({
                projectImage,
                projectTitle,
                projectDescription,
                projectTechstack,
                projectWebLink,
                projectGitLink,
                projectLogo,
              }: IProjects) => (
                <ProjectsItem
                  key={projectImage}
                  projectLogo={projectLogo}
                  projectImage={projectImage}
                  projectTitle={projectTitle}
                  projectDescription={projectDescription}
                  projectTechstack={projectTechstack}
                  projectWebLink={projectWebLink}
                  projectGitLink={projectGitLink}
                />
              )
            )}
          </div>
          <div className="flex justify-center items-center py-24">
            {/* <button
              onClick={handleViewProjects}
              className="p4 bg-[#ab3a3adf] py-2 px-4 font-indie tracking-widest duration-300 hover:bg-[#862f2fdf]"
            >
              <h4> See More Projects </h4>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
