import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Projects: React.FC<{}> = () => {
  const { ref: projectsRef, inView: isComponentVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={projectsRef} id="projects" className="w-full h-screen ">
      <div className="w-full h-full mx-auto px-40 flex justify-center items-center space-x-12">
        <div className="flex-col">
          <h1
            className={`tracking-widest text-center text-[#ab3a3adf] ${
              isComponentVisible ? "animate-scale" : ""
            }`}
          >
            PROJECTS
          </h1>
          <div>
            <p className="py-4 text-gray-600 sm:max-w-[100%] tracking-wide text-center">
              Projects I built/contributed with so far
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
