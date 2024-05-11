"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutMe() {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".animateProjectA", {
        opacity: 1,
        scale: 1,
        duration: 2,
        stagger: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".animateProjectA",
          start: "top 80%",
          end: "top 30%",
          //   markers: true,
          scrub: 3,
        },
      });

      tl.from(".skillDIV", {
        opacity: 0.5,
        scale: 0.7,
        duration: 1.5,
        // stagger: 0.5,
        ease: "power.inOut",
        scrollTrigger: {
          trigger: ".skillDIV",
          start: "top 90%",
          end: "top 30%",
          scrub: 1,
          //   markers: true,
        },
      });
    });
    return () => ctx.revert();
  });
  return (
    <div
      className="flex flex-col justify-center items-center space-y-10 my-10 w-full h-screen bg-gray-500/20"
      id="#about"
    >
      <p className="animateProjectA opacity-0 scale-50 flex justify-center items-center text-5xl font-black text-white">
        About Me
      </p>
      <div className="skillDIV space-y-10 opacity-100 scale-100 text-white/50 hover:text-white/75 transition-all duration-500 text-xl leading-10 p-10 mx-28 ">
        <p className="text-start font-semibold">
          Hello everyone, Kunal here. Pleasure metting you all. Please have a
          look around.
        </p>
        <p className="text-start font-medium">
          I&apos;m a college student majoring in Computer Engineering from
          India. I&apos; passionate about tech and Software Developement. I
          mainly work with technologies like JavaScript, ReactJs, Tailwind CSS,
          NodeJs, ExpressJs, MongoDB and sometimes in my spare casually explores
          some intresting UI libraries like Shadcn, Aceternity UI. Currently
          I&apos;m learning NextJs and Postgres database with Prisma ORM and
          basics of AWS. My skillset is not limited to this I&apos;m eager to
          learn more and constantly upskilling myself.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
