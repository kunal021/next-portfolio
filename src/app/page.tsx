"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/all";
import Button from "@/components/Button";
import hackerEffect from "@/utils/hackerEffect";

gsap.registerPlugin(useGSAP, ScrollTrigger, PixiPlugin);

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(heroRef.current, {
        opacity: 0,
        duration: 1.5,
        filter: "blur(15px)",
      });
    },
    { scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      className="flex flex-col justify-center items-center h-screen space-y-6 text-white"
    >
      <h1
        data-value="KUNAL SINGH"
        onMouseOver={hackerEffect}
        className="text-3xl  sm:text-5xl font-black"
      >
        KUNAL SINGH
      </h1>
      <p className="text-md sm:text-xl font-bold">
        A passionate Full Stack Developer
      </p>
      <Button />
    </div>
  );
}

export default Home;
