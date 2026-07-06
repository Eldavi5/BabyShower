import { type ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ title, children, className = "" }: SectionCardProps) {
  return (
    <section
      className={`rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_80px_rgba(66,102,170,0.11)] backdrop-blur-xl ${className}`}
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.38em] text-sky-700">{title}</h2>
      <div className="mt-4 text-slate-700">{children}</div>
    </section>
  );
}
