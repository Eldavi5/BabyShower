const hearts = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 9) % 100}%`,
  delay: `${index * 0.45}s`,
  duration: `${8 + (index % 4)}s`
}));

export function FloatingHearts() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-float absolute text-sky-200/70"
          style={{ left: heart.left, animationDelay: heart.delay, animationDuration: heart.duration }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
