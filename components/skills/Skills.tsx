import React from "react";
import Link from "next/link";
import Image from "next/image";
import SkillsItem from "./SkillsItem";
import { SKILL_LOGOS as skillLogos} from "./skillLogoList";

const Hero = () => {
  return (
    <div id="skills" className="w-full lg:h-auto py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className="text-center tracking-widest uppercase text-[#e55151]">
          My TechStack
        </h1>
        <p className="py-4 text-center">
          Technologies I have used/experienced from college, internship and
          online courses
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8 px-8">
          {skillLogos.map(
            ({ image, imageLabel }: { image: string; imageLabel: string }) => (
              <SkillsItem image={image} imageLabel={imageLabel} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
