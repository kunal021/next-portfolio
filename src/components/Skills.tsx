import Image from "next/image";
import SkillBackground from "./SkillBackground";
import data from "@/data/skillData";

function Skills() {
  return (
    <div className="flex justify-center items-center" id="skills">
      <SkillBackground />
      <div className="z-10 flex flex-wrap justify-center items-center m-10 space-x-4 sm:space-x-10 md:space-x-14 lg:space-x-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center my-8"
          >
            {/* <div className="relative w-full h-full"> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image96}
              alt={item.name}
              className="h-[26px] w-[26px] sm:h-[48px] sm:w-[48px] md:h-[66px] md:w-[66px] lg:h-[66px] lg:w-[96px]"
            />
            {/* </div> */}
            <p className="text-white text-center text-[8px] sm:text-sm md:text-lg font-normal sm:font-medium lg:font-bold w-full">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
