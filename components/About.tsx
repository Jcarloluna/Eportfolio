import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [isSpin, setIsSpin] = useState(false);
  const handleImageClick = () => {
    setIsSpin(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSpin(false);
    }, 1000);
  }, [isSpin]);

  return (
    <div>
      <div id="about" className="w-full h-auto min-h-screen py-40">
        <div className="w-full h-full px-12 md:px-20 lg:px-28 xl:px-48 grid md:grid-cols-2">
          <div className="col-span-1 flex items-center justify-center">
            <Image
              src="/assets/aboutMeImage.svg"
              width={400}
              height={600}
              alt="Picture"
              className={
                isSpin
                  ? "animate-spin-horizontal"
                  : null + "pt-12 cursor-pointer hover:scale-110 duration-300 ease-in-out"
              }
              onClick={handleImageClick}
            />
          </div>
          <div className="col-span-1">
            <h1 className="uppercase tracking-widest text-center text-[#ab3a3adf]">
              ABOUT ME
            </h1>
            <div>
              <div className="py-4 text-sm lg:text-base text-center text-clip text-gray-700 sm:max-w-[100%] tracking-wider">
                <ul className="list-inside space-y-4">
                  <li className="cursor-auto">
                    I'm Jhon Carlo, an aspiring web developer from the
                    Philippines, with a passion for creating captivating user
                    experiences.During my college years, I had the opportunity
                    to work on not so complex full-stack software applications,
                    which sparked my interest in both frontend and backend
                    development.
                  </li>
                  <li className="cursor-auto">
                    While I currently have a good foundation in frontend
                    technologies and best practices, I'm eager to expand my
                    skills and dive deeper into backend technologies to create
                    robust and scalable applications. With a background in
                    Computer Engineering Technology, I approach problem-solving
                    with an analytical mindset and thrive in collaborative
                    environments. I'm committed to continuous learning, staying
                    up-to-date with industry trends, and delivering impactful
                    web experiences. Let's connect and embark on this exciting
                    journey together!
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

export default Hero;
