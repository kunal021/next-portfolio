"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import x from "../../public/x.svg";
import bars from "../../public/bars.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);
function NavBar() {
  const [open, setOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const navElement = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -100,
      duration: 1.5,
      ease: "back.inOut",
    });
    tl.from(".element", {
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      ease: "power3.out",
    });
  });

  const handleMouseMove = (e: {
    clientX?: any;
    clientY?: any;
    currentTarget?: any;
  }) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="flex justify-center items-center z-[999] text-white">
      <nav ref={navRef} className="bottom-0 sm:top-0 fixed">
        {/* <button
          onClick={toggleMenu}
          className="md:hidden h-10 w-10 top-0 m-5 flex justify-center items-center"
        >
          {open ? (
            <Image src={x} alt="Close Menu" className="" />
          ) : (
            <Image src={bars} alt="Open Menu" className=" " />
          )}
        </button> */}
        <div>
          <ul
            ref={navElement}
            onMouseMove={handleMouseMove}
            className={`nav text-sm sm:text-base font-medium flex flex-row justify-center items-start relative space-x-6 max-w-max my-5 px-3 sm:px-5 py-3 rounded-full border-transparent bg-white/10`}
          >
            <li className="element">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="element">
              <Link href={"/skills"}>Skills</Link>
            </li>

            <li className="element">
              <Link href={"/projects"}>Projects</Link>
            </li>

            <li className="element">
              <Link href={"/contact"}>Contact Me</Link>
            </li>
          </ul>
        </div>
        <style jsx>{`
          .nav::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
              250px circle at var(--mouse-x) var(--mouse-y),
              rgba(255, 255, 255, 0.1),
              transparent 40%
            );
            opacity: 0;
            transition: opacity 500ms;
            border-radius: inherit;
            z-index: -10;
          }
          .nav:hover::before {
            opacity: 1;
          }
        `}</style>
      </nav>
    </div>
  );
}

export default NavBar;
