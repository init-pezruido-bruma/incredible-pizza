import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FullImage } from "@/components/ui/full-image";
import { CircleFeature, PackageCard, SectionHeading } from "@/components/ui/section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fiestas infantiles",
  description:
    "Paquetes de fiesta en Incredible Pizza Monterrey: buffet, pastel, juegos y atracciones. Cotiza tu fiesta increíble.",
  alternates: { canonical: "/fiestas" },
};

const packages = [
  {
    name: "Fiesta Express",
    price: "$3,500",
    features: ["1 hr de juego + 1 atracción", "100 créditos (solo niños)", "Buffet incluido"],
  },
  {
    name: 'Mini Fiesta "Riley"',
    price: "$7,999",
    features: ["2 hrs de juego + 1 atracción", "200 créditos", "Buffet, pastel e invitaciones"],
    mascot: "/images/fiestas/mascot-riley.jpg",
  },
  {
    name: "Fiesta Rosie The Cat",
    price: "$11,999",
    features: ["3 hrs de juego + 3 atracciones", "300 créditos", "Buffet, pastel e invitaciones"],
  },
  {
    name: "Fiesta Turbo Tiger",
    price: "$15,999",
    features: ["4 hrs + atracciones ilimitadas", "Créditos ilimitados", "Buffet, pastel e invitaciones"],
  },
];

export default function FiestasPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-orange to-brand-red py-10 text-white sm:py-14 lg:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="order-2 space-y-5 text-center lg:order-1 lg:text-left">
 <h1 className="font-display text-[clamp(2rem,8vw,3.75rem)] font-black leading-tight">
              Tu fiesta increíble te espera
            </h1>
            <p className="mx-auto max-w-xl text-base text-white/90 sm:text-lg lg:mx-0">
              Celebra en un espacio diseñado para que cada momento sea único e inolvidable,
              todo el año, sin importar el clima.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
                <Link href="#cotizar">Cotizar mi fiesta</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-12 w-full sm:w-auto">
                <a href="#paquetes">Ver paquetes</a>
              </Button>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <FullImage
              src="/images/fiestas/hero-party.jpg"
              alt="Invitados celebrando en Incredible Pizza"
              width={3840}
              height={1295}
              priority
              sizes="(max-width:1024px) 100vw, 520px"
              maxHeightClass="max-h-[200px] sm:max-h-[260px]"
              className="shadow-xl"
            />
            <Image
              src="/images/fiestas/hosting-circle.jpg"
              alt="Staff preparando la mesa de fiesta"
              width={978}
              height={978}
              sizes="144px"
              className="absolute -bottom-5 left-2 size-24 rounded-full border-4 border-dashed border-black object-contain shadow-lg sm:-bottom-6 sm:size-36"
            />
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-brand-blue to-brand-purple py-12 text-white sm:py-16">
        <Container>
          <SectionHeading
            title="El mejor lugar para celebrar"
            eyebrow="4 razones para hacer tu fiesta con nosotros"
            className="mb-10"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <CircleFeature
              title="Juegos ilimitados"
              description="Arcade, atracciones y diversión sin parar."
              image="/images/fiestas/reason-laser.jpg"
            />
            <CircleFeature
              title="Buffet"
              description="Pizza y más para todos los invitados."
              image="/images/menu/buffet.jpg"
            />
            <CircleFeature
              title="Escenografía incluida"
              description="Ambiente listo para celebrar."
              image="/images/fiestas/party-room.jpg"
            />
            <CircleFeature
              title="Todo el año"
              description="Espacios climatizados, lluvia o sol."
              image="/images/fiestas/reason-trampolines.jpg"
            />
          </div>
        </Container>
      </section>

      <section id="paquetes" className="bg-gradient-to-b from-brand-yellow to-brand-orange py-12 sm:py-16">
        <Container>
          <SectionHeading
            tone="yellow"
            title="Celebra con nosotros"
            description="Todos incluyen buffet ilimitado, pastel, invitaciones y palomitas ilimitadas."
            className="mb-12"
          />
          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
          <div id="cotizar" className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="font-bold text-brand-ink">Agenda al {siteConfig.phone}</p>
            <Button asChild size="xl" variant="secondary" className="min-h-12 w-full sm:w-auto">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, quiero cotizar una fiesta")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu fiesta
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <FullImage
            src="/images/fiestas/party-table.jpg"
            alt="Mesa de fiesta con pizza y cupcakes"
            width={1622}
            height={1767}
            sizes="(max-width:1024px) 100vw, 480px"
            maxHeightClass="max-h-[240px] sm:max-h-[320px]"
            className="shadow-lg"
          />
          <div>
 <h2 className="font-display text-[clamp(1.75rem,6vw,2.5rem)] font-black text-brand-blue">
              Haz tu fiesta aún más especial
            </h2>
            <p className="mt-2 text-sm font-extrabold uppercase tracking-wide text-brand-orange">
              Agrega charolas, pasteles, dulces y más
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-brand-ink/80 sm:grid-cols-2">
              {[
                "Charola botana",
                "Charola frutas",
                "Mesa botana",
                "Bebidas recuerdo",
                "Pastel personalizado",
                "Dulces y confeti",
              ].map((item) => (
                <li key={item} className="rounded-full bg-brand-cream px-4 py-2.5 font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 via-brand-blue to-brand-orange py-12 text-white sm:py-14">
        <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
 <h2 className="font-display text-[clamp(2rem,8vw,3rem)] font-black md:-rotate-2">
            ¿Listo para reservar?
          </h2>
          <div className="w-full max-w-md space-y-4 md:w-auto">
            <p className="font-extrabold uppercase tracking-wide">
              Escríbenos y te damos tu cotización en minutos
            </p>
            <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cotizar por WhatsApp
              </a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
