"use client";

import { type ReactNode, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayClassName?: string;
}

// Highly realistic airliner jet silhouette SVG pointing to the right
function JetSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`text-sky-600/75 drop-shadow-[0_4px_12px_rgba(3,105,161,0.22)] transform rotate-90 ${className}`}
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5L21 16z" />
    </svg>
  );
}

type AnimState = "idle" | "entering" | "visible" | "leaving";

export function Reveal({ children, className = "", delayClassName = "" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [animState, setAnimState] = useState<AnimState>("idle");

  useEffect(() => {
    let timeoutId: number;

    if (isVisible) {
      setAnimState("entering");
      timeoutId = window.setTimeout(() => {
        setAnimState("visible");
      }, 50);
    } else {
      if (animState === "visible" || animState === "entering") {
        setAnimState("leaving");
        // Reset to idle (off-screen left) after the leaving animation finishes (takes 1.1s)
        timeoutId = window.setTimeout(() => {
          setAnimState("idle");
        }, 1150); // 1150ms safely covers the 1.1s CSS transition duration
      }
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isVisible, animState]);

  // Determine plane & card transition classes based on state machine
  let jetClass = "opacity-0";
  let revealClass = "is-idle";

  if (animState === "entering" || animState === "visible") {
    revealClass = "is-visible";
    jetClass = "is-visible";
  } else if (animState === "leaving") {
    revealClass = "is-leaving";
    jetClass = "is-leaving";
  }

  return (
    /* Outer observed anchor wrapper stays in document flow to trigger IntersectionObserver on scroll */
    <div ref={ref} className="w-full relative min-h-[20px]">
      {/* Inner animated card container glides off-screen visually */}
      <div
        className={`scroll-reveal relative w-full ${delayClassName} ${revealClass} ${className}`}
      >
        {/* Jet silhouette attached to the leading edge (top-right) of the card */}
        <div className={`reveal-jet ${jetClass}`}>
          <JetSilhouette />
        </div>

        {children}
      </div>
    </div>
  );
}
export default Reveal;
