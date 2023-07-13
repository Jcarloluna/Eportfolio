import React from "react";
import Image from "next/image";
import styles from "../../styles/animation.module.css";

type Props = {
  image: string;
  imageLabel: string;
};

const ContactsItem = ({ image, imageLabel }: Props) => {
  return (
    <div className="group col-span-1 h-full ease-in duration-300 cursor-pointer overflow-clip  shadow-xl bg-[#ffffbd] rounded-xl px-6 py-3 text-wrap">
      <div className="flex justify-center items-center duration-300 ease-in-out ">
        <div className=" items-center flex font-mono z-[10]">
          <Image
            src={image}
            width={48}
            height={48}
            alt="/"
            className="group-hover:rotate-[10deg] group-hover:translate-x-[-10px] duration-300"
          />
        </div>
        <div
          className={
            "group-hover:animate-bounce group-hover:translate-y-[10px] group-hover:scale-125 ease-in-out capitalize duration-300 text-[18px] ml-2 text-center tracking-wider"
          }
        >
          <h3>{imageLabel}</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactsItem;
