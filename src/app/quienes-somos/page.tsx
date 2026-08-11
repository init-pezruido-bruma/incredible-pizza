import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeading, PageSection } from "@/components/layout/page-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

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
] as const;

const values = [
  { number: "01", title: "Hablar bonito", description: "Comunicarnos positivamente y con respeto mutuo." },
  { number: "02", title: "Trabajar seguro", description: "Cuidarnos a nosotros y a los demás." },
  { number: "03", title: "En equipo, siempre", description: "Servir y ayudar donde se necesite." },
  { number: "04", title: "El cambio nos emociona", description: "Tomar los cambios con espíritu de enseñanza." },
  { number: "05", title: "Verse y sentirse bien", description: "Atención, vestimenta e higiene personal." },
  { number: "06", title: "Honesto, leal y amigable", description: "Ser prácticos y amables en cada turno." },
] as const;

export default function QuienesSomosPage() {
  return (
    <>
      <PageSection clearHeader className="bg-gradient-to-b from-brand-orange to-brand-red py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-[clamp(2.75rem,8vw,4.5rem)] font-black leading-[0.92]">
            ¿Quiénes somos?
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            El mejor centro de entretenimiento familiar de los Estados Unidos, ahora en México.
            America’s Incredible Pizza Company fue fundado en Springfield, Missouri en 2002.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="min-h-12 w-full border-2 border-black sm:w-auto">
              <Link href="/menu">Compra aquí</Link>
            </Button>
          </div>
        </div>
        <Reveal className="relative mx-auto mt-12 aspect-[21/9] max-w-5xl overflow-hidden rounded-[1.5rem] shadow-xl sm:rounded-[1.75rem]">
          <Image
            src="/images/about/monterrey-hero.jpg"
            alt="Monterrey es Increíble — mascota y auto clásico"
            fill
            priority
            sizes="(max-width:1280px) 100vw, 1024px"
            className="object-cover"
          />
        </Reveal>
      </PageSection>

      <PageSection className="bg-gradient-to-r from-brand-yellow via-[#f5d84a] to-[#6ba3d4] py-14 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95] text-white drop-shadow">
            Experiencias Increíbles
          </h2>
          <p className="text-lg font-semibold leading-relaxed text-brand-ink/85">
            Familias y amigos vienen juntos a Incredible Pizza a disfrutar experiencias increíbles y
            crear recuerdos memorables, logrando que regresen una y otra vez.
          </p>
        </div>
      </PageSection>

      <PageSection className="bg-white py-14 sm:py-20">
        <div className="grid overflow-hidden rounded-[1.75rem] bg-brand-cream/60 lg:grid-cols-2">
          <div className="order-2 space-y-4 p-6 sm:p-10 lg:order-1">
            <h2 className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-black leading-tight text-brand-blue">
              En America’s Incredible Pizza Company reunimos a las familias y amigos a través de la
              buena comida y gran diversión.
            </h2>
            <p className="text-base leading-relaxed text-brand-ink/80">
              Nuestro objetivo es ofrecer un sitio seguro, muy divertido y con una excelente propuesta
              de comida. Sabemos que la primera vez nos visitan por la novedad, pero las siguientes
              por la increíble experiencia.
            </p>
          </div>
          <div className="relative order-1 aspect-[4/5] min-h-[240px] lg:order-2 lg:min-h-0">
            <Image
              src="/images/about/buffet-interior.jpg"
              alt="Buffet de Incredible Pizza"
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-b from-brand-red to-brand-orange py-14 text-white sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95]">
            Declaración de nuestra misión
          </h2>
          <ol className="space-y-6">
            {missionItems.map((item) => (
              <li
                key={item.number}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/20 pb-6 last:border-0"
              >
                <span className="font-display text-3xl font-black text-brand-yellow">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/90">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-b from-[#2b5899] to-brand-red py-14 text-white sm:py-20">
        <PageHeading title="Valores familiares" eyebrow="Nuestras metas son" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal
              key={value.number}
              delay={i * 40}
              className="rounded-[1.35rem] bg-white p-5 text-brand-ink shadow-md"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-yellow text-sm font-black text-brand-ink">
                {value.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-black text-brand-blue">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">{value.description}</p>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-r from-brand-red to-brand-orange py-14 text-white sm:py-16">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="max-w-xl font-display text-[clamp(1.85rem,5vw,2.75rem)] font-black leading-[0.95] md:-rotate-2">
            Conoce a todos nuestros personajes y comedores
          </h2>
          <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
            <Link href="/juegos">Ver más</Link>
          </Button>
        </div>
      </PageSection>
    </>
  );
}
