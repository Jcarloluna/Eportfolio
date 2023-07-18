import React from "react";
import { BiSolidCloudDownload } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import { FaSquareGithub } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div
      id="footer"
      className="w-full fixed bottom-0 max-h-[60px] z-40 flex flex-row"
    >
      <div className="w-full mx-auto px-4 md:px-10 lg:px-20 py-8 flex flex-row justify-center md:justify-between items-center space-y-4 md:space-y-0 md:space-x-12">
        <div className="flex items-center flex-row gap-3">
          <Image
            src="/assets/footerIcon/github.svg"
            alt="Image"
            width={25}
            height={25}
            layout="responsive"
            className="max-h-[50px]"
          />
          <Image
            src="/assets/footerIcon/linkedIn.svg"
            alt="Image"
            width={25}
            height={25}
            layout="responsive"
            className="max-h-[50px]"
          />
          <Image
            src="/assets/footerIcon/facebook.svg"
            alt="Image"
            width={25}
            height={25}
            layout="responsive"
            className="max-h-[50px]"
          />
          <Image
            src="/assets/footerIcon/downloadLogo.png"
            alt="Image"
            width={25}
            height={25}
            layout="responsive"
            className="max-h-[50px]"
          /><span>Resume</span>
        </div>
      </div>
    </div>
  );
};
