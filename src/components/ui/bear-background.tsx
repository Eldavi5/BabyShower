const bears = Array.from({ length: 7 }, (_, index) => {
  const isLeft = index % 2 === 0;
  return {
    id: index,
    size: 52 + (index % 3) * 18,
    top: `${8 + index * 12}%`,
    left: isLeft ? `${-3 + (index % 3)}%` : `${77 + (index % 2) * 7}%`,
    delay: `${index * 0.6}s`,
    scale: 0.9 + (index % 3) * 0.12
  };
});

function BearShape({ size }: { size: number }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <span className="absolute left-2 top-1 h-[28%] w-[28%] rounded-full bg-amber-100 shadow-[inset_0_-8px_12px_rgba(255,255,255,0.5)]" />
      <span className="absolute right-2 top-1 h-[28%] w-[28%] rounded-full bg-amber-100 shadow-[inset_0_-8px_12px_rgba(255,255,255,0.5)]" />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#fff4d9_0%,#f9e3b7_38%,#f4c97f_100%)] shadow-[0_15px_45px_rgba(148,163,184,0.18)]" />
      <span className="absolute left-1/2 top-[42%] h-[42%] w-[42%] -translate-x-1/2 rounded-full bg-[#fff7eb] shadow-[inset_0_-8px_10px_rgba(255,255,255,0.5)]" />
      <span className="absolute left-[36%] top-[43%] h-[6%] w-[6%] rounded-full bg-slate-600/60" />
      <span className="absolute right-[36%] top-[43%] h-[6%] w-[6%] rounded-full bg-slate-600/60" />
      <span className="absolute left-1/2 top-[54%] h-[10%] w-[8%] -translate-x-1/2 rounded-full bg-slate-700/35" />
      <span className="absolute left-1/2 bottom-[6%] h-[12%] w-[45%] -translate-x-1/2 rounded-full bg-sky-200/35 blur-[4px]" />
    </div>
  );
}

export function BearBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,212,255,0.45),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.96),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(191,219,254,0.55),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.28)_0%,transparent_25%,rgba(125,211,252,0.08)_55%,transparent_100%)]" />
      {bears.map((bear) => (
        <div
          key={bear.id}
          className="bear-float absolute"
          style={{
            top: bear.top,
            left: bear.left,
            transform: `scale(${bear.scale})`,
            animationDelay: bear.delay
          }}
        >
          <BearShape size={bear.size} />
        </div>
      ))}
      <div className="absolute left-[12%] top-[16%] h-28 w-28 rounded-full bg-sky-200/20 blur-3xl" />
      <div className="absolute right-[16%] top-[52%] h-36 w-36 rounded-full bg-rose-100/20 blur-3xl" />
    </div>
  );
}
