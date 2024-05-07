"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function MouseTrailer() {
  const trailerRef = useRef(null);

  useEffect(() => {
    const trailer = trailerRef.current;
    const h1 = document.querySelectorAll("h1");
    const p = document.querySelectorAll("p");

    let x = 0;
    let y = 0;

    const onMouseMove = (e: any) => {
      x = e.clientX - 10;
      y = e.clientY - 10;

      //   console.log(x, y);

      gsap.to(trailer, {
        x: x,
        y: y,
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    const onMouseEnter = () => {
      gsap.to(trailer, { scale: 4 });
    };
    const onMouseLeave = () => {
      gsap.to(trailer, { scale: 1 });
    };

    const onScroll = () => {
      gsap.to(trailer, {
        scale: 1,
      });
    };
    window.addEventListener("scroll", onScroll);

    h1.forEach((h1) => {
      h1.addEventListener("mouseenter", onMouseEnter);
      h1.addEventListener("mouseleave", onMouseLeave);
    });
    p.forEach((p) => {
      p.addEventListener("mouseenter", onMouseEnter);
      p.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      h1.forEach((h1) => {
        h1.removeEventListener("mouseenter", onMouseEnter);
        h1.removeEventListener("mouseleave", onMouseLeave);
      });
      p.forEach((p) => {
        p.removeEventListener("mouseenter", onMouseEnter);
        p.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={trailerRef}
      id="trailer"
      className="h-6 w-6 opacity-0 bg-white rounded-[50%] z-[9999] fixed top-0 left-0 pointer-events-none mix-blend-difference p-[10px] flex justify-center items-center transition-opacity duration-500"
    ></div>
  );
}

export default MouseTrailer;
