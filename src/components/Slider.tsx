/* eslint-disable @next/next/no-img-element */
"use client";
import projectData from "@/data/projectData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Link from "next/link";
import Image from "next/image";

function Slider() {
  return (
    <Carousel>
      <CarouselContent className="w-[250px] sm:w-[300px] md:w-[400px]">
        {projectData.map((item) => (
          <CarouselItem
            key={item.id}
            className="flex flex-col items-center justify-center gap-2 bg-gray-900 py-4"
          >
            <div className="flex w-full justify-center items-center text-white/50 font-bold text-lg md:text-2xl">
              <p>{item.name}</p>
            </div>
            <hr className="w-[70%] mb-4 text-center m-auto text-bg-slate-400 bg-slate-700 border-slate-600" />
            <img
              src={item.image}
              alt={item.name}
              className="opacity-75 hover:opacity-100 transition-opacity duration-300 px-2 md:px-10"
            />
            <div className="flex justify-center items-center p-2 md:px-10 gap-10 text-white w-full text-sm">
              <Link
                href={item.githubLink}
                target="_blank"
                className="underline"
              >
                GitHub
              </Link>
              <Link href={item.liveLink} target="_blank" className="underline">
                Live
              </Link>
            </div>
            <p className="text-center p-2 md:px-10 text-white w-full text-sm md:text-base">
              {item.description}
            </p>
            <div className="flex justify-center items-center gap-2">
              {item.technology.map((img, id) => (
                <Image key={id} src={img} alt={img} height={25} width={25} />
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Slider;
