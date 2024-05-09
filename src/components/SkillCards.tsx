"use client";
import data from "@/data/skillData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function SkillCards() {
  useGSAP(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".animateSkillP", {
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".animateSkillP",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
          scrub: 3,
        },
      });

      tl.to(".animationSkill", {
        opacity: 1,
        scale: 0.6,
        duration: 3,
        stagger: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".animationSkill",
          start: "top 50%",
          end: "top 75px",
          // markers: true,
          scrub: 3,
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="animateSkillP opacity-0 text-3xl sm:text-5xl mx-10 text-white font-extrabold text-center backdrop-blur scale-50">
        TECHNOLOGIES I WORK WITH
      </p>
      <div className="z-10 flex flex-wrap justify-center items-center my-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="animationSkill opacity-0 scale-0 flex flex-col justify-center items-center border-2 border-gray-500 rounded-md  py-4 px-6 sm:py-6 sm:px-10 md:py-10 md:px-14 bg-black/30"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image96}
              alt={item.name}
              className="h-[48px] w-[48px] md:h-[66px] md:w-[66px] lg:h-[96px] lg:w-[96px]"
            />
            <p className="text-white text-center w-16 md:w-[90px] text-[10px] text-sm md:text-lg font-normal sm:font-medium lg:font-bold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCards;
