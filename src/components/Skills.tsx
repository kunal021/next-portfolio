"use client";
import { useEffect, useRef } from "react";

function Skills() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
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
    <div>
      <video
        ref={videoRef}
        loop
        muted
        className="h-screen w-fit absolute object-cover"
      >
        <source src="/skills/cards-video.webm" type="video/webm" />
      </video>
      <p className="text-7xl font-extrabold text-white z-50">HIIIIIIIII</p>
    </div>
  );
}

export default Skills;
