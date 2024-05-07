"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/Button";
import hackerEffect from "@/utils/hackerEffect";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.from(heroRef.current, {
          opacity: 0,
          duration: 2.5,
          filter: "blur(15px)",
        });

        tl.to(".ani", {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".ani",
            start: "top 125px",
            end: "top top",
            // markers: true,
            scrub: 3,
          },
        });
      });

      return () => ctx.revert();
    },
    { scope: heroRef }
  );

  useEffect(() => {
    setTimeout(() => {
      const h1Element = document.querySelector("#hacker");
      if (h1Element) {
        hackerEffect({ target: h1Element });
      }
    }, 1800);
    // return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex flex-col justify-center items-center h-screen space-y-6 text-white"
      id="home"
    >
      <h1
        data-value="KUNAL SINGH"
        onMouseOver={hackerEffect}
        className="ani text-[40px] leading-8  sm:text-7xl font-black"
        id="hacker"
      >
        KUNAL SINGH
      </h1>
      <p className="ani text-xl sm:text-3xl font-bold">
        A passionate Full Stack Developer
      </p>
      <div className="ani">
        <Button />
      </div>
    </div>
  );
}

export default Home;
