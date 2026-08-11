import Image from "next/image";
import type { Metadata } from "next";
import { PageHeading, PageSection } from "@/components/layout/page-section";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menú To-Go",
  description:
    "Pizzas, boneless, alitas, complementos y refrescos para llevar. Encuéntranos en DiDi Food, Rappi y Uber Eats.",
  alternates: { canonical: "/menu" },
};

const pizzas = [
  {
    name: "Pepperoni",
    description: "Clásica con pepperoni y queso mozzarella.",
    price: "$159",
    image: "/images/menu/pizza-pepperoni.jpg",
  },
  {
    name: "Hawaiiana",
    description: "Jamón y piña.",
    price: "$159",
    image: "/images/menu/pizza-pepperoni.jpg",
  },
  {
    name: "Mexicana",
    description: "Salsa de frijol, queso, chorizo, pico de gallo y chipotle.",
    price: "$159",
    image: "/images/menu/pizza-pepperoni.jpg",
  },
  {
    name: "Especialidad",
    description: "Mitad pepperoni y mitad queso.",
    price: "$159",
    image: "/images/menu/pizza-pepperoni.jpg",
  },
] as const;

const starters = [
  {
    name: "Boneless",
    description: "Elige entre salsa Buffalo o BBQ.",
    price: "$119",
    image: "/images/menu/nuggets.jpg",
  },
  {
    name: "Alitas",
    description: "Elige entre salsa Buffalo o BBQ.",
    price: "$139",
    image: "/images/menu/wings.jpg",
  },
] as const;

const sides = [
  { name: "Papas a la francesa", price: "$55", description: "300 grs de papas a la francesa." },
  { name: "Dedos de queso", price: "$60 c/u", description: "4 pz con papas y salsa marinara." },
  { name: "Espaguetti", price: "$55", description: "Medio litro con salsa de tomate." },
  { name: "Puré de papa", price: "$55", description: "Medio litro con gravy." },
] as const;

const drinks = [
  { name: "Coca-Cola / Fanta / Joya", price: "$20", description: "500 ml" },
  { name: "Agua natural", price: "$20", description: "600 ml" },
  { name: "Coca-Cola 1.75 L", price: "$55", description: "Regular o Zero" },
] as const;

export default function MenuPage() {
  return (
    <>
      <PageSection clearHeader className="bg-gradient-to-b from-brand-orange to-brand-red py-14 text-white sm:py-20">
        <PageHeading title="Pizzas" className="mb-12" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pizzas.map((item, i) => (
            <Reveal key={item.name} delay={i * 50} className="text-center">
              <div className="relative mx-auto aspect-square max-w-[220px] overflow-hidden rounded-full bg-white/10 shadow-lg">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="220px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
              <h2 className="mt-5 font-display text-2xl font-black text-brand-yellow">{item.name}</h2>
              <p className="mt-1 text-sm text-white/85">{item.description}</p>
              <p className="mt-2 text-xl font-black tabular-nums">{item.price}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, quiero ordenar del Menú To Go")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-whatsapp px-8 text-sm font-extrabold uppercase tracking-wide text-white shadow-md transition hover:brightness-105"
          >
            ¡Compra aquí!
          </a>
        </div>
      </PageSection>

      <div className="bg-brand-red py-6 text-white">
        <div className="mx-auto max-w-6xl px-5 text-center sm:px-8 lg:px-10">
          <p className="font-display text-2xl font-black sm:text-3xl">Ingrediente extra $25 c/u</p>
          <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
            Cebolla · Jalapeño · Piña · Champiñones · Chorizo · Pico de gallo · Pepperoni · Aceitunas ·
            Morrón · Tocino · Jamón · Salami
          </p>
        </div>
      </div>

      <PageSection className="bg-gradient-to-b from-[#4a306d] via-brand-red to-brand-orange py-14 text-white sm:py-20">
        <PageHeading title="De todo un poco" className="mb-4" />
        <p className="mx-auto mb-12 w-fit rounded-full bg-brand-yellow px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-ink sm:text-sm">
          Elige entre salsa Buffalo o BBQ
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {starters.map((item, i) => (
            <Reveal key={item.name} delay={i * 70} className="text-center">
              <div className="relative mx-auto aspect-[4/3] max-w-md overflow-hidden rounded-[1.5rem] shadow-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 font-display text-3xl font-black text-brand-yellow">{item.name}</h3>
              <p className="mt-1 text-sm text-white/85">{item.description}</p>
              <p className="mt-2 text-2xl font-black tabular-nums">{item.price}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-b from-brand-blue to-[#1a2b56] py-14 text-white sm:py-20">
        <PageHeading title="Complementos" align="left" className="mb-10" />
        <div className="grid gap-4 md:grid-cols-2">
          {sides.map((item) => (
            <div
              key={item.name}
              className="flex items-baseline justify-between gap-4 border-b border-white/20 py-4"
            >
              <div>
                <h3 className="font-display text-xl font-black text-brand-yellow sm:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-white/80">{item.description}</p>
              </div>
              <span className="shrink-0 text-lg font-black tabular-nums">{item.price}</span>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-br from-brand-red via-[#2b5899] to-brand-blue-deep py-14 text-white sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-[clamp(2.75rem,8vw,4.5rem)] font-black leading-[0.9]">
              Refrescos
            </h2>
            <ul className="mt-10 space-y-4">
              {drinks.map((drink) => (
                <li key={drink.name}>
                  <div className="flex items-baseline justify-between gap-3 border-b border-white/25 pb-3">
                    <div>
                      <p className="font-display text-xl font-black text-brand-yellow">
                        {drink.name}
                      </p>
                      <p className="text-sm text-white/85">{drink.description}</p>
                    </div>
                    <span className="font-extrabold tabular-nums">{drink.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-sm">
            <Image
              src="/images/menu/coca-cola.jpg"
              alt="Refresco Coca-Cola"
              fill
              sizes="320px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </PageSection>

      <section className="bg-brand-red py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-5 text-center sm:flex-row sm:gap-10 sm:px-8 lg:px-10">
          <p className="font-extrabold uppercase tracking-[0.18em]">Encuéntranos en</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-black uppercase">
            <span>DiDi Food</span>
            <span>Rappi</span>
            <span>Uber Eats</span>
          </div>
        </div>
      </section>
    </>
  );
}
