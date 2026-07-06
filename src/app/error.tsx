"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="es">
      <body className="flex min-h-screen items-center justify-center bg-sky-50 p-6 text-slate-900">
        <div className="max-w-lg rounded-3xl bg-white p-8 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Ocurrió un error</p>
          <h1 className="mt-4 text-3xl font-black">La invitación no pudo cargarse.</h1>
          <p className="mt-3 text-slate-600">Reintenta para recuperar la vista correctamente.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 rounded-full bg-sky-700 px-5 py-3 font-semibold text-white"
          >
            Reintentar
          </button>
        </div>
      </body>
    </html>
  );
}
