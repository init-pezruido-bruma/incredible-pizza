import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeading, PageSection } from "@/components/layout/page-section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { EventQuoteForm } from "@/features/eventos/event-quote-form";

export const metadata: Metadata = {
  title: "Eventos grupales y corporativos",
  description:
    "Eventos escolares, empresariales, posadas y play dates en Incredible Pizza Monterrey. Grupos desde 25 personas.",
  alternates: { canonical: "/eventos" },
};

const eventTypes = [
  {
    title: "Sociales",
    price: "Desde $X,XXX",
    features: ["Buffet", "Créditos de juego", "Espacio reservado"],
    accent: "text-brand-blue",
  },
  {
    title: "Escolares",
    price: "Desde $X,XXX",
    features: ["Paquetes por alumno", "Atracciones", "Supervisión"],
    accent: "text-brand-red",
  },
  {
    title: "Play Dates",
    price: "Desde $X,XXX",
    features: ["Grupos pequeños", "Juegos", "Snacks"],
    accent: "text-brand-orange",
  },
  {
    title: "Posadas",
    price: "Desde $X,XXX",
    features: ["Temática", "Buffet", "Música y ambientación"],
    accent: "text-[#2b5899]",
  },
  {
    title: "Empresas",
    price: "Desde $X,XXX",
    features: ["Team building", "Coffee break", "Salones"],
    accent: "text-brand-orange-deep",
  },
] as const;

const heroPhotos = [
  { src: "/images/eventos/holiday.jpg", alt: "Evento festivo" },
  { src: "/images/eventos/live-show.jpg", alt: "Show en vivo" },
  { src: "/images/eventos/gallery-party.jpg", alt: "Fiesta montada" },
] as const;

const gallery = [
  { src: "/images/eventos/gallery-party.jpg", alt: "Fiesta montada", wide: false },
  { src: "/images/eventos/live-show.jpg", alt: "Show en vivo", wide: false },
  { src: "/images/eventos/holiday.jpg", alt: "Evento festivo", wide: true },
] as const;

const promos = [
  { src: "/images/eventos/promo-grupos.jpg", alt: "Promoción reserva tu evento" },
  { src: "/images/eventos/promo-escolares.jpg", alt: "Promoción paquetes escolares" },
  { src: "/images/eventos/promo-recarga.jpg", alt: "Promoción recarga y gana" },
] as const;

export default function EventosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-orange to-brand-red pb-12 pt-32 text-white sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-44">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <Reveal className="space-y-5">
              <h1 className="font-display text-[clamp(2.5rem,7vw,4rem)] font-black leading-[0.95]">
                Eventos que nunca se olvidan
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                Paquetes con buffet, créditos de juego y logística personalizada para cada tipo de
                celebración.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                <span className="rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-ink">
                  Grupos desde 25 personas
                </span>
                <span className="rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-ink">
                  Mínimo 10 personas con tarjeta
                </span>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
                  <a href="#cotizar">Cotizar mi evento</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="min-h-12 w-full border-2 border-white text-white sm:w-auto"
                >
                  <Link href="/promociones">Ver promociones</Link>
                </Button>
              </div>
            </Reveal>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {heroPhotos.map((photo, i) => (
                <Reveal
                  key={photo.src}
                  delay={i * 70}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl sm:rounded-[1.25rem]"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="33vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-brand-red py-3.5 text-white">
        <p className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-center text-sm font-extrabold uppercase tracking-[0.18em]">
          Todos tus eventos en un lugar increíble · Buffet · Juegos · Atracciones · Fiestas ·
          Corporativos · Escolares ·
        </p>
      </div>

      <PageSection className="bg-gradient-to-b from-brand-blue-deep to-brand-purple py-14 text-white sm:py-20">
        <PageHeading title="Cinco formas de celebrar" className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {eventTypes.map((event, i) => (
            <Reveal
              key={event.title}
              delay={i * 50}
              className="flex h-full flex-col rounded-[1.5rem] bg-white p-6 text-brand-ink shadow-lg xl:last:col-span-1"
            >
              <h2 className={`font-display text-2xl font-black ${event.accent}`}>{event.title}</h2>
              <p className="mt-1 font-extrabold text-brand-ink/70">{event.price}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm text-brand-ink/75">
                {event.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button asChild className="mt-5 min-h-11 w-full" size="sm">
                <a href="#cotizar">Cotizar</a>
              </Button>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-brand-red py-14 text-white sm:py-20">
        <PageHeading align="left" title="Así se ven nuestros eventos" className="mb-10" />
        <div className="grid gap-4 sm:grid-cols-2">
          {gallery.map((item) => (
            <div
              key={item.src + item.alt}
              className={`relative overflow-hidden rounded-[1.5rem] ${item.wide ? "aspect-[21/9] sm:col-span-2" : "aspect-[4/5] sm:aspect-[4/3]"}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={item.wide ? "100vw" : "(max-width:640px) 100vw, 50vw"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-gradient-to-b from-[#fff8e0] via-brand-yellow to-brand-orange py-14 sm:py-20">
        <h2 className="mb-10 text-center font-display text-[clamp(2rem,5.5vw,3.25rem)] font-black text-brand-red">
          Promociones del mes
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {promos.map((promo, i) => (
            <Reveal
              key={promo.src}
              delay={i * 60}
              className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-lg"
            >
              <Image
                src={promo.src}
                alt={promo.alt}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="secondary" size="lg" className="min-h-12 w-full sm:w-auto">
            <Link href="/promociones">Ver todas</Link>
          </Button>
        </div>
      </PageSection>

      <section
        id="cotizar"
        className="relative overflow-hidden bg-cover bg-center py-14 sm:py-20"
        style={{ backgroundImage: "url(/images/eventos/form-bg-food.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <Reveal className="text-white">
            <h2 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95]">
              Cuéntanos de tu evento
            </h2>
            <p className="mt-3 text-lg font-extrabold uppercase tracking-wide text-brand-yellow">
              Nosotros nos encargamos
            </p>
          </Reveal>
          <Reveal delay={80}>
            <EventQuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
