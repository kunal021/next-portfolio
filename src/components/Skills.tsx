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
        scale: 0.6,
        duration: 3,
        stagger: 0.3,
        ease: "back.inOut",
        scrollTrigger: {
          trigger: ".animation",
          start: "top 70%",
          end: "top 75px",
          // markers: true,
          scrub: 3,
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <div className="flex flex-col justify-center items-center " id="skills">
      <SkillBackground />
      <p className="animation opacity-0 text-4xl sm:text-7xl text-white font-black text-center backdrop-blur scale-50">
        Technologies I work with
      </p>
      <div className="z-10 flex flex-wrap justify-center items-center my-10 space-x-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="animation opacity-0 scale-0 flex flex-col justify-center items-center border-2 border-white rounded-md  py-6 px-10 lg:py-10 lg:px-14"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image96}
              alt={item.name}
              className="h-[48px] w-[48px] md:h-[66px] md:w-[66px] lg:h-[96px] lg:w-[96px]"
            />
            <p className="text-white text-center text-[10px] text-sm md:text-lg font-normal sm:font-medium lg:font-bold w-full">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
