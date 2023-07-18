import React from "react";
import { Link as ReactLink } from "react-scroll";
import Image from "next/image";

export const SlideUp = () => {
  return (
    <div className="my-12 h-[100px] w-[full] flex items-center justify-center px-28 ">
      <ReactLink
        to={"home"}
        className="cursor-pointer"
        smooth={true}
        duration={500}
      >
        <span className="flex justify-center items-center">
          <Image
            src="/assets/contactsIcon/iconSlideUp.png"
            alt="Image"
            width={100}
            height={100}
            className="max-h-[100px] max-w-[100px]"
          />
        </span>
      </ReactLink>
    </div>
  );
};