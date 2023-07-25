import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type Props = {
  image: string;
  imageLabel: string;
};

const SkillsItem: React.FC<Props> = ({ image, imageLabel }: Props) => {
  const { ref: skillsRef, inView: isSkillsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={skillsRef} className="group relative text-gray-700">
      <div className="absolute h-full w-full -translate-x-2 border-black border-[1px] rounded-xl bg-[#fafaca]" />
      <div className="absolute h-full w-full -translate-x-1 border-black border-[1px] rounded-xl bg-[#fafaca]" />
      <div
        className={`p-6 shadow-xl w-full h-full rounded-xl group-hover:rotate-[-8deg] group-hover:-translate-y-[8px] group-hover:translate-x-[6px] rotate-[0deg] ease-in duration-300 bg-[#fafaca] overflow-hidden border-black border-[1px]
        `}
      >
        <div className="fixed justify-start">
          <div className="h-3 w-3 rounded-full bg-gray-900 shadow-xl"></div>
        </div>
        <div className="grid grid-col gap-4 justify-center items-center">
          <div className="m-auto relative duration-300">
            <Image
              className={`
                ${isSkillsVisible ? "animate-roll" : "hidden"}
              `}
              src={image}
              width={64}
              height={64}
              alt="/"
            />
          </div>
          <div className="flex flex-col cursor-auto items-center justify-center group-hover:font-extrabold group-hover:text-[#ab3a3adf] indie duration-100">
            <h4>{imageLabel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
