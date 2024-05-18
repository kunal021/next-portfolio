/* eslint-disable @next/next/no-img-element */
"use client";
import projectData from "@/data/projectData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "./Slider";

gsap.registerPlugin(gsap, ScrollTrigger);

function ProjectCard() {
  useGSAP(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".animateProjectP", {
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".animateProjectP",
          start: "top 80%",
          end: "top 30%",
          //   markers: true,
          scrub: 3,
        },
      });

      tl.from(".projectSlider", {
        opacity: 0,
        scale: 0.5,
        duration: 2,
        stagger: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projectSlider",
          start: "top 90%",
          end: "top 40%",
          // markers: true,
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  });
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-hidden">
      <p className="animateProjectP opacity-0 scale-50 text-white mx-10 text-center text-3xl sm:text-5xl font-extrabold">
        SOME OF MY WORKS
      </p>
      <div className="projectSlider opacity-100 scale-100 flex flex-wrap justify-center items-start mx-10 my-20 md:m-20 w-[25rem]">
        <Slider />
      </div>
    </div>
  );
}

export default ProjectCard;
