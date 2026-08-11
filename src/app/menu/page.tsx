import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { MenuItemCard } from "@/components/ui/section";

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
  },
  {
    name: "Mexicana",
    description: "Salsa de frijol, queso, chorizo, pico de gallo y chipotle.",
    price: "$159",
  },
  {
    name: "Especialidad",
    description: "Mitad pepperoni y mitad queso.",
    price: "$159",
  },
];

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
];

const sides = [
  { name: "Papas a la francesa", price: "$55", description: "300 grs de papas a la francesa." },
  { name: "Dedos de queso", price: "$60 c/u", description: "4 pz con papas y salsa marinara." },
  { name: "Espaguetti", price: "$55", description: "Medio litro con salsa de tomate." },
  { name: "Puré de papa", price: "$55", description: "Medio litro con gravy." },
];

const drinks = [
  { name: "Coca-Cola / Fanta / Joya", price: "$20", description: "500 ml" },
  { name: "Agua natural", price: "$20", description: "600 ml" },
  { name: "Coca-Cola 1.75 L", price: "$55", description: "Regular o Zero" },
];

export default function MenuPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-orange to-brand-red py-12 text-white sm:py-16">
        <Container>
 <h1 className="mb-10 text-center font-display text-[clamp(2.5rem,10vw,3.75rem)] font-black ">
            Pizzas
          </h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pizzas.map((item) => (
              <MenuItemCard key={item.name} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-brand-red py-5 text-white">
        <Container>
          <p className="text-center font-extrabold uppercase tracking-wide">
            Ingrediente extra $25 c/u
          </p>
          <p className="mt-2 text-center text-sm text-white/85">
            Cebolla · Jalapeño · Piña · Champiñones · Chorizo · Pico de gallo · Pepperoni · Aceitunas ·
            Morrón · Tocino · Jamón · Salami
          </p>
        </Container>
      </div>

      <section className="bg-gradient-to-b from-brand-blue-deep to-brand-orange py-16 text-white">
        <Container>
 <h2 className="font-display text-4xl font-black sm:text-5xl">De todo un poco</h2>
          <p className="mt-3 inline-block -rotate-2 rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange px-4 py-2 text-sm font-extrabold uppercase text-brand-ink">
            Elige entre salsa Buffalo o BBQ
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {starters.map((item) => (
              <MenuItemCard key={item.name} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-14 text-white">
        <Container>
 <h2 className="mb-8 font-display text-4xl font-black ">Complementos</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {sides.map((item) => (
              <div key={item.name} className="rounded-2xl bg-white/10 px-5 py-4">
                <div className="flex items-baseline justify-between gap-3">
 <h3 className="font-display font-black text-brand-yellow">{item.name}</h3>
                  <span className="font-extrabold">{item.price}</span>
                </div>
                <p className="mt-1 text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-lime-400 to-brand-blue py-16 text-white">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div>
 <h2 className="font-display text-5xl font-black -rotate-6 sm:text-6xl">
              Refrescos
            </h2>
            <ul className="mt-10 space-y-4">
              {drinks.map((drink) => (
                <li key={drink.name}>
                  <div className="flex items-baseline justify-between gap-3 border-b border-white/25 pb-2">
                    <div>
 <p className="font-display font-black text-brand-yellow">{drink.name}</p>
                      <p className="text-sm text-white/85">{drink.description}</p>
                    </div>
                    <span className="font-extrabold">{drink.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/images/menu/coca-cola.jpg"
            alt="Refresco Coca-Cola"
            width={2841}
            height={2294}
            sizes="(max-width:1024px) 80vw, 320px"
            className="mx-auto h-auto w-full max-w-xs object-contain drop-shadow-2xl"
          />
        </Container>
      </section>

      <section className="bg-brand-red py-8 text-white">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
          <p className="font-extrabold uppercase tracking-[0.18em]">Encuéntranos en</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-black uppercase">
            <span>DiDi Food</span>
            <span>Rappi</span>
            <span>Uber Eats</span>
          </div>
        </Container>
      </section>
    </>
  );
}
