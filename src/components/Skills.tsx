"use client";
import SkillBackground from "./SkillBackground";
import data from "@/data/skillData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Skills() {
  useGSAP(() => {
    let ctx = gsap.context(() => {
      // const tl = gsap.timeline();

      gsap.to(".animation", {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: ".animation",
          start: "top 50%",
          end: "top 75px",
          markers: true,
          scrub: 3,
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <div className="flex flex-col justify-center items-center" id="skills">
      <SkillBackground />
      <p className="animation opacity-0 text-2xl sm:text-5xl text-white font-black text-center">
        Technologies I work with
      </p>
      <div className="animation opacity-0 z-10 flex flex-wrap justify-center items-center m-10 space-x-4 sm:space-x-10 md:space-x-14 lg:space-x-20">
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
              className="h-[36px] w-[36px] sm:h-[48px] sm:w-[48px] md:h-[66px] md:w-[66px] lg:h-[96px] lg:w-[96px]"
            />
            {/* </div> */}
            <p className="text-white text-center text-[10px] sm:text-sm md:text-lg font-normal sm:font-medium lg:font-bold w-full">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
