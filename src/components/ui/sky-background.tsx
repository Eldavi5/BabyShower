"use client";

import React, { useEffect, useState } from "react";

// Paper Airplane SVG with customizable size
function PaperPlane({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`text-sky-400/50 ${className}`}
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

// Realistic modern passenger jet airliner SVG with customizable size
function RealisticAirliner({ className = "", size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-sky-500/55 ${className}`}
    >
      {/* Jet Body (Fuselage) */}
      <path
        d="M10 32 C 10 27, 20 25, 34 25 C 48 25, 58 27, 62 32 C 58 37, 48 39, 34 39 C 20 39, 10 37, 10 32 Z"
        fill="currentColor"
        stroke="#FFFFFF"
        strokeWidth="1.2"
      />
      {/* Cockpit window glass */}
      <path d="M54 29 C 56 29, 58 30, 59 32 L 53 32 Z" fill="#E0F2FE" />
      {/* Cabin windows (rows of small dots) */}
      <circle cx="22" cy="32" r="0.95" fill="#FFFFFF" />
      <circle cx="27" cy="32" r="0.95" fill="#FFFFFF" />
      <circle cx="32" cy="32" r="0.95" fill="#FFFFFF" />
      <circle cx="37" cy="32" r="0.95" fill="#FFFFFF" />
      <circle cx="42" cy="32" r="0.95" fill="#FFFFFF" />
      {/* Swept-back Wings span */}
      {/* Top wing */}
      <path d="M28 25 L 12 8 C 10 6, 14 4, 18 8 L 38 25 Z" fill="currentColor" opacity="0.85" stroke="#FFFFFF" strokeWidth="0.8" />
      {/* Bottom wing (with engines) */}
      <path d="M28 39 L 12 56 C 10 58, 14 60, 18 56 L 38 39 Z" fill="currentColor" stroke="#FFFFFF" strokeWidth="0.8" />
      {/* Turbofan Engines under wing */}
      <rect x="22" y="44" width="7" height="13" rx="2.5" fill="#1E293B" stroke="#FFFFFF" strokeWidth="0.5" />
      {/* Tail Fin */}
      <path d="M14 25 L 5 11 C 3 9, 7 7, 9 9 L 20 25 Z" fill="currentColor" opacity="0.9" stroke="#FFFFFF" strokeWidth="0.8" />
    </svg>
  );
}

// Cloud SVG with customizable size
function SkyCloud({ className = "", width = 120, height = 70 }: { className?: string; width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 70"
      fill="currentColor"
      className={`text-white/55 ${className}`}
    >
      <path d="M20 50C10 50 2 42 2 32C2 23 9 16 18 15C19 9 25 3 32 3C39 3 45 7 48 13C52 7 59 3 67 3C78 3 87 11 89 22C95 21 100 24 103 29C109 30 114 36 114 43C114 52 106 60 97 60H20V50Z" />
    </svg>
  );
}

export function SkyBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* 1. Large Paper Airplane Top-Left (Parallax Speed: 0.18) */}
      <div
        className="absolute left-[8%] top-[8%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.18}px) rotate(5deg)` }}
      >
        <PaperPlane size={48} className="text-sky-500/50" />
      </div>

      {/* 2. Fluffy Cloud Top-Right (Parallax Speed: -0.08) */}
      <div
        className="absolute right-[10%] top-[18%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * -0.08}px)` }}
      >
        <SkyCloud width={130} height={75} />
      </div>

      {/* 3. Big Airliner Jet Mid-Left-Top (Parallax Speed: -0.25) */}
      <div
        className="absolute left-[5%] top-[32%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.25}px) rotate(10deg)` }}
      >
        <RealisticAirliner size={72} className="text-sky-500/55" />
      </div>

      {/* 4. Medium Paper Airplane Mid-Right (Parallax Speed: 0.14) */}
      <div
        className="absolute right-[8%] top-[42%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.14}px) rotate(-10deg)` }}
      >
        <PaperPlane size={44} className="text-sky-400/50" />
      </div>

      {/* 5. Big Fluffy Cloud Mid-Left (Parallax Speed: 0.06) */}
      <div
        className="absolute left-[7%] top-[54%] transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${scrollY * 0.06}px)` }}
      >
        <SkyCloud width={140} height={80} className="text-white/45" />
      </div>

      {/* 6. Airliner Jet Mid-Right-Bottom (Parallax Speed: -0.18) */}
      <div
        className="absolute right-[6%] top-[62%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.18}px) scaleX(-1) rotate(-5deg)` }}
      >
        <RealisticAirliner size={64} className="text-sky-500/60" />
      </div>

      {/* 7. Large Paper Airplane Bottom-Left (Parallax Speed: 0.22) */}
      <div
        className="absolute left-[9%] top-[74%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.22}px) rotate(-18deg)` }}
      >
        <PaperPlane size={52} className="text-sky-500/55" />
      </div>

      {/* 8. Big Airliner Jet Bottom-Left (Parallax Speed: -0.15) */}
      <div
        className="absolute left-[6%] top-[84%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * -0.15}px) rotate(8deg)` }}
      >
        <RealisticAirliner size={76} className="text-sky-400/60" />
      </div>

      {/* 9. Medium Paper Airplane Bottom-Right (Parallax Speed: 0.25) */}
      <div
        className="absolute right-[9%] top-[90%] transition-transform duration-100 ease-out plane-float"
        style={{ transform: `translateY(${scrollY * 0.25}px) rotate(12deg)` }}
      >
        <PaperPlane size={46} className="text-sky-400/50" />
      </div>
    </div>
  );
}
export default SkyBackground;
