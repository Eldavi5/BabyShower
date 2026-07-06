"use client";

import type { Locale } from "@/data/invitation";

interface LanguageSwitchProps {
  locale: Locale;
  onToggle: () => void;
  label: string;
}

export function LanguageSwitch({ locale, onToggle, label }: LanguageSwitchProps) {
  const isSpanish = locale === "es";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="group inline-flex items-center gap-3 rounded-full border border-white/80 bg-white/92 p-1.5 pr-4 text-xs font-bold text-slate-700 shadow-[0_12px_32px_rgba(56,189,248,0.12)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white active:scale-95 cursor-pointer outline-none select-none"
      aria-label={label}
    >
      {/* Slider track */}
      <span className={`relative flex h-8 w-15 shrink-0 items-center rounded-full p-0.5 transition-colors duration-300 ${isSpanish ? "bg-sky-600" : "bg-sky-400"}`}>
        {/* Sliding Bear Head Handle */}
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-out transform ${
            isSpanish ? "translate-x-0" : "translate-x-7"
          } group-hover:scale-105`}
        >
          {/* Cute Bear Head vector */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:rotate-[15deg]"
          >
            {/* Ears */}
            <circle cx="7.5" cy="7.5" r="3.5" fill="#E6C280" />
            <circle cx="7.5" cy="7.5" r="1.8" fill="#FCE7F3" />
            <circle cx="20.5" cy="7.5" r="3.5" fill="#E6C280" />
            <circle cx="20.5" cy="7.5" r="1.8" fill="#FCE7F3" />

            {/* Head */}
            <circle cx="14" cy="15" r="9.5" fill="#E6C280" />

            {/* Snout */}
            <ellipse cx="14" cy="18.5" rx="3.5" ry="2.2" fill="#FFFBF2" />
            <path
              d="M13 18C13 17.5 14 17 14 17C14 17 15 17.5 15 18C15 18.5 14 19 14 19C14 19 13 18.5 13 18Z"
              fill="#334155"
            />

            {/* Cheek blush */}
            <circle cx="8.5" cy="17" r="1" fill="#FCA5A5" />
            <circle cx="19.5" cy="17" r="1" fill="#FCA5A5" />

            {/* Happy arch eyes */}
            <path
              d="M9 14C9.5 13 10.5 13 11 14"
              stroke="#334155"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M17 14C17.5 13 18.5 13 19 14"
              stroke="#334155"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </span>
      </span>

      {/* Language Labels */}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[0.62rem] uppercase tracking-[0.3em] text-slate-400 font-bold">
          {isSpanish ? "Idioma" : "Language"}
        </span>
        <span className="mt-0.5 text-xs font-black text-slate-800 tracking-wider">
          {isSpanish ? "ES" : "EN"}
          <span className="mx-1 text-slate-300 font-normal">/</span>
          <span className="text-slate-400 font-semibold">{isSpanish ? "EN" : "ES"}</span>
        </span>
      </span>
    </button>
  );
}
export default LanguageSwitch;
