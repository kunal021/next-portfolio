"use client";
import { useEffect, useRef } from "react";

function SkillBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);
  return (
    <video
      ref={videoRef}
      loop
      muted
      className="skillbackground h-screen w-full absolute object-cover -z-10 bg-cover opacity-30"
    >
      <source src="/skills/cards-video.webm" type="video/webm" />
    </video>
  );
}

export default SkillBackground;
