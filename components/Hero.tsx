import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSolidCloudDownload } from "react-icons/bi";
import { useInView } from "react-intersection-observer";


export const Hero: React.FC<{}> = () => {
  const { ref: heroRef, inView: isContainerVisible } = useInView({
    triggerOnce: true,
  });

  const backgroundStyling = "bg-cover bg-right h-screen";
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/LUNA-JHON-CARLO_RESUME.pdf'; 
    link.download = 'LUNA-JHON-CARLO_RESUME.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section
      id="home"
      ref={heroRef}
      className={`
        ${backgroundStyling} bg-[url("/assets/heroBackground3.svg")] 
        "w-full min-h-screen h-auto lg:text-left pt-28 lg:pt-16 flex justify-center items-center px-4 md:px-20 lg:px-28 xl:px-48"
      `}
    >
      <div className=" w-full relative h-full mx-auto p-2 grid lg:grid-cols-2 justify-center items-center">
        <div
          className={`overflow-hidden ease-in-out ${
            isContainerVisible ? "opacity-100" : "opacity-0"
          } group relative text-left duration-500 col-span-1 justify-center items-center shadow-xl bg-[#fafacaf4] md:bg-[#fafaca] p-8 rounded-xl border-2 border-black tracking-widest`}
        >
          <div className="relative flex justify-end translate-x-4 -translate-y-2">
            <div className="h-3 w-3 rounded-full bg-gray-900 shadow-xl" />
          </div>
          <div
            // className={`duration-[2000ms] ease-in-out ${
            //   isContainerVisible ? "translate-x-[0px]" : "-translate-x-[500px]"
            // }`}
          >
            <h1 className="pb-2 text-gray-700 animate-draw ">Hello, World!</h1>
            <h1 className="text-gray-700 ">
              I&#39;m{" "}
              <span className="group-hover:text-[#ab3a3adf] animate-draw ">
                Jhon Carlo
              </span>
            </h1>
            <h1 className="pb-2 text-gray-700">
              &lt;
              <span className="text-[rgb(171,59,59)] tracking-normal animate-draw ">
                Web Developer
              </span>
              &gt;
            </h1>
            <p className="py-4 text-gray-600 sm:max-w-[100%] animate-draw ">
              Specializing in front-end development while exploring back-end
              technologies
            </p>
            <div className="flex justify-center md:justify-end items-center">
              <button onClick={handleDownload} className="group px-3 shadow-md active:scale-90 hover:bg-[#862f2fdf] duration-[150ms] flex gap-1 items-center justify-center bg-[#ab3a3adf]">
                <BiSolidCloudDownload color={"#FFFFFF"} className="group-hover:animate-bounce " size={"25px"} />
                <p className="text-[#FFFFFF] font-indie tracking-widest">Download CV</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
