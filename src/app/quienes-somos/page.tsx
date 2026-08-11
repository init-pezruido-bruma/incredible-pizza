import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FullImage } from "@/components/ui/full-image";
import { ValueCard } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "¿Quiénes somos?",
  description:
    "Conoce la historia, misión y valores familiares de America’s Incredible Pizza Company en Monterrey.",
  alternates: { canonical: "/quienes-somos" },
};

const missionItems = [
  {
    number: "01",
    title: "Principios de Dios",
    description: "Hemos elegido conducirnos de acuerdo a los principios de Dios.",
  },
  {
    number: "02",
    title: "Espíritu de cooperación",
    description: "Deseamos hacer de nuestro trabajo una aventura, con cooperación y diversión.",
  },
  {
    number: "03",
    title: "Altos niveles de calidad",
    description: "Calidad en comida y servicio a través de actitud, orgullo y moral fuerte.",
  },
  {
    number: "04",
    title: "Experiencia única",
    description: "Dar la bienvenida a cada cliente como a un viejo amigo.",
  },
  {
    number: "05",
    title: "Influencia positiva",
    description: "Involucrarnos con los niños de nuestra comunidad.",
  },
];

const values = [
  { number: "01", title: "Hablar bonito", description: "Comunicarnos positivamente y con respeto mutuo." },
  { number: "02", title: "Trabajar seguro", description: "Cuidarnos a nosotros y a los demás." },
  { number: "03", title: "En equipo, siempre", description: "Servir y ayudar donde se necesite." },
  { number: "04", title: "El cambio nos emociona", description: "Tomar los cambios con espíritu de enseñanza." },
  { number: "05", title: "Verse y sentirse bien", description: "Atención, vestimenta e higiene personal." },
  { number: "06", title: "Honesto, leal y amigable", description: "Ser prácticos y amables en cada turno." },
];

export default function QuienesSomosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-orange to-brand-red py-10 text-white sm:py-14 lg:py-16">
        <Container className="space-y-8 text-center">
 <h1 className="font-display text-[clamp(2rem,8vw,3.75rem)] font-black ">
            ¿Quiénes somos?
          </h1>
          <p className="mx-auto max-w-3xl text-base text-white/90 sm:text-lg">
            El mejor centro de entretenimiento familiar de los Estados Unidos, ahora en México.
            America’s Incredible Pizza Company fue fundado en Springfield, Missouri en 2002.
          </p>
          <Button asChild size="lg" variant="green" className="min-h-12 w-full sm:w-auto">
            <Link href="/menu">Compra aquí</Link>
          </Button>
          <FullImage
            src="/images/about/monterrey-hero.jpg"
            alt="Monterrey es Increíble — mascota y auto clásico"
            width={3840}
            height={1295}
            priority
            sizes="(max-width:1280px) 100vw, 1024px"
            maxHeightClass="max-h-[200px] sm:max-h-[260px] lg:max-h-[300px]"
            className="mx-auto max-w-5xl shadow-xl"
          />
        </Container>
      </section>

      <section className="bg-gradient-to-br from-brand-yellow via-white to-brand-blue py-12 sm:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
 <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black text-white drop-shadow">
            Experiencias Increíbles
          </h2>
          <p className="text-lg font-semibold text-brand-ink/85">
            Familias y amigos vienen juntos a Incredible Pizza a disfrutar experiencias increíbles y
            crear recuerdos memorables, logrando que regresen una y otra vez.
          </p>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container className="grid overflow-hidden rounded-[1.75rem] shadow-xl lg:grid-cols-2">
          <div className="order-2 space-y-4 p-6 sm:p-8 lg:order-1 lg:p-10">
 <h2 className="font-display text-[clamp(1.35rem,4vw,1.875rem)] font-black text-brand-blue">
              En America’s Incredible Pizza Company reunimos a las familias y amigos a través de la
              buena comida y gran diversión.
            </h2>
            <p className="text-brand-ink/80">
              Nuestro objetivo es ofrecer un sitio seguro, muy divertido y con una excelente propuesta
              de comida. Sabemos que la primera vez nos visitan por la novedad, pero las siguientes
              por la increíble experiencia.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <FullImage
              src="/images/about/buffet-interior.jpg"
              alt="Buffet de Incredible Pizza"
              width={1622}
              height={2116}
              sizes="(max-width:1024px) 100vw, 480px"
              maxHeightClass="max-h-[260px] sm:max-h-[340px]"
              rounded="rounded-none"
            />
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-brand-red to-brand-yellow py-12 text-white sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
 <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black ">
            Declaración de nuestra misión
          </h2>
          <ol className="space-y-5">
            {missionItems.map((item) => (
              <li key={item.number} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-display text-3xl font-black">{item.number}</span>
                <div>
 <h3 className="font-display text-lg font-black ">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-brand-blue to-brand-red py-12 text-white sm:py-16">
        <Container>
 <h2 className="mb-8 font-display text-[clamp(1.75rem,6vw,2.5rem)] font-black ">
            Valores familiares — nuestras metas son:
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.number} {...value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-brand-red to-brand-orange py-12 text-white sm:py-14">
        <Container className="flex flex-col items-center gap-5 text-center md:flex-row md:justify-between md:text-left">
 <h2 className="max-w-xl font-display text-[clamp(1.75rem,6vw,2.5rem)] font-black md:-rotate-2">
            Conoce a todos nuestros personajes y comedores
          </h2>
          <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
            <Link href="/juegos">Ver más</Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
