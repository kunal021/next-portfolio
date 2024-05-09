/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { useState } from "react";
import projectData from "@/data/projectData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import linkSVG from "/public/projects/link.svg";
import githubSVG from "/public/projects/github.svg";

gsap.registerPlugin(gsap, ScrollTrigger);

function ProjectCard() {
  const [isHovered, setIsHovered] = useState(-1);

  const handleHover = (id: number) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
  };

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

      projectData.forEach((data, index) => {
        tl.from(`#project-${data.id}`, {
          opacity: 0,
          scale: 0.5,
          x: index % 2 === 0 ? -400 : 400,
          duration: 2,
          stagger: 0.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: `#project-${data.id}`,
            start: "top 90%",
            end: "top 40%",
            // markers: true,
            scrub: 3,
          },
        });
      });
    });
    return () => ctx.revert();
  });
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <p className="animateProjectP opacity-0 scale-50 text-white text-3xl sm:text-5xl font-extrabold">
        SOME OF MY WORKS
      </p>
      <div className="flex flex-col justify-center items-start mx-10 my-20 md:m-20">
        {projectData.map((data) => (
          <div
            key={data.id}
            id={`project-${data.id}`}
            className="animationProject flex flex-col md:flex-row items-center justify-center opacity-100 scale-100 text-white w-[90] md:w-[70vw] my-4 border-2 rounded-xl border-transparent bg-gray-600/40"
            onMouseEnter={() => handleHover(data.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-fit md:w-[40vw] p-5">
              <div className="flex justify-start items-center space-x-10">
                <p className="text-white/30 text-5xl md:text-7xl lg:text-9xl font-black py-4 w-fit">
                  #{data.id + 1}
                </p>
                <div className="flex justify-center items-center scale-75 lg:scale-100 space-x-10 p-2 border-2 rounded-md bg-white/10 border-transparent text-black">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={data.liveLink} target="_blank">
                          <Image
                            height={30}
                            width={30}
                            src={linkSVG}
                            alt="live-link"
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Live</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Link href={data.githubLink} target="_blank">
                          <Image
                            height={30}
                            width={30}
                            src={githubSVG}
                            alt="source-code"
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>Code</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <p className="text-white/60 text-lg md:text-2xl lg:text-3xl font-bold py-2 w-fit">
                {data.name.toUpperCase()}
              </p>
              <p className="text-white/60 text-sm md:text-lg lg:text-xl font-bold py-2 w-fit">
                {data.description.toUpperCase()}
              </p>
            </div>
            <div className="w-fit md:w-[30vw] h-fit p-3 space-y-2 border-2 rounded-[14px] bg-white/5 border-transparent m-3">
              <div className="flex flex-wrap justify-center text-[10px] sm:text-sm lg:text-base items-center space-x-2 px-4 py-2 border-2 rounded-md bg-white/5 border-transparent text-white/70 font-medium">
                {data.technology.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <img
                src={data.image}
                alt={data.name}
                className={`rounded-md ${
                  isHovered === data.id ? "opacity-100" : "opacity-30"
                } hover:scale-110 scale-100 transition-all duration-500 ease-in-out`}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
