import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FullImage } from "@/components/ui/full-image";
import { SectionHeading } from "@/components/ui/section";
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
    color: "bg-brand-red",
  },
  {
    title: "Escolares",
    price: "Desde $X,XXX",
    features: ["Paquetes por alumno", "Atracciones", "Supervisión"],
    color: "bg-brand-blue",
  },
  {
    title: "Play Dates",
    price: "Desde $X,XXX",
    features: ["Grupos pequeños", "Juegos", "Snacks"],
    color: "bg-brand-yellow text-brand-ink",
  },
  {
    title: "Posadas",
    price: "Desde $X,XXX",
    features: ["Temática", "Buffet", "Música y ambientación"],
    color: "bg-emerald-500",
  },
  {
    title: "Empresas",
    price: "Desde $X,XXX",
    features: ["Team building", "Coffee break", "Salones"],
    color: "bg-brand-orange",
  },
];

const heroPhotos = [
  { src: "/images/eventos/holiday.jpg", width: 2152, height: 1106, alt: "Evento festivo" },
  { src: "/images/eventos/live-show.jpg", width: 1244, height: 1106, alt: "Show en vivo" },
  { src: "/images/eventos/gallery-party.jpg", width: 1622, height: 1767, alt: "Fiesta montada" },
] as const;

const promos = [
  { src: "/images/eventos/promo-grupos.jpg", alt: "Promoción reserva tu evento" },
  { src: "/images/eventos/promo-escolares.jpg", alt: "Promoción paquetes escolares" },
  { src: "/images/eventos/promo-recarga.jpg", alt: "Promoción recarga y gana" },
];

export default function EventosPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-brand-orange to-brand-red py-10 text-white sm:py-14 lg:py-16">
        <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 space-y-5 lg:order-1">
            <h1 className="font-display text-[clamp(2rem,8vw,3.25rem)] font-black uppercase leading-tight">
              Eventos que nunca se olvidan
            </h1>
            <p className="max-w-xl text-white/90">
              Paquetes con buffet, créditos de juego y logística personalizada para cada tipo de
              celebración.
            </p>
            <div className="flex flex-col gap-2 text-sm font-extrabold uppercase text-brand-yellow sm:flex-row sm:flex-wrap sm:gap-4">
              <span>Grupos desde 25 personas</span>
              <span>Mínimo 10 personas con tarjeta</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="min-h-12 w-full sm:w-auto">
                <a href="#cotizar">Compra aquí</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-12 w-full sm:w-auto">
                <a href="#cotizar">Cotizar mi evento</a>
              </Button>
            </div>
          </div>
          <div className="order-1 grid grid-cols-3 gap-2 sm:gap-3 lg:order-2">
            {heroPhotos.map((photo) => (
              <FullImage
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="33vw"
                rounded="rounded-xl sm:rounded-[1.25rem]"
              />
            ))}
          </div>
        </Container>
      </section>

      <div className="overflow-hidden bg-brand-red py-3 text-white">
        <p className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-center text-sm font-extrabold uppercase tracking-[0.18em]">
          Todos tus eventos en un lugar increíble · Buffet · Juegos · Atracciones · Fiestas ·
          Corporativos · Escolares ·
        </p>
      </div>

      <section className="bg-gradient-to-b from-brand-blue-deep to-brand-purple py-12 text-white sm:py-16">
        <Container>
          <SectionHeading title="Cinco formas de celebrar" className="mb-10" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {eventTypes.map((event) => (
              <article
                key={event.title}
                className="flex h-full flex-col rounded-[1.5rem] bg-white p-5 text-brand-ink shadow-lg"
              >
                <h2 className="font-display text-xl font-black uppercase text-brand-blue">{event.title}</h2>
                <p className="mt-1 font-extrabold text-brand-red">{event.price}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-brand-ink/75">
                  {event.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Button
                  className={`mt-5 min-h-11 w-full border-brand-ink text-white ${event.color}`}
                  size="sm"
                >
                  Cotizar
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-deep py-12 text-white sm:py-16">
        <Container>
          <SectionHeading align="left" title="Así se ven nuestros eventos" className="mb-8" />
          <div className="grid gap-4 sm:grid-cols-2">
            <FullImage
              src="/images/eventos/gallery-party.jpg"
              alt="Fiesta montada"
              width={1622}
              height={1767}
              sizes="(max-width:640px) 100vw, 50vw"
              rounded="rounded-[1.5rem]"
            />
            <FullImage
              src="/images/eventos/live-show.jpg"
              alt="Show en vivo"
              width={1244}
              height={1106}
              sizes="(max-width:640px) 100vw, 50vw"
              rounded="rounded-[1.5rem]"
            />
            <FullImage
              src="/images/eventos/holiday.jpg"
              alt="Evento festivo"
              width={2152}
              height={1106}
              sizes="(max-width:640px) 100vw, 50vw"
              rounded="rounded-[1.25rem]"
              className="sm:col-span-2"
            />
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-r from-brand-yellow to-brand-orange py-12 sm:py-16">
        <Container>
          <h2 className="mb-8 text-center font-display text-[clamp(1.75rem,6vw,2.5rem)] font-black uppercase text-brand-red">
            Promociones del mes
          </h2>
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
        </Container>
      </section>

      <section
        id="cotizar"
        className="relative overflow-hidden bg-cover bg-center py-12 sm:py-16"
        style={{ backgroundImage: "url(/images/eventos/form-bg-food.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="font-display text-[clamp(2rem,8vw,3rem)] font-black uppercase">
              Cuéntanos de tu evento
            </h2>
            <p className="mt-3 text-lg font-extrabold uppercase text-brand-yellow">
              Nosotros nos encargamos
            </p>
          </div>
          <EventQuoteForm />
        </Container>
      </section>
    </>
  );
}
