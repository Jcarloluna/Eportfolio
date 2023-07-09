import Image from "next/image";
import { Link as ReactLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [burgerNav, setBurgerNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBurgerChange, setBurgerNavBurgerChange] =
    useState("/burgerIcon.png");

  const handleBurger = () => {
    setBurgerNav(!burgerNav);
  };
  // For alternate icons
  // useEffect(() => {
  //   if (burgerNav === true) {
  //     setBurgerNavBurgerChange("/closeBurgerIcon.png");
  //   } else {
  //     setBurgerNavBurgerChange("/burgerIcon.png");
  //   }
  //   console.log(burgerNav, "burgerClicked!");
  // }, [burgerNav]);

  // For Navbar's onscroll shadow
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

  // Tailwind Duplications
  const navStyle =
    "flex flex-row fixed justify-between items-center w-full px-8 md:px-20 lg:px-28 xl:px-48 py-5 ";
  const sectionLinks =
    "ml-10 text-sm uppercase hover:text-[#e40c2ce1] duration-200";

  return (
    <div
      className={
        shadow
          ? navStyle +
            "max-h-16 shadow-xl z-[100] ease-in-out duration-1000 bg-[#f7f4e9]"
          : navStyle + "max-h-28 bg-[#f7f4e90]"
      }
    >
      <div className="flex-col">
        <Image
          src="/assets/jcLogov2.png"
          width={shadow ? 45 : 80}
          height={shadow ? 45 : 80}
          alt="Picture"
          layout="fixed"
          className="ease-in-out duration-500 "
        />
      </div>
      <div className="flex-col">
        <ul className="hidden lg:flex items-center justify-center">
          <li className={sectionLinks}>
            <ReactLink to="home">Home</ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink to={"about"} smooth={true} duration={650} offset={-50}>
              About
            </ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink to={"skills"} smooth={true} duration={650} offset={-50}>
              Skills
            </ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink
              to={"projects"}
              smooth={true}
              duration={650}
              offset={-50}
            >
              Projects
            </ReactLink>
          </li>
          <li className={sectionLinks}>
            <ReactLink to={"contact"} smooth={true} duration={650} offset={-50}>
              Contact
            </ReactLink>
          </li>
          <li className="ml-10 text-sm uppercase text-[#f7f4e9] rounded-full bg-[#e40c2ce1] px-3 py-2 cursor-pointer ease-in duration-300 hover:scale-105 hover:bg-[#e40c2cf8]">
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <div onClick={handleBurger} className="lg:hidden cursor-pointer">
          <AiOutlineMenu size={50} color="#e40c2ce1" />
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            burgerNav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              burgerNav
                ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/">
                  <Image src={"/assets/jclogov2.png"} width="40" height="40" alt="/" />
                </Link>
                <div
                  onClick={handleBurger}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&#39;s build something legendary together
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    Projects
                  </li>
                </Link>
                <Link href="/#contact">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    Contact
                  </li>
                </Link>
                <Link href="/resume">
                  <li
                    onClick={() => setBurgerNav(false)}
                    className="py-4 text-sm"
                  >
                    Resume
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
