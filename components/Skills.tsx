import React from "react";
import Link from "next/link";
import Image from "next/image";
import Html from "../public/skillsIcon/html.svg";
import Css from "../public/skillsIcon/css.svg";
import Bootstrap from "../public/skillsIcon/bootstrap.svg";
import Tailwind from "../public/skillsIcon/tailwind.svg";
import JavaScript from "../public/skillsIcon/javascript.svg";
import ReactLogo from "../public/skillsIcon/react.svg";
import Git from "../public/skillsIcon/git.svg";
import AntDesign from "../public/skillsIcon/antdesign.svg";
import NEXTjs from "../public/skillsIcon/nextjs.svg";
import GraphQL from "../public/skillsIcon/graphql.svg";
import Postman from "../public/skillsIcon/postman.svg";
import TypeScript from "../public/skillsIcon/typescript.svg";
import Bitbucket from "../public/skillsIcon/bitbucket.svg";
import Github from "../public/skillsIcon/github.svg";
import Redux from "../public/skillsIcon/redux.svg";
import Django from "../public/skillsIcon/django.svg";
import Python from "../public/skillsIcon/python.svg";
import MySQL from "../public/skillsIcon/mysql.svg";
import VSCode from "../public/skillsIcon/vscode.svg";

const Hero = () => {
  return (
    <div id="skills" className="w-full lg:h-auto p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className="text-center tracking-widest uppercase text-[#e55151]">
          My TechStack
        </h1>
        <p className="py-4 text-center">
          Technologies I have used/experienced from college, internship and
          online courses
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width={64} height={64} alt="/" />
              </div>
              <div className="flex items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width={64} height={64} alt="/" />
              </div>
              <div className="flex items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JavaScript} width={64} height={64} alt="/" />
              </div>
              <div className="flex items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TypeScript} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactLogo} width={64} height={64} alt="/" />
              </div>
              <div className="flex items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NEXTjs} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Bootstrap} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={AntDesign} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Ant Design</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Redux} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GraphQL} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GraphQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Bitbucket} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bitbucket</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Python} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Django} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Django</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MySQL} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Postman} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Postman</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Git} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-row lg:grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={VSCode} width={64} height={64} alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>VSCode</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
