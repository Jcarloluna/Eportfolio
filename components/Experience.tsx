import React from "react";
import Link from "next/link";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
      <div className="w-full min-h-screen text-left">
        <div className="w-full h-full mx-auto px-40 flex justify-between items-center space-x-12">
          <div className="flex-col">
            <h1 className="uppercase tracking-widest text-center pb-8 text-[#e40c2ce1]">
              EXPERIENCE
            </h1>
            <div className="flex flex-row py-8 gap-24">
              <div className="flex-col">
                <Image
                  src="/assets/xurpasLogo.png"
                  alt="Image"
                  width={500}
                  height={400}
                  layout="responsive"
                />
              </div>
              <div className="flex-col">
                <h3>
                  Frontend Developer Intern{" "}
                  <span className="text-sm text-[#e40c2ce1] mx-12">
                    March 2023 - June 2023
                  </span>
                </h3>
                <ol className="py-4 text-gray-600 sm:max-w-[100%] tracking-widest">
                  <li>
                    Collaborated with a Scrum team utilizing Agile methodologies
                    as a front-end developer, ensuring timely delivery of
                    high-quality web applications.
                  </li>
                  <li>
                    Actively participated in sprint planning, daily stand-ups,
                    and retrospectives, contributing to the team's Agile
                    practices, and fostering effective communication.
                  </li>
                  <li>
                    Developed user-friendly front-end solutions using HTML, CSS,
                    Ant Design, JavaScript, TypeScript, ReactJS, GraphQL and
                    BitBucket within the Scrum framework, resulting in improved
                    user experiences.
                  </li>
                  <li>
                    Completed Udemy training courses on various topics,
                    including: <br/>React - The Complete Guide (incl Hooks, React
                    Router, Redux) <br/> Modern React with Redux <br/> GraphQL by Example
                    <br/>The Complete Guide to Advanced React Component Patterns <br/>
                    The Git & Github Bootcamp
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
