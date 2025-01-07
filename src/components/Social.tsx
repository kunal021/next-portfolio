"use client";
import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

gsap.registerPlugin(useGSAP);
function Social() {
  const navRef = useRef(null);
  const navElement = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: 100,
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

  return (
    <div>
      <div className="flex justify-center items-center">
        <nav ref={navRef} className="bottom-0 fixed z-[100] h-fit">
          <div>
            <ul
              ref={navElement}
              onMouseMove={handleMouseMove}
              className="nav scale-75 sm:scale-100 text-md flex flex-row justify-center items-start font-semibold relative space-x-2 my-5 px-2 py-1 rounded-full border border-gray-500 bg-black/5 backdrop-blur-sm"
            >
              <Link
                href={"https://github.com/kunal021"}
                target="_blank"
                className="px-4 py-2"
              >
                <Github className="scale-75 sm:scale-100 dark:text-white" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/kunal-singh-4573b3217/"}
                target="_blank"
                className="px-4 py-2"
              >
                <Linkedin className="scale-75 sm:scale-100 dark:text-white" />
              </Link>
              <Link
                href={"https://x.com/lemonade_eez"}
                target="_blank"
                className="px-4 py-2"
              >
                <Twitter className="scale-75 sm:scale-100 dark:text-white" />
              </Link>
              <Link href="mailto:ks820177@gmail.com" className="px-4 py-2">
                <Mail className="scale-75 sm:scale-100 dark:text-white" />
              </Link>
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
                rgba(0, 0, 0, 0.2),
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
    </div>
  );
}

export default Social;
