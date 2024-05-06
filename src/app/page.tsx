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
      className="flex flex-col justify-center items-center h-screen"
    >
      <h1 className="text-3xl font-black">Kunal Singh!</h1>
      <p className="text-xl font-bold">A passionate Full Stack Developer</p>
    </div>
  );
}

export default Home;
