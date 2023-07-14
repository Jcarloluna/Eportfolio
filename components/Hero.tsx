import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { BiSolidCloudDownload } from "react-icons/bi";
// import { BsLinkedin } from "react-icons/bs";
// import { FaSquareGithub } from "react-icons/fa6";

const Hero = () => {
  const backgroundStyling = "bg-cover bg-right h-screen";

  return (
    <div
      id="home"
      className={`
        ${backgroundStyling} bg-[url("/assets/heroBackground3.svg")] 
        "w-full min-h-screen h-auto lg:text-left pt-28 lg:pt-16 flex justify-center items-center px-4 md:px-20 lg:px-28 xl:px-48"
      `}
    >
      
      <div className="w-full relative h-full mx-auto p-2 grid lg:grid-cols-2 justify-center items-center">
        <div className="group text-left duration-500 col-span-1 justify-center items-center shadow-xl bg-[#fafacaf4] md:bg-[#fafaca] p-8 rounded-xl border-2 border-black">
          <div className="relative flex justify-end translate-x-4 -translate-y-2">
            <div className="h-3 w-3 rounded-full bg-gray-900 shadow-xl" />
          </div>
          <h1 className="pb-2 text-gray-700 ">Hello, World!</h1>
          <h1 className="text-gray-700 ">
            I&#39;m{" "}
            <span className="group-hover:text-[#ab3a3adf]">Jhon Carlo</span>
          </h1>
          <h1 className="pb-2 text-gray-700">
            &lt;<span className="text-[#ab3a3adf]">Web Developer</span>&gt;
          </h1>
          <p className="py-4 text-gray-600 sm:max-w-[100%]">
            Specializing in front-end development while exploring back-end
            technologies
          </p>
          {/* <div className="flex justify-center md:justify-end gap-3 items-center">
            <FaSquareGithub
              color={"#ab3a3adf"}
              size={"50px"}
              className="cursor-pointer shadow-sm"
            />
            <BsLinkedin
              color={"#ab3a3adf"}
              size={"50px"}
              className="cursor-pointer shadow-md shadow-black"
            />
            <button className="shadow-md flex gap-1 items-center justify-center">
              <BiSolidCloudDownload color={"#fafaca"} size={"25px"} />
              <p className="text-[#fafaca]">Resume</p>
            </button>
          </div> */}
        </div>
        {/* <div className="col-span-1">
          <Image
            src="/assets/HeroImage.png"
            width={650}
            height={500}
            alt="Picture"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
