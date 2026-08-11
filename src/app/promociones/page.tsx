import Link from "next/link";
import type { Metadata } from "next";
import { GalleryCarousel } from "@/components/home/gallery-carousel";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones del mes en Incredible Pizza Monterrey.",
  alternates: { canonical: "/promociones" },
};

const promos = [
  {
    src: "/images/eventos/promo-grupos.jpg",
    alt: "Promoción reserva tu evento",
  },
  {
    src: "/images/eventos/promo-escolares.jpg",
    alt: "Promoción paquetes escolares",
  },
  {
    src: "/images/eventos/promo-recarga.jpg",
    alt: "Promoción recarga y gana",
  },
] as const;

export default function PromocionesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#fff8e0] via-[#f5d84a] to-[#f5d84a] pb-12 pt-44 sm:pb-14 sm:pt-52 lg:pb-16 lg:pt-60">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-brand-ink/55">
              Este mes
            </p>
            <h1 className="hero-copy-in mt-1 font-display text-[clamp(2.75rem,8vw,4.75rem)] font-black leading-[0.92] text-brand-ink">
              Promociones
              <br className="sm:hidden" /> del mes
            </h1>
            <p className="hero-copy-in hero-copy-in-delay-1 mt-3 max-w-xl text-base font-medium leading-relaxed text-brand-ink/75 sm:text-lg">
              Ofertas para grupos, escuelas y recargas. Pregunta en sucursal o cotiza tu evento.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-8 sm:mt-10">
            <GalleryCarousel items={promos} showHeader={false} />
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="min-h-12 w-full border-2 border-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:w-auto"
            >
              <Link href="/eventos#cotizar">Cotizar evento</Link>
            </Button>
            <Button
              asChild
              variant="outlineDark"
              size="lg"
              className="min-h-12 w-full border-2 border-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:w-auto"
            >
              <Link href="/fiestas">Ver fiestas</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand-red via-[#e85a2a] to-brand-orange py-12 text-white sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="font-display text-[clamp(1.85rem,4.5vw,2.75rem)] font-black leading-[0.95]">
              ¿Listo para tu próximo evento?
            </h2>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-white/90 sm:text-base">
              Nosotros nos encargamos
            </p>
          </Reveal>
          <Reveal delay={60}>
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full border-2 border-black bg-white px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white sm:min-h-14 sm:px-10 sm:text-base"
            >
              <Link href="/eventos#cotizar">Cotizar mi evento</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
