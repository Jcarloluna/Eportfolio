import React from "react";
import Link from "next/link";
import Image from "next/image";
import SkillsItem from "./SkillsItem";
import { SKILL_LOGOS as skillLogos } from "./skillLogoList";

const Skills = () => {
  return (
    <div id="skills" className="w-full min-h-screen h-auto py-24">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div>
          <h1 className="text-center tracking-widest uppercase text-[#ab3a3adf]">
            SKILLS
          </h1>
          <p className="py-4 text-center text-gray-700">
            Technologies I have used/experienced from College, Internship and
            Online Courses
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-8 px-8 pt-6">
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

export default Skills;
