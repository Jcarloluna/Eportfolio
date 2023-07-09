import Image from "next/image";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [position, setPosition] = useState("fixed");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const navStyle =
    "flex fixed justify-between items-center w-full px-40 py-5 bg-[#f7f4e9] ";

  return (
    <div
      className={
        shadow
          ? navStyle + "max-h-16 shadow-xl z-[100] ease-in-out duration-1000"
          : navStyle + "max-h-28"
      }
    >
      <div className="flex-col selection:flex items-center justify-center">
        <div className="flex-col ">
          <Image
            src="/jcLogov2.png"
            width={shadow ? 45 : 80}
            height={shadow ? 45 : 80}
            alt="Picture"
            className="ease-in-out duration-500 "
          />
        </div>
      </div>
      <div className="flex-col flex items-center justify-center">
        <ul className="hidden md:flex items-center">
          <li className="ml-10 text-sm uppercase ">
            <ReactLink to="home">Home</ReactLink>
          </li>
          <li className="ml-10 text-sm uppercase ">
            <ReactLink
              to={"about"}
              smooth={true}
              duration={650}
              offset={-50}
            >
              About
            </ReactLink>
          </li>
          <li className="ml-10 text-sm uppercase ">
            <ReactLink
              to={"skills"}
              smooth={true}
              duration={650}
              offset={-50}
            >
              Skills
            </ReactLink>
          </li>
          <li className="ml-10 text-sm uppercase ">
            <ReactLink
              to={"projects"}
              smooth={true}
              duration={650}
              offset={-50}
            >
              Projects
            </ReactLink>
          </li>
          <li className="ml-10 text-sm uppercase ">
            <ReactLink
              to={"contact"}
              smooth={true}
              duration={650}
              offset={-50}
            >
              Contact
            </ReactLink>
          </li>
          <li className="ml-10 text-sm uppercase text-[#f7f4e9] rounded-full bg-[#e40c2ce1] px-3 py-2 cursor-pointer ease-in duration-300">
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        {/* <div
        
          onClick={handleNav}
          className="md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
