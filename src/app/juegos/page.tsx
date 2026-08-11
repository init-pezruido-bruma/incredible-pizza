import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { PageHeading, PageSection } from "@/components/layout/page-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Juegos y atracciones",
  description:
    "Go Karts, Laser Tag, Mini Boliche, Tiny Town y más de 120 videojuegos en Incredible Pizza Monterrey.",
  alternates: { canonical: "/juegos" },
};

const attractions = [
  {
    title: "Go Karts",
    description: "Velocidad y emoción en nuestra pista indoor.",
    image: "/images/juegos/gokarts.jpg",
    note: "Incluida en tarjetas platino, créditos y bonus.",
  },
  {
    title: "Laser Tag",
    description: "Estrategia, acción y adrenalina en equipo.",
    image: "/images/juegos/laser-tag.jpg",
    note: "Incluida en tarjetas platino, créditos y bonus.",
  },
  {
    title: "Trampolines",
    description: "Salta, rebota y libérate de energía.",
    image: "/images/juegos/trampolines.jpg",
    note: "Incluida en tarjetas de créditos.",
  },
  {
    title: "Racing Simulator",
    description: "Siente la velocidad de Rápido y Furioso.",
    image: "/images/juegos/racing-sim.jpg",
    note: "Esta máquina únicamente acepta créditos.",
  },
  {
    title: "Mini Boliche",
    description: "Diversión en familia, strike tras strike.",
    image: "/images/juegos/gokarts.jpg",
    note: "Incluida en tarjetas de tiempo y créditos.",
  },
  {
    title: "Bumper Cars",
    description: "Choques suaves y risas garantizadas.",
    image: "/images/juegos/racing-sim.jpg",
    note: "Incluida en tarjetas platino y créditos.",
  },
  {
    title: "Mini Golf",
    description: "Reto divertido para todas las edades.",
    image: "/images/juegos/trampolines.jpg",
    note: "Incluida en tarjetas de créditos.",
  },
  {
    title: "Resbaladeros",
    description: "Aventura vertical para los más valientes.",
    image: "/images/juegos/laser-tag.jpg",
    note: "Incluida en tarjetas platino y créditos.",
  },
] as const;

const incredibleGames = [
  {
    title: "Golden Games",
    description: "Máquinas de garra y premios directos.",
    image: "/images/juegos/tiny-town.jpg",
    note: "Lector multicolor",
  },
  {
    title: "Ticket Games",
    description: "Gana tickets y canjéalos por premios.",
    image: "/images/home/hero-juegos-increibles.jpg",
    note: "Redención en mostrador",
  },
  {
    title: "Videojuegos",
    description: "Más de 120 máquinas para toda la familia.",
    image: "/images/juegos/hero-laser.jpg",
    note: "Incluidos en tarjetas de tiempo",
  },
] as const;

export default function JuegosPage() {
  return (
    <>
      <PageHero
        variant="photo"
        title="Juegos"
        eyebrow="Diviértete como nunca"
        description="Arcade, atracciones y adrenalina para toda la familia en un solo lugar."
        image={{
          src: "/images/juegos/hero-laser.jpg",
          alt: "Familia jugando laser tag",
          width: 3840,
          height: 1714,
          objectPosition: "center 35%",
        }}
      >
        <Button asChild size="lg" className="min-h-12 w-full border-2 border-black sm:w-auto">
          <Link href="/menu">Compra aquí</Link>
        </Button>
      </PageHero>

      <PageSection className="bg-gradient-to-b from-brand-yellow via-[#ffb84a] to-brand-orange py-14 sm:py-20">
        <PageHeading title="Atracciones" className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {attractions.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 40}
              className="hover-lift flex flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_10px_24px_rgba(35,31,32,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                <h2 className="font-display text-xl font-black text-brand-blue">{item.title}</h2>
                <p className="text-sm text-brand-ink/75">{item.description}</p>
                <p className="mt-auto pt-2 text-[11px] font-extrabold uppercase tracking-wide text-brand-blue/80">
                  {item.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-white py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-black leading-[0.95] text-brand-blue">
              Videojuegos
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-brand-ink/80 sm:text-lg">
              Nuestro salón está lleno de más de 120 máquinas. Demuestra tu destreza, reúne a tus
              amigos y pasa una tarde llena de acción.
            </p>
            <p className="mt-5 text-sm font-extrabold uppercase tracking-wide text-brand-red">
              Todos los videojuegos están incluidos en las tarjetas de tiempo regular, platino,
              créditos y bonus.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-xl sm:rounded-[1.75rem]">
            <Image
              src="/images/juegos/racing-sim.jpg"
              alt="Simulador de carreras"
              width={1796}
              height={2108}
              sizes="(max-width:1024px) 100vw, 480px"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-b from-brand-purple to-brand-blue-deep py-14 text-white sm:py-20">
        <PageHeading title="Juegos Increíbles" className="mb-12" />
        <div className="grid gap-8 md:grid-cols-3">
          {incredibleGames.map((game, i) => (
            <Reveal key={game.title} delay={i * 60} className="text-center">
              <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[1.5rem] shadow-lg">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={800}
                  height={1000}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black text-brand-yellow">
                {game.title}
              </h3>
              <p className="mt-2 text-sm text-white/85">{game.description}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-wide text-brand-yellow/90">
                {game.note}
              </p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-b from-brand-red to-brand-orange py-14 text-white sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-yellow">
              Para los más pequeños
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.5rem,7vw,3.5rem)] font-black leading-[0.92]">
              Tiny Town
            </h2>
            <ul className="mt-6 space-y-2 text-base">
              {["Laberinto (Regular–Platino)", "Carrusel", "Mini Tagadá (Regular–Platino)", "Y más"].map(
                (item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-yellow">•</span>
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] shadow-xl">
              <Image
                src="/images/juegos/tiny-town.jpg"
                alt="Área Tiny Town para niños pequeños"
                width={3840}
                height={1514}
                sizes="(max-width:1024px) 100vw, 560px"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-4 rounded-full bg-brand-yellow px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
              Para niños 0–3 años (límite de estatura 1.10 m)
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
