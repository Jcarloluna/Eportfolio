import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div id="home" className="w-full h-screen text-left">
        <div className="w-full h-full mx-auto p-2 flex justify-center items-center">
          <div className="flex-col">
            <p className="uppercase text-sm tracking-widest text-gray-600">
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <h1 className="py-4 text-gray-700">Hello there,</h1>
            <h1>
              I&#39;m <span className="text-[#e55151]"> Jhon Carlo Luna</span>
            </h1>
            <h1 className="py-2 text-gray-700">I build things for the Web</h1>
            <p className="py-4 text-gray-600 sm:max-w-[100%]">
              Specializing in front-end development while learning back-end technologies
            </p>
          </div>
          <div className="flex-col">
            <Image
              src="/HeroImage.png"
              width={500}
              height={500}
              alt="Picture"
            />
          </div>
        </div>
      </div>
      {/* <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <a
          href="https://www.linkedin.com/in/jhon-carlo-luna-508a5a265/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://github.com/fireclint" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <FaGithub />
          </div>
        </a>
        <Link href="/#contact">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineMail />
          </div>
        </Link>
        <Link href="/resume">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <BsFillPersonLinesFill />
          </div>
        </Link>
      </div> */}
    </div>
  );
};

export default Hero;
