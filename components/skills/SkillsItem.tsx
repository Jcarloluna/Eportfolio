import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  imageLabel: string;
};

const SkillsItem = ({ image, imageLabel }: Props) => {
  return (
    <div className="group relative">
      <div className="absolute h-full w-full -translate-x-2 border-black border-[1px] rounded-2xl bg-[#fafaca]"/>
      <div className="absolute h-full w-full -translate-x-1 border-black border-[1px] rounded-2xl bg-[#fafaca]"/>
      <div className="p-6 shadow-xl w-full h-full rounded-xl group-hover:rotate-[-8deg] group-hover:-translate-y-[8px] group-hover:translate-x-[6px] rotate-[0deg] ease-in duration-300 bg-[#fafaca] overflow-hidden border-black border-[1px]">
        <div className="fixed justify-start">
          <div className="h-3 w-3 rounded-full bg-gray-900 shadow-xl"></div>
        </div>
        <div className="grid grid-col gap-4 justify-center items-center">
          <div className="m-auto relative duration-300">
            <Image src={image} width={64} height={64} alt="/" />
          </div>
          <div className="flex flex-col cursor-auto items-center justify-center text-lg group-hover:font-extrabold group-hover:text-[#ab3a3adf] indie duration-100">
            <h3>{imageLabel}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
