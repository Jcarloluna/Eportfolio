import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  imageLabel: string;
};

const SkillsItem = ({ image, imageLabel }: Props) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-col  gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={image} width={64} height={64} alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{imageLabel}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
