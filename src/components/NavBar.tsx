"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
function NavBar() {
  const container = useRef(null);
  const navRef = useRef(null);
  const navRefSm = useRef(null);
  const navElement = useRef(null);

  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      if (open) {
        tl.from(navRefSm.current, {
          y: -300,
          duration: 1,
          ease: "back.inOut",
        });

        tl.from(".elementsm", {
          opacity: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
        });
      } else {
        tl.to(".elementsm", {
          opacity: 0,
          duration: 1,
          stagger: 0.5,
          ease: "power3.out",
        });
        tl.to(navRefSm.current, {
          y: -300,
          // opacity: 0,
          duration: 2,
          ease: "back.inOut",
        });
      }
    });
    return () => ctx.revert();
  }, [open]);

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
      <div className="hidden md:flex justify-center items-center">
        <nav ref={navRef} className="bottom-0 sm:top-0 fixed z-50 h-fit">
          <div>
            <ul
              ref={navElement}
              onMouseMove={handleMouseMove}
              className="nav text-md font-medium flex flex-row justify-center items-start relative space-x-6 my-5 px-5 py-3 rounded-full border-transparent bg-white/10 backdrop-blur-sm"
            >
              <li className="element text-white cursor-pointer ">
                <Link href={"#home"}>Home</Link>
              </li>

              {/* <li className="element text-white cursor-pointer ">
                <Link href={"#about"}>About Me</Link>
              </li> */}

              <li className="element text-white cursor-pointer">
                <Link href={"#projects"}>Projects</Link>
              </li>

              <li className="element text-white cursor-pointer">
                <Link href={"#skills"}>Skills</Link>
              </li>

              <li className="element text-white cursor-pointer">
                <Link href={"#contact"}>Contact Me</Link>
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
      <div
        onClick={() => setOpen((prev) => !prev)}
        ref={container}
        className="flex cursor-pointer md:hidden fixed top-5 right-5 z-[100]"
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 50 50"
          >
            <path
              fill="#ffffff"
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"
            ></path>
          </svg>
        )}
      </div>

      {open && (
        <div
          ref={navRefSm}
          className="flex flex-col fixed w-full backdrop-blur z-50"
        >
          <ul className="text-base font-medium flex flex-col justify-start items-start relative p-10 space-y-6 bg-white/20">
            <li className="elementsm text-white cursor-pointer ">
              <Link href={"#home"}>Home</Link>
            </li>

            {/* <li className="elementsm text-white cursor-pointer ">
              <Link href={"#about"}>About Me</Link>
            </li> */}

            <li className="elementsm text-white cursor-pointer">
              <Link href={"#projects"}>Projects</Link>
            </li>

            <li className="elementsm text-white cursor-pointer">
              <Link href={"#skills"}>Skills</Link>
            </li>

            <li className="elementsm text-white cursor-pointer">
              <Link href={"#contact"}>Contact Me</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
