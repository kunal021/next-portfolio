/* eslint-disable @next/next/no-img-element */
"use client";
import projectData from "@/data/projectData";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";

function Slider() {
  const [cardIndex, setCardIndex] = useState(0);

  const showNext = () => {
    setTimeout(
      () =>
        setCardIndex((index) => {
          if (index === projectData.length - 1) {
            return 0;
          }
          return index + 1;
        }),
      300
    );
  };

  const showPrevious = () => {
    setTimeout(
      () =>
        setCardIndex((index) => {
          if (index === 0) {
            return projectData.length - 1;
          }
          return index - 1;
        }),
      300
    );
  };
  return (
    <div className="relative transition-all duration-300">
      <div className="w-full pb-2 border-transparent rounded-md bg-gradient-to-r from-gray-500 to-slate-900">
        <img
          src={projectData[cardIndex].image}
          alt={projectData[cardIndex].name}
          className="h-52 rounded-t-md"
        ></img>
        <div>
          <div className="text-white font-bold flex justify-between items-center p-2 text-xl">
            <p># {projectData[cardIndex].id + 1}</p>
            <p>{projectData[cardIndex].name}</p>
          </div>
          <div className="text-white flex justify-start space-x-10 items-center px-2 py-1 text-xs">
            <Link href={projectData[cardIndex].githubLink}>GitHub</Link>
            <Link href={projectData[cardIndex].liveLink}>Live</Link>
          </div>
          <p className="text-white px-2 py-1 text-md">
            {projectData[cardIndex].description}
          </p>
          <div className="text-white flex justify-start space-x-6 items-center px-2 py-1 text-sm">
            <p>Tech Stack</p>
            <div className="flex flex-wrap break-words space-x-2">
              {projectData[cardIndex].technology.map((data, i) => (
                <p key={i}>{data}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={showPrevious}
        className="z-[100] absolute left-0 md:-left-52 top-1/2 transform -translate-y-1/2 bg-black/50 md:bg-white/50 p-1 md:p-3 rounded-full"
      >
        <ArrowBigLeft color="white" className="scale-75 md:scale-150" />
      </button>
      <button
        onClick={showNext}
        className="z-[100] absolute right-0 md:-right-52 top-1/2 transform -translate-y-1/2 bg-black/50 md:bg-white/50 p-1 md:p-3 rounded-full "
      >
        <ArrowBigRight color="white" className="scale-75 md:scale-150" />
      </button>
    </div>
  );
}

export default Slider;
