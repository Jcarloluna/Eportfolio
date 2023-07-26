import React from "react";
import { Link as ReactLink } from "react-scroll";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { IRoot } from "../store/interfaces";

export const Footer: React.FC<{}> = () => {
  const { ref: footerRef, inView: isFooterVisible } = useInView({
    // triggerOnce: true,
  });
  const darkMode = useSelector((state: IRoot) => state.darkMode.darkModeState);
  return (
    <section ref={footerRef} className={`relative `}>
      <Image
        src={darkMode ? `/assets/catBurglar.svg` : `/assets/post.svg`}
        width={300}
        height={300}
        alt="Picture"
        className={`absolute z-10 bottom-0 left-0 -translate-y-8 duration-500 dark:-translate-x-[-50px] ${
          isFooterVisible ? "" : "-translate-x-[500px]"
        }`}
      />
      <Image
        src="/assets/catWall.svg"
        width={160}
        height={160}
        alt="Picture"
        className={`fixed z-10 bottom-0 right-0 -translate-y-8 translate-x-12 duration-500 ease-in-out ${
          isFooterVisible && !darkMode ? "" : "translate-x-[160px]"
        } `}
      />
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 pb-[260px] md:pb-12 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center -mx-5 -my-2">
          <ReactLink to={"home"}>
            <Image
              src="/assets/jclLogo.svg"
              width={50}
              height={50}
              alt="Picture"
              priority={true}
              className="ease-in-out duration-300 hover:scale-110 cursor-pointer"
            />
          </ReactLink>
        </div>
        <div className="flex justify-center mt-8 space-x-6">
          <Link
            href="https://github.com/Jcarloluna"
            target="_blank"
            className="text-gray-900 dark:text-white hover:text-[#ab3b3b] dark:hover:text-[#ab3b3b] hover:scale-110"
          >
            <FaGithub size={35} color="text-gray-900" />
          </Link>
          <Link
            href="https://www.facebook.com/Carlo.Luna24"
            target="_blank"
            className="text-gray-900 dark:text-white hover:text-[#ab3b3b] dark:hover:text-[#ab3b3b] hover:scale-110"
          >
            <FaFacebook size={35} color="text-gray-900" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jhon-carlo-luna-508a5a265/"
            target="_blank"
            className="text-gray-900 dark:text-white hover:text-[#ab3b3b] dark:hover:text-[#ab3b3b] hover:scale-110"
          >
            <FaLinkedin size={35} color="text-gray-900" />
          </Link>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-900">
          © Designed and Developed by Jhon Carlo with Caffeine
        
        </p>
      </div>
      <div className="border-b-[40px] border-b-[#A48C7E] border-t-[20px] border-t-[#b9a395]" />
    </section>
  );
};
