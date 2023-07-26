import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";

export type IProjects = {
  projectLogo: string;
  projectImage?: string;
  projectTitle: string;
  projectDescription: string;
  projectTechstack: string;
  projectWebLink?: string;
  projectGitLink?: string;
  logoPosition?: string;
};

export const ProjectsItem: React.FC<IProjects> = ({
  projectLogo,
  projectImage,
  projectTitle,
  projectDescription,
  projectTechstack,
  projectWebLink,
  projectGitLink,
}: IProjects) => {
  const { ref: projectsRef, inView: isProjectsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div
      ref={projectsRef}
      className="relative h-auto w-auto min-w-[25vw] lg:max-w-[30vw] sm:max-w-[70vw] max-w-[90vw]"
    >
      <div className="absolute h-full w-full  translate-y-1 border-black border-[1px] rounded-[20px] bg-[#fafaca] dark:bg-[#dedeb5f4]" />

      <div
        className={`grid hover:shadow-2xl grid-rows-[9] h-full w-full bg-[#fafaca] dark:bg-[#dedeb5f4] rounded-[20px] border-[1px] shadow-lg border-gray-800 ${
          isProjectsVisible ? "translate-y-[0]" : "opacity-20"
        } `}
      >
        <div
          className={`overflow-hidden row-span-2 custom-shadow-inner h-full w-full py-4 bg-yellow-200 border-b-[1px]  rounded-[20px] max-h-[200px] border-gray-900 `}
        >
          <div
            className={`justify-center items-start  bg-white mx-4 border-black border-[1px] grid grid-rows-3 min-h-[400px] duration-[2s] ${
              isProjectsVisible ? "translate-y-[0]" : "translate-y-[400px]"
            }`}
          >
            <div className="row-span-1 px-1 ">
              <Image
                src={projectImage || "Image"}
                alt="/"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-rows-6 row-span-6 h-auto px-4 py-4 flex-col-reverse">
          <div className="row-span-5 flex justify-start gap-5 items-center flex-col">
            <div className="grid grid-cols-12 items-center justify-center gap-2">
              <Image
                src={projectLogo || "Logo"}
                alt="/"
                width={100}
                height={100}
                className="col-span-3"
              />
              <h3 className="text-center dark:text-black tracking-widest font-indie col-span-9">
                {projectTitle}
              </h3>
            </div>

            <p className="text-center capitalize dark:text-black">
              {projectDescription}
            </p>

            <span className="text-[#ab3a3adf] text-center flex">
              <p className="dark:text-[#ab3a3adf] ">
                {projectTechstack}
              </p>
            </span>
          </div>
          <div className=" flex items-center justify-around row-span-1 px-4">
            {projectWebLink && (
              <Link
                target="_blank"
                href={projectWebLink || "/"}
                className="group flex items-center justify-center"
              >
                <Image
                  src={"/assets/projectsIcon/iconsLink.png"}
                  width={28}
                  height={28}
                  alt="/"
                  className="group-hover:-translate-y-1 duration-300"
                />
                <p className="group-hover:text-[#ab3a3adf] dark:text-gray-900 duration-300">
                  <u>Live Preview</u>
                </p>
              </Link>
            )}
            {projectGitLink && (
              <Link
                target="_blank"
                href={projectGitLink || "/"}
                className="group flex items-center justify-center"
              >
                <Image
                  src={"/assets/projectsIcon/iconsGithub.png"}
                  width={28}
                  height={28}
                  alt="/"
                  className="group-hover:-translate-y-1 duration-300"
                />
                <p className="group-hover:text-[#ab3a3adf] dark:text-gray-900  duration-300">
                  <u>View Code</u>
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
