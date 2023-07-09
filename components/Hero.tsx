import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div id="home" className="w-full h-screen text-left">
        <div className="w-full h-full mx-auto p-2 flex justify-center items-center">
          <div className="flex-col">
            <h1 className="py-2 text-gray-700">Hello, World!</h1>
            <h1 className="text-gray-700">I&#39;m Jhon Carlo Luna</h1>
            <h1 className="py-2 text-gray-700">
              &lt;<span className="text-[#e40c2ce1]">Web Developer</span>&gt;
            </h1>
            <p className="py-4 text-gray-600 sm:max-w-[100%]">
              Specializing in front-end development while exploring back-end
              technologies
            </p>
          </div>
          <div className="flex-col">
            <Image
              src="/HeroImage.png"
              width={650}
              height={500}
              alt="Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
