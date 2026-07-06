"use client";

import { Music2, Pause, Play } from "lucide-react";
import { useBackgroundMusic } from "@/hooks/use-background-music";

export function MusicPlayer() {
  const { isPlaying, play, stop } = useBackgroundMusic();

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-3 shadow-lg shadow-sky-200/40 backdrop-blur">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700">
        <Music2 className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
          Música
        </p>
        <p className="text-sm text-slate-600">
          Ambientación suave para acompañar la invitación.
        </p>
      </div>
      <button
        type="button"
        onClick={isPlaying ? stop : play}
        className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-700 text-white transition hover:scale-105 hover:bg-sky-800"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
    </div>
  );
}
