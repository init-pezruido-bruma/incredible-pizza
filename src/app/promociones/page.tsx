import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FullImage } from "@/components/ui/full-image";

export const metadata: Metadata = {
  title: "Promociones",
  description: "Promociones del mes en Incredible Pizza Monterrey.",
  alternates: { canonical: "/promociones" },
};

const promos = [
  { src: "/images/eventos/promo-grupos.jpg", alt: "Promoción grupos" },
  { src: "/images/eventos/promo-escolares.jpg", alt: "Promoción escolares" },
  { src: "/images/eventos/promo-recarga.jpg", alt: "Promoción recarga" },
];

export default function PromocionesPage() {
  return (
    <section className="bg-gradient-to-b from-brand-yellow to-brand-orange py-12 sm:py-16">
      <Container>
 <h1 className="mb-8 text-center font-display text-[clamp(2rem,8vw,3rem)] font-black text-brand-red">
          Promociones del mes
        </h1>
        <div className="grid gap-5 md:grid-cols-3">
          {promos.map((promo) => (
            <FullImage
              key={promo.src}
              src={promo.src}
              alt={promo.alt}
              width={1458}
              height={1444}
              sizes="(max-width:768px) 100vw, 33vw"
              className="shadow-lg"
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
            <Link href="/eventos">Ver eventos</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
