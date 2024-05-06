"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, PixiPlugin);

function Home() {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroRef.current, {
      // opacity: 0,
      duration: 1.5,
      delay: 3,
      filter: "blur(15px)",
    });
  });

  return (
    <div
      ref={heroRef}
      className="flex flex-col justify-center items-center h-screen space-y-6"
    >
      <h1 className="text-5xl font-black">Kunal Singh!</h1>
      <p className="text-xl font-bold">A passionate Full Stack Developer</p>
      <button className="text-xl font-medium border-2 border-white rounded-lg px-5 py-2">
        Download CV
      </button>
    </div>
  );
}

export default Home;
