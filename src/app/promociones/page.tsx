import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeading, PageSection } from "@/components/layout/page-section";
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
    alt: "Promoción grupos",
    title: "Reserva tu evento",
  },
  {
    src: "/images/eventos/promo-escolares.jpg",
    alt: "Promoción escolares",
    title: "Paquetes escolares",
  },
  {
    src: "/images/eventos/promo-recarga.jpg",
    alt: "Promoción recarga",
    title: "Recarga y gana",
  },
] as const;

export default function PromocionesPage() {
  return (
    <>
      <PageSection clearHeader className="bg-gradient-to-b from-[#fff8e0] via-brand-yellow to-brand-orange py-14 sm:py-20">
        <PageHeading
          tone="ink"
          title="Promociones del mes"
          description="Ofertas para grupos, escuelas y recargas. Pregunta en sucursal o cotiza tu evento."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {promos.map((promo, i) => (
            <Reveal key={promo.src} delay={i * 70} className="group">
              <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-lg">
                <Image
                  src={promo.src}
                  alt={promo.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  priority={i === 0}
                />
              </div>
              <h2 className="mt-4 text-center font-display text-2xl font-black text-brand-ink">
                {promo.title}
              </h2>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
            <Link href="/eventos#cotizar">Cotizar evento</Link>
          </Button>
          <Button
            asChild
            variant="outlineDark"
            size="lg"
            className="min-h-12 w-full border-2 sm:w-auto"
          >
            <Link href="/fiestas">Ver fiestas</Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
