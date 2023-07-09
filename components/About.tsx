import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div id="about" className="w-full min-h-screen text-left">
        <div className="w-full h-full mx-auto px-40 flex justify-between items-center space-x-12">
          <div className="flex-col ">
            <Image src="/assets/MyImage.JPG" width={1000} height={1000} alt="Picture" />
          </div>
          <div className="flex-col">
            <h1 className="uppercase tracking-widest text-center text-[#e40c2ce1]">
              ABOUT ME
            </h1>
            <div>
              <p className="py-4 text-gray-600 sm:max-w-[100%] tracking-widest">
                Web Developer specializing in front end development. Familiar
                with various stages of the development cycle for dynamic web
                projects, and experienced collaborating with a scrum team with
                agile methodologies. Knowledgeable in various development tools
                including Figma, HTML5, CSS, Bootstrap5, JavaScript, TypeScript,
                ReactJS, GraphQL, Python, Django, MySQL, Git, Github and
                Bitbucket.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
