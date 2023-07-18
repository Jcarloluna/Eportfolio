import Image from "next/image";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBurgerChange, setBurgerNavBurgerChange] =
    useState("/burgerIcon.png");

  const handleBurger = () => {
    setBurgerNav(!burgerNav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 75) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  // Tailwind Stylings
  const navStyle =
    "flex flex-row fixed justify-between items-center w-full px-8 md:px-20 lg:px-28 xl:px-48 py-5 z-50 ";
  const sectionLinks =
    "ml-10 uppercase tracking-widest hover:text-[#ab3a3adf] hover:border-b-[3px] ease-in-out hover:border-[#ab3a3adf]";

  return (
    <div
      className={
        shadow
          ? navStyle +
            "max-h-16 shadow-xl ease-in-out duration-300 bg-[#EAE5D9] text-base  "
          : navStyle + "max-h-28 bg-[#f7f4e90] text-lg "
      }
    >
      <div className="flex-col cursor-pointer group">
        <ReactLink to={"home"}>
          <Image
            src="/assets/jclLogo.svg"
            width={shadow ? 45 : 80}
            height={shadow ? 45 : 80}
            alt="Picture"
            layout="fixed"
            className="ease-in-out duration-300 group-hover:scale-110"
          />
        </ReactLink>
      </div>
      <div className="flex-col">
        <ul className="hidden lg:flex items-center justify-center">
          <li className={sectionLinks}>
            <ReactLink to={"home"}>Home</ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink to={"about"} smooth={true} duration={200} offset={0}>
              About
            </ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink to={"skills"} smooth={true} duration={200} offset={-50}>
              Skills
            </ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink
              to={"projects"}
              smooth={true}
              duration={200}
              offset={-50}
            >
              Projects
            </ReactLink>
          </li>
          <li className="ml-10 text-lg font-indie tracking-widest text-[#f7f4e9] rounded-full bg-[#ab3a3adf] px-3 py-1 cursor-pointer ease-in hover:bg-[#ad4f4fdf]">
            <ReactLink to={"contact"} smooth={true} duration={200} offset={-50}>
              Contact
            </ReactLink>
          </li>
          {/* <li className="ml-10 text-sm uppercase text-[#f7f4e9] rounded-full bg-[#ab3a3adf] px-3 py-2 cursor-pointer ease-in duration-300 hover:scale-105 hover:bg-[#652323df]">
            <Link href="/resume">Resume</Link>
          </li> */}
        </ul>
        {/* Hamburger Icon */}
        <div onClick={handleBurger} className="lg:hidden cursor-pointer">
          <AiOutlineMenu size={50} color="#ab3a3adf" />
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            burgerNav
              ? "lg:hidden fixed left-0 top-0 w-full h-full bg-black/70 "
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              burgerNav
                ? " fixed left-0 top-0 w-[80%] sm:w-[70%] md:w-[60%] h-full bg-[#EAE5D9] border-r-2 border-black p-10 ease-in duration-500 z-50"
                : "fixed left-[-300%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image
                    src={"/assets/jclLogo.svg"}
                    width="40"
                    height="40"
                    alt="/"
                  />
                </Link>
                <div
                  onClick={handleBurger}
                  className="p-1 cursor-pointer "
                >
                  <AiOutlineClose size={40} className="text-[#ab3a3adf]" />
                </div>
              </div>
              <div className="border-b border-gray-700 my-4">
                <p className="w-[90%] md:w-[90%] py-4 md:text-xl text-lg lg:text-xxl text-gray-700">
                  Let&#39;s build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase text-[#ab3a3adf] text-xxl justify-center items-center ">
                <Link href="/">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    <h3>Home</h3>
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    <h3>About</h3>
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    <h3>Skills</h3>
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    <h3>Projects</h3>
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    <h3>Contact</h3>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
