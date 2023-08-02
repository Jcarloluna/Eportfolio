import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const About: React.FC<{}> = () => {
  const { ref: aboutRef, inView: isContainerVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={aboutRef}
      id="about"
      className={`w-full max-w-full h-auto min-h-screen py-24 md:py-32 flex justify-center items-center `}
    >
      <div className="w-full h-full px-8 md:px-20 lg:px-28 md:space-y-4 space-y-0 md:space-x-12 xl:px-48 grid md:grid-cols-3 ">
        <div className="col-span-2 md:col-span-1 flex items-start justify-center">
          <Image
            src="/assets/aboutMeImage.svg"
            width={500}
            height={500}
            alt="Picture"
            style={{
              width: "100%",
              height: "auto",
            }}
            className={` 
              ${
                isContainerVisible ? `scale-100 ` : `scale-50 `
              } + ${"hover:scale-110 duration-150 ease-in-out max-h-[500px] max-w-[500px]"}
            `}
          />
        </div>
        <div
          className={`duration-[1000ms] col-span-2 ease-in-out ${
            isContainerVisible
              ? "translate-x-[0px] opacity-100"
              : "translate-x-[500px] opacity-25"
          }`}
        >
          <h1
            className={`uppercase tracking-widest text-center text-[#ab3b3b]  ${
              isContainerVisible ? "animate-scale" : ""
            }`}
          >
            ABOUT ME
          </h1>
          <div>
            <div className="py-4 text-sm lg:text-base text-center flex-wrap text-gray-700 max-w-[100%] tracking-wider">
              <ul className="list-inside space-y-4 max-w-[100%]">
                <li className="cursor-auto">
                  <p>
                    I'm Jhon Carlo, an aspiring web developer from the
                    Philippines, with a passion for creating captivating user
                    experiences.During my college years, I had the opportunity
                    to work on not so complex full-stack software applications,
                    which sparked my interest in both frontend and backend
                    development.
                  </p>
                </li>
                <li className="cursor-auto">
                  <p>
                    While I currently have a good foundation in frontend
                    technologies and best practices, I'm eager to expand my
                    skills and dive deeper into backend technologies to create
                    robust and scalable applications. With a degree and
                    background in Computer Engineering Technology, I approach
                    problem-solving with an analytical mindset and thrive in
                    collaborative environments. I'm committed to continuous
                    learning, staying up-to-date with industry trends, and
                    delivering pleasing web experiences.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
