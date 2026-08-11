"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";

export function EventQuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="rounded-[1.75rem] bg-white p-6 shadow-2xl sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
 <h3 className="font-display text-2xl font-black text-brand-blue">Pide tu cotización</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Nombre
          <input required name="nombre" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Correo
          <input required type="email" name="email" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Teléfono
          <input required type="tel" name="telefono" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Tipo de evento
          <select name="tipo" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Selecciona
            </option>
            <option>Social</option>
            <option>Escolar</option>
            <option>Play Date</option>
            <option>Posada</option>
            <option>Empresa</option>
          </select>
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Fecha
          <input type="date" name="fecha" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70">
          Personas
          <input type="number" min={1} name="personas" className={fieldClass} />
        </label>
        <label className="grid gap-1 text-xs font-bold uppercase tracking-wide text-brand-ink/70 sm:col-span-2">
          Comentarios
          <textarea name="comentarios" rows={3} className={cn(fieldClass, "resize-y")} />
        </label>
      </div>
      <Button type="submit" className="mt-5 w-full" size="lg">
        Enviar
      </Button>
      {sent ? (
        <p className="mt-3 text-center text-sm font-semibold text-emerald-700" role="status">
          ¡Gracias! Pronto te contactamos con tu cotización.
        </p>
      ) : null}
    </form>
  );
}
