import React from "react";
import Link from "next/link";
import Image from "next/image";

const Experience  = () => {
  return (
    <div>
      <div className="w-full min-h-screen text-left">
        <div className="w-full h-full mx-auto px-12 md:px-20 lg:px-28 xl:px-48 flex justify-between items-center space-x-12">
          <div className="flex-col">
            <h1 className="uppercase tracking-widest text-center pb-8 text-[#ab3a3adf]">
              EXPERIENCE
            </h1>
            <div className="grid md:grid-cols-3 py-8 space-y-4 md:space-y-0 md:space-x-8  gap-4 md:gap-16">
              <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                <Image
                  src="/assets/xurpasLogo.png"
                  alt="Image"
                  width={300}
                  height={250}
                  layout="responsive"

                  className="max-h-[400px] max-w-[400px]"
                />
              </div>
              <div className="col-span-2">
                <h2 className="text-gray-700 py-4">
                  Xurpas Inc | Makati, Philippines
                </h2>
                <h4 className="text-gray-700">Frontend Developer Intern</h4>
                <span className="text-xl text-[#ab3a3adf]">
                  (March 2023 - June 2023)
                </span>

                <ol className="py-4 text-sm lg:text-base text-gray-700 sm:max-w-[100%] tracking-wider list-disc space-y-3">
                  <li>
                    Collaborated with a Scrum team utilizing Agile methodologies
                    as a frontend developer, ensuring timely delivery of
                    high-quality web applications.
                  </li>
                  <li>
                    Actively participated in sprint planning, daily stand-ups,
                    and retrospectives, contributing to the team's Agile
                    practices, and fostering effective communication.
                  </li>
                  <li>
                    Resolve problems, address concerns, and make necessary
                    modifications as required using HTML, CSS, Ant Design,
                    JavaScript, TypeScript, ReactJS, GraphQL and Bitbucket
                    within the Scrum framework, resulting in improved user
                    experiences.
                  </li>
                  <li>
                    Completed Udemy training courses on various topics:
                    <ul className="space-y-1 list-decimal px-12 py-2">
                      <li>
                        React - The Complete Guide (incl Hooks, React Router,
                        Redux)
                      </li>
                      <li>Modern React with Redux</li>
                      <li>GraphQL by Example</li>
                      <li>
                        The Complete Guide to Advanced React Component Patterns
                      </li>
                      <li>The Git & Github Bootcamp</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
            <div className="grid md:grid-cols-3 flex-col-reverse  py-8 space-y-4 md:space-x-8 md:gap-16 ">
              <div className="flex col-span-2 md:col-span-1 justify-center items-center">
                <Image
                  src="/assets/tupLogo.png"
                  alt="Image"
                  width={250}
                  height={250}
                  layout="responsive"
                  className="max-h-[300px] max-w-[300px]"
                />
              </div>
              <div className="col-span-2">
                <h2 className="text-gray-700 py-4">
                  Technological University of the Philippines - Cavite
                </h2>
                <h3 className="flex text-gray-700">
                  <div>
                    <h4>
                      Bachelor of Engineering Technology major in Computer
                      Engineering Technology Student
                    </h4>
                    <span className="text-xl text-[#ab3a3adf]">
                      (2019 - 2023)
                    </span>
                  </div>
                </h3>
                <ul className="py-4 text-sm lg:text-base text-gray-700 sm:max-w-[100%] tracking-wider list-disc space-y-3">
                  <li>
                    Managed to graduate with a cum laude distinction, which was
                    a testament to my consistent academic performance throughout
                    my stay in the university.
                  </li>
                  <li>
                    Successfully created a responsive user interface using HTML,
                    CSS, Bootstrap and JavaScript for our capstone project -
                    profiling and monitoring system, enabling efficient
                    monitoring of preschoolers' development and nutritional
                    status.
                  </li>
                  <li>
                    Complied on different mini-project requirements using Python,
                    Django, Tkinter, PyQT5, MySQL, and ReactJS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
