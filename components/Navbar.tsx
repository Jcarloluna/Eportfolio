import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [position, setPosition] = useState('fixed')
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div className="flex justify-between items-center w-full h-full px-40 py-5">
      <div className="flex-col">
        <h3>JCL</h3>
      </div>
      <div className="flex-col">
        <ul className="hidden md:flex">
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/">Home</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#about">About</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#skills">Skills</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#contact">Contact</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
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
