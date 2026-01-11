"use client";

import { useEffect, useState, useCallback } from "react";

export default function ScrollLogo() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const progress = scrollHeight > 0 ? Math.min(100, (currentScroll / scrollHeight) * 100) : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [updateScrollProgress]);

  return (
    <>
      {/* Progress border - overlays the dashed border */}
      <div
        className="fixed top-0 left-0 w-0.5 bg-gradient-to-b from-white via-white/80 to-white/60 z-50 pointer-events-none hidden lg:block"
        style={{
          left: "max(0px, calc((100vw - 1440px) / 2))",
          height: `${scrollProgress}vh`,
          transition: "height 0.15s ease-out",
        }}
      />

      {/* Percentage indicator */}
      <div
        className="fixed z-50 pointer-events-none hidden lg:flex items-center gap-2"
        style={{
          left: "max(8px, calc((100vw - 1440px) / 2 + 8px))",
          top: `${Math.max(scrollProgress, 5)}vh`,
          transform: "translateY(-50%)",
          transition: "top 0.15s ease-out",
        }}
      >
        <span className="tabular-nums text-[10px] font-mono text-white/80 px-3 py-1 border border-white/20 rounded-full bg-black/50 backdrop-blur-sm">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </>
  );
}
