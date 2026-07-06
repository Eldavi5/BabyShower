"use client";

import { useBackgroundMusic } from "@/hooks/use-background-music";
import { Music2 } from "lucide-react";

interface MusicDockProps {
  title: string;
  description: string;
}

export function MusicDock({ title, description }: MusicDockProps) {
  const { isPlaying, play, stop } = useBackgroundMusic();

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {/* Self-contained styling for specialized music animations */}
      <style>{`
        @keyframes bearDance {
          0%, 100% { transform: rotate(-6deg) translateY(0px) scale(1); }
          50% { transform: rotate(6deg) translateY(-3px) scale(1.06); }
        }
        @keyframes cheekPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.15); }
        }
        @keyframes noteFloat1 {
          0% { transform: translate(0, 0) scale(0.6) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(12px, -55px) scale(1.1) rotate(15deg); opacity: 0; }
        }
        @keyframes noteFloat2 {
          0% { transform: translate(0, 0) scale(0.6) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(-14px, -60px) scale(1.1) rotate(-20deg); opacity: 0; }
        }
        @keyframes noteFloat3 {
          0% { transform: translate(0, 0) scale(0.5) rotate(0deg); opacity: 0; }
          20% { opacity: 0.8; }
          100% { transform: translate(8px, -45px) scale(1) rotate(10deg); opacity: 0; }
        }
        .anim-bear-dance {
          animation: bearDance 1.6s ease-in-out infinite;
          transform-origin: bottom center;
        }
        .anim-cheek-pulse {
          animation: cheekPulse 1.2s ease-in-out infinite;
        }
        .note-1 {
          animation: noteFloat1 2.2s linear infinite;
        }
        .note-2 {
          animation: noteFloat2 2.2s linear infinite;
          animation-delay: 0.7s;
        }
        .note-3 {
          animation: noteFloat3 2.2s linear infinite;
          animation-delay: 1.4s;
        }
      `}</style>

      <button
        type="button"
        onClick={isPlaying ? stop : play}
        className={`group relative flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-white/92 shadow-[0_18px_45px_rgba(59,130,246,0.22)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.3)] cursor-pointer outline-none ${
          isPlaying ? "ring-2 ring-sky-300" : ""
        }`}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {/* Animated Floating Music Notes when playing */}
        {isPlaying && (
          <>
            <span className="note-1 absolute top-2 right-2 text-xs select-none">🎵</span>
            <span className="note-2 absolute top-2 left-2 text-xs select-none">🎶</span>
            <span className="note-3 absolute top-1 left-6 text-[10px] select-none">✨</span>
          </>
        )}

        {/* Custom Bear SVG Container */}
        <div className={`relative w-12 h-12 flex items-center justify-center ${isPlaying ? "anim-bear-dance" : ""}`}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full select-none"
          >
            {/* Bear Ears */}
            <circle cx="16" cy="18" r="6.5" fill="#E6C280" />
            <circle cx="16" cy="18" r="3.5" fill="#FCE7F3" />
            <circle cx="40" cy="18" r="6.5" fill="#E6C280" />
            <circle cx="40" cy="18" r="3.5" fill="#FCE7F3" />

            {/* Bear Head */}
            <circle cx="28" cy="30" r="16.5" fill="#E6C280" />

            {/* Bear Snout */}
            <ellipse cx="28" cy="34" rx="5.5" ry="4" fill="#FFFBF2" />
            
            {/* Bear Nose */}
            <path
              d="M26.5 33.5C26.5 32.5 28 31.8 28 31.8C28 31.8 29.5 32.5 29.5 33.5C29.5 34.5 28 35.2 28 35.2C28 35.2 26.5 34.5 26.5 33.5Z"
              fill="#334155"
            />

            {/* Bear Mouth */}
            <path d="M28 35.5V37" stroke="#334155" strokeWidth="1" />

            {/* Cheek blush */}
            <circle
              cx="16.5"
              cy="32.5"
              r="2.5"
              fill="#FCA5A5"
              className={isPlaying ? "anim-cheek-pulse" : ""}
            />
            <circle
              cx="39.5"
              cy="32.5"
              r="2.5"
              fill="#FCA5A5"
              className={isPlaying ? "anim-cheek-pulse" : ""}
            />

            {/* Dynamic Eyes based on playing state */}
            {isPlaying ? (
              // Happy winking / dancing eyes (^ ^)
              <>
                <path
                  d="M18.5 28C19 26.5 21 26.5 21.5 28"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M34.5 28C35 26.5 37 26.5 37.5 28"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </>
            ) : (
              // Sleeping / resting eyes (u u)
              <>
                <path
                  d="M18.5 27.5C19 29 21 29 21.5 27.5"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M34.5 27.5C35 29 37 29 37.5 27.5"
                  stroke="#334155"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />
              </>
            )}

            {/* Baby-blue Headphones */}
            {/* Top Band */}
            <path
              d="M13.5 24C13.5 24 18.5 13 28 13C37.5 13 42.5 24 42.5 24"
              stroke="#0284C7"
              strokeWidth="3.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Left Cup */}
            <rect x="9.5" y="21.5" width="5.5" height="11" rx="2.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
            <rect x="13.5" y="23" width="2" height="8" rx="1" fill="#BAE6FD" />
            
            {/* Right Cup */}
            <rect x="41" y="21.5" width="5.5" height="11" rx="2.5" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" />
            <rect x="40.5" y="23" width="2" height="8" rx="1" fill="#BAE6FD" />
          </svg>
        </div>

        {/* Accessibility screen-reader fallback */}
        <span className="sr-only">
          {title}: {description}
        </span>
        <Music2 className="hidden" />
      </button>
    </div>
  );
}
export default MusicDock;
