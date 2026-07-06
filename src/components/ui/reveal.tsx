"use client";

import { type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayClassName?: string;
}

export function Reveal({ children, className = "", delayClassName = "" }: RevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${delayClassName} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
