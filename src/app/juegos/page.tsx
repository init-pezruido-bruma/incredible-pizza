import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FullImage } from "@/components/ui/full-image";
import { SectionHeading } from "@/components/ui/section";

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
    width: 1676,
    height: 1004,
    note: "Atracción incluida en tarjetas de tiempo platino, créditos y bonus.",
  },
  {
    title: "Laser Tag",
    description: "Estrategia, acción y adrenalina en equipo.",
    image: "/images/juegos/laser-tag.jpg",
    width: 684,
    height: 684,
    note: "Atracción incluida en tarjetas de tiempo platino, créditos y bonus.",
  },
  {
    title: "Trampolines",
    description: "Salta, rebota y libérate de energía.",
    image: "/images/juegos/trampolines.jpg",
    width: 684,
    height: 684,
    note: "Atracción incluida en tarjetas de créditos.",
  },
  {
    title: "Racing Simulator",
    description: "Siente la velocidad de Rápido y Furioso.",
    image: "/images/juegos/racing-sim.jpg",
    width: 1796,
    height: 2108,
    note: "Esta máquina únicamente acepta créditos.",
  },
];

const incredibleGames = [
  {
    title: "Golden Games",
    description: "Máquinas de garra y premios directos.",
    image: "/images/juegos/tiny-town.jpg",
    width: 3840,
    height: 1514,
    note: "Lector multicolor",
  },
  {
    title: "Ticket Games",
    description: "Gana tickets y canjéalos por premios.",
    image: "/images/home/hero-juegos.jpg",
    width: 1612,
    height: 2170,
    note: "Redención en mostrador",
  },
  {
    title: "Videojuegos",
    description: "Más de 120 máquinas para toda la familia.",
    image: "/images/juegos/hero-laser.jpg",
    width: 3840,
    height: 1714,
    note: "Incluidos en tarjetas de tiempo",
  },
];

export default function JuegosPage() {
  return (
    <>
      <section className="overflow-hidden bg-brand-ink text-white">
        <div className="relative">
          <Image
            src="/images/juegos/hero-laser.jpg"
            alt="Familia jugando laser tag"
            width={3840}
            height={1714}
            priority
            sizes="100vw"
            className="mx-auto h-auto max-h-[min(42vh,360px)] w-full object-contain sm:max-h-[min(48vh,420px)]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-black/75 via-transparent to-transparent sm:block" />
          <Container className="absolute inset-x-0 bottom-0 hidden flex-col gap-2 pb-8 pt-16 sm:flex">
 <h1 className="font-display text-[clamp(2rem,6vw,3rem)] font-black leading-none">
              Juegos
            </h1>
            <p className="text-lg font-bold text-brand-yellow">diviértete como nunca</p>
            <Button asChild size="lg" className="min-h-11 w-fit">
              <Link href="/menu">Compra aquí</Link>
            </Button>
          </Container>
        </div>
        <Container className="flex flex-col gap-2 py-6 sm:hidden">
 <h1 className="font-display text-[clamp(2rem,9vw,2.75rem)] font-black leading-none">
            Juegos
          </h1>
          <p className="text-lg font-bold text-brand-yellow">diviértete como nunca</p>
          <Button asChild size="lg" className="min-h-12 w-full">
            <Link href="/menu">Compra aquí</Link>
          </Button>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-brand-yellow to-brand-orange py-12 sm:py-16">
        <Container>
          <SectionHeading title="Atracciones" className="mb-10" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {attractions.map((item) => (
              <article key={item.title} className="flex flex-col rounded-[1.5rem] bg-white p-3 shadow-lg">
                <FullImage
                  src={item.image}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  maxHeightClass="max-h-[180px] sm:max-h-[200px]"
                  rounded="rounded-[1.25rem]"
                />
                <div className="space-y-2 p-3 sm:p-4">
 <h2 className="font-display text-lg font-black text-brand-blue">{item.title}</h2>
                  <p className="text-sm text-brand-ink/75">{item.description}</p>
                  <p className="text-[11px] font-extrabold uppercase tracking-wide text-brand-blue">
                    {item.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
 <h2 className="font-display text-[clamp(1.75rem,5.5vw,2.5rem)] font-black text-brand-blue">
              Videojuegos
            </h2>
            <p className="mt-4 max-w-md text-brand-ink/80">
              Nuestro salón está lleno de más de 120 máquinas. Demuestra tu destreza, reúne a tus
              amigos y pasa una tarde llena de acción.
            </p>
            <p className="mt-4 text-sm font-extrabold uppercase text-brand-red">
              Todos los videojuegos están incluidos en las tarjetas de tiempo regular, platino,
              créditos y bonus.
            </p>
          </div>
          <FullImage
            src="/images/juegos/racing-sim.jpg"
            alt="Simulador de carreras"
            width={1796}
            height={2108}
            sizes="(max-width:1024px) 100vw, 420px"
            maxHeightClass="max-h-[260px] sm:max-h-[320px]"
            className="shadow-lg"
          />
        </Container>
      </section>

      <section className="bg-gradient-to-b from-brand-purple to-brand-blue-deep py-12 text-white sm:py-16">
        <Container>
          <SectionHeading title="Juegos Increíbles" className="mb-10" />
          <div className="grid gap-6 md:grid-cols-3">
            {incredibleGames.map((game) => (
              <article key={game.title} className="text-center">
                <FullImage
                  src={game.image}
                  alt={game.title}
                  width={game.width}
                  height={game.height}
                  sizes="(max-width:768px) 100vw, 33vw"
                  maxHeightClass="max-h-[200px] sm:max-h-[220px]"
                  rounded="rounded-[1.5rem]"
                  className="mb-4 shadow-md"
                />
 <h3 className="font-display text-xl font-black text-brand-yellow">{game.title}</h3>
                <p className="mt-2 text-sm text-white/85">{game.description}</p>
                <p className="mt-2 text-xs font-bold uppercase text-brand-yellow">{game.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-red py-12 text-white sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.2em]">Para los más pequeños</p>
 <h2 className="mt-2 font-display text-[clamp(2rem,7vw,2.75rem)] font-black ">
              Tiny Town
            </h2>
            <ul className="mt-6 space-y-2 text-sm">
              {["Laberinto (Regular–Platino)", "Carrusel", "Mini Tagadá (Regular–Platino)", "Y más"].map(
                (item) => (
                  <li key={item} className="flex gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <FullImage
              src="/images/juegos/tiny-town.jpg"
              alt="Área Tiny Town para niños pequeños"
              width={3840}
              height={1514}
              sizes="(max-width:1024px) 100vw, 480px"
              maxHeightClass="max-h-[220px] sm:max-h-[280px]"
              className="shadow-lg"
            />
            <p className="mt-3 rounded-full bg-brand-orange px-4 py-2.5 text-center text-xs font-extrabold uppercase">
              Para niños 0–3 años (límite de estatura 1.10 m)
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
