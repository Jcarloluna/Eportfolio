import React from "react";
import { BiSolidCloudDownload } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="footer" className="w-full h-2/5 flex">
      <div className="w-full h-full mx-auto px-40 flex justify-center items-center space-x-12">
        <div className="flex-col">
          <div className="flex justify-center md:justify-end gap-3 items-center">
            <FaSquareGithub
              color={"#ab3a3adf"}
              size={"50px"}
              className="cursor-pointer shadow-sm"
            />
            <BsLinkedin
              color={"#ab3a3adf"}
              size={"50px"}
              className="cursor-pointer shadow-md shadow-black"
            />
            <button className="shadow-md flex gap-1 items-center justify-center">
              <BiSolidCloudDownload color={"#EAE5D9"} size={"25px"} />
              <p className="text-[#EAE5D9]">Resume</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
