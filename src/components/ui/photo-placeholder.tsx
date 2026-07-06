interface PhotoPlaceholderProps {
  title: string;
  caption: string;
  placeholder: string;
}

export function PhotoPlaceholder({ title, caption, placeholder }: PhotoPlaceholderProps) {
  return (
    <figure className="group relative overflow-hidden rounded-[1.75rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-white p-4 shadow-[0_20px_60px_rgba(125,156,206,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(125,156,206,0.18)]">
      <div className="flex aspect-[4/3] items-center justify-center rounded-[1.5rem] border border-dashed border-sky-200 bg-white/70 p-6 text-center">
        <div>
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 text-2xl text-sky-700 transition duration-500 group-hover:scale-110">
            {title === "Ultrasonido" || title === "Ultrasound" ? "🍼" : "🧸"}
          </div>
          <p className="text-sm font-semibold text-sky-800">{placeholder}</p>
          <p className="mt-1 text-xs text-slate-500">Imagen pendiente por cargar</p>
        </div>
      </div>
      <figcaption className="mt-4">
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{caption}</p>
      </figcaption>
    </figure>
  );
}
