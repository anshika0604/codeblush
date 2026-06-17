"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(percentage);
    };

    calculateProgress();

    window.addEventListener("scroll", calculateProgress);

    return () =>
      window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 z-[9999] h-[3px] w-full">
        <div
          className="
            h-full
            bg-gradient-to-r
            from-[#D99CA4]
            via-[#E8B4B8]
            to-[#F7D7D9]
            shadow-[0_0_12px_rgba(217,156,164,0.6)]
            transition-all
            duration-100
          "
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* Progress Percentage */}
      <div
  className="
    hidden md:flex
    fixed
    right-8
    bottom-8
    z-50

    flex-col
    items-center

    rounded-3xl

    border
    border-[#EFE7E1]

    bg-white/95
    backdrop-blur-md

    px-6
    py-5

    shadow-[0_15px_50px_rgba(0,0,0,0.08)]
  "
>
  <span className="text-2xl">☕</span>

  <span
    className="
      mt-2
      font-playfair
      text-2xl
      text-[#2E2A27]
    "
  >
    {Math.round(progress)}%
  </span>

  <span
    className="
      mt-1
      text-xs
      uppercase
      tracking-[0.2em]
      text-[#8A817C]
    "
  >
    Reading
  </span>
</div>
    </>
  );
}