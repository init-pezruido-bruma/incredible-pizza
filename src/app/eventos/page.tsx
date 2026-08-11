import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { GalleryCarousel } from "@/components/home/gallery-carousel";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { EventQuoteForm } from "@/features/eventos/event-quote-form";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Eventos grupales y corporativos",
  description:
    "Eventos escolares, empresariales, posadas y play dates en Incredible Pizza Monterrey. Grupos desde 25 personas.",
  alternates: { canonical: "/eventos" },
};

const offers = [
  "Áreas 100% climatizadas para que disfrutes sin importar el clima.",
  "Paquetes con buffet y opciones a la medida de tu grupo.",
  "Te ayudamos con la logística de tu evento para que solo te preocupes por divertirte.",
  "Salones privados para juntas y reuniones con equipo de audio y video.",
] as const;

const heroGallery = [
  {
    src: "/images/eventos/live-show.jpg",
    alt: "Show en vivo y baile en Incredible Pizza",
  },
  {
    src: "/images/home/card-juegos.jpg",
    alt: "Entretenimiento y atracciones en el evento",
  },
  {
    src: "/images/home/fiesta-pinata.jpg",
    alt: "Fiesta con piñata para niños",
  },
] as const;

type EventCard = {
  title: string;
  price: string;
  priceClass: string;
  buttonClass: string;
  features?: readonly string[];
  blurb?: string;
};

const eventSociales: EventCard = {
  title: "Sociales",
  price: "Desde $X,XXX",
  priceClass: "text-brand-blue",
  buttonClass: "bg-gradient-to-r from-brand-red to-brand-blue",
  features: [
    "Cumpleaños",
    "Primera comunión",
    "XV Años",
    "Despedidas y/o Bodas",
    "Baby Shower",
    "Reuniones familiares",
    "Sesiones de foto",
  ],
};

const eventEscolares: EventCard = {
  title: "Escolares",
  price: "Desde $X,XXX",
  priceClass: "text-brand-red",
  buttonClass: "bg-gradient-to-r from-brand-yellow to-brand-orange",
  features: [
    "Visitas escolares",
    "Fin del curso",
    "Día del niño",
    "Posada escolar",
    "Día del estudiante",
    "Cierre de campamentos de verano",
  ],
};

const eventPlayDates: EventCard = {
  title: "Play Dates",
  price: "Desde $X,XXX",
  priceClass: "text-brand-blue",
  buttonClass: "bg-gradient-to-r from-brand-yellow to-brand-blue",
  blurb: "Reuniones llenas de diversión",
};

const eventEmpresas: EventCard = {
  title: "Empresas",
  price: "Desde $X,XXX",
  priceClass: "text-brand-blue",
  buttonClass: "bg-gradient-to-r from-brand-yellow to-brand-blue",
  features: [
    "Rallys",
    "Juntas fuera de lo común",
    "Team Building",
    "Espacios para capacitaciones",
  ],
};

const eventPosadas: EventCard = {
  title: "Posadas",
  price: "Desde $X,XXX",
  priceClass: "text-brand-red",
  buttonClass: "bg-gradient-to-r from-brand-red to-brand-blue",
  blurb: "Organiza tu posada increíble",
};

const eventGalleryTop = [
  {
    src: "/images/eventos/holiday.jpg",
    alt: "Personajes y Santa con niños en Incredible Pizza",
    className: "aspect-[16/10] md:col-span-2 md:aspect-auto md:h-full",
  },
  {
    src: "/images/eventos/gallery-party.jpg",
    alt: "Salón de fiesta con decoración colorida",
    className: "aspect-[4/5] md:aspect-auto md:h-full",
  },
] as const;

const eventGalleryBottom = [
  {
    src: "/images/home/gallery/carousel-02-v2.jpg",
    alt: "Grupo disfrutando un evento",
  },
  {
    src: "/images/eventos/live-show.jpg",
    alt: "Reunión o presentación en salón",
  },
  {
    src: "/images/home/gallery/carousel-05-v2.jpg",
    alt: "Grupo grande en Incredible Pizza",
  },
] as const;

function EventTypeCard({ event, delay = 0 }: { event: EventCard; delay?: number }) {
  const features = event.features;
  return (
    <Reveal
      delay={delay}
      className="hover-lift flex h-full flex-col rounded-[1.35rem] bg-white p-5 text-brand-ink shadow-[0_10px_28px_rgba(0,0,0,0.18)] sm:p-6"
    >
      <h2 className="font-display text-[clamp(1.85rem,3vw,2.35rem)] font-black leading-none text-brand-ink">
        {event.title}
      </h2>
      <p className={cn("mt-2 text-sm font-extrabold sm:text-base", event.priceClass)}>
        {event.price}
      </p>
      {features ? (
        <ul className="mt-4 flex-1">
          {features.map((f, i) => (
            <li
              key={f}
              className={cn(
                "py-2 text-sm leading-snug text-brand-ink/80",
                i < features.length - 1 && "border-b border-black/10",
              )}
            >
              {f}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-ink/80">{event.blurb}</p>
      )}
      <Button
        asChild
        size="sm"
        className={cn(
          "mt-5 min-h-10 w-full border-0 text-white shadow-none hover:brightness-105",
          event.buttonClass,
        )}
      >
        <a href="#cotizar">Cotizar</a>
      </Button>
    </Reveal>
  );
}

const promos = [
  { src: "/images/eventos/promo-grupos.jpg", alt: "Promoción reserva tu evento" },
  { src: "/images/eventos/promo-escolares.jpg", alt: "Promoción paquetes escolares" },
  { src: "/images/eventos/promo-recarga.jpg", alt: "Promoción recarga y gana" },
] as const;

export default function EventosPage() {
  return (
    <>
      {/* Hero — flyer: red→orange band + logo CTA + 3 photos */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#d92b1f] via-[#e85a2a] to-[#f0a020] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-40 sm:px-8 sm:pb-10 sm:pt-48 lg:px-10 lg:pb-12 lg:pt-56">
          <Reveal className="relative">
            <h1 className="hero-copy-in relative z-10 pr-[34%] font-display text-[clamp(2.35rem,5.2vw,4.25rem)] font-black leading-[0.92] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)] sm:pr-[36%] sm:text-[clamp(2.75rem,5.8vw,4.75rem)]">
              Eventos que
              <br />
              <span className="whitespace-nowrap">nunca se olvidan</span>
            </h1>
            <Image
              src="/images/brand/iff-secondary-logo-red.png"
              alt="Incredible Food and Fun"
              width={737}
              height={567}
              priority
              sizes="(max-width:640px) 180px, (max-width:1024px) 320px, 440px"
              className="pointer-events-none absolute -right-2 top-1/2 z-0 h-auto w-[min(14rem,44vw)] -translate-y-1/2 object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.28)] sm:-right-4 sm:w-[22rem] lg:w-[30rem]"
            />
          </Reveal>

          {/* Logo fuera de flujo + mt corto: ofertas/grupos no bajan */}
          <div className="relative z-10 mt-3 grid items-start gap-10 md:grid-cols-2 md:gap-8 lg:mt-4 lg:gap-12">
            {/* Col 1 — Incredible Pizza ofrece + Compra aquí */}
            <Reveal delay={60} className="space-y-5">
              <div className="space-y-3">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-white sm:text-base">
                  Incredible Pizza ofrece:
                </p>
                <ul className="space-y-2.5 text-sm leading-relaxed text-white/95 sm:text-base">
                  {offers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Button
                asChild
                size="lg"
                className="min-h-11 rounded-full border-2 border-black bg-brand-yellow px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-yellow sm:min-h-12"
              >
                <Link href="/menu">Compra aquí</Link>
              </Button>
            </Reveal>

            {/* Col 2 — grupos + cotizar (izquierda) */}
            <Reveal delay={120} className="flex flex-col items-start gap-5 md:pt-2">
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
                    Grupos desde
                  </p>
                  <p className="mt-1 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-none text-brand-yellow">
                    25 personas
                  </p>
                </div>
                <div>
                  <p className="text-sm font-extrabold uppercase tracking-wide text-white sm:text-base">
                    Mínimo
                  </p>
                  <p className="mt-1 font-display text-[clamp(1.5rem,3.5vw,2.15rem)] font-black leading-[1.05] text-brand-yellow">
                    10 personas con tarjeta
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full border-2 border-black bg-white px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white sm:min-h-14 sm:px-10 sm:text-base"
              >
                <a href="#cotizar">Cotizar mi evento</a>
              </Button>
            </Reveal>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-5 pb-8 sm:grid-cols-3 sm:gap-4 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12">
          {heroGallery.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={i * 70}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.28)] sm:aspect-[5/4] sm:rounded-3xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width:640px) 100vw, 33vw"
                className="img-zoom object-cover"
                priority={i === 0}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Franja marca — Todos tus eventos… */}
      <section
        aria-label="Todos tus eventos en un lugar increíble"
        className="flex w-full items-center justify-center bg-brand-red px-5 py-5 sm:px-8 sm:py-6 lg:py-7"
      >
        <p className="text-center font-display text-[clamp(1.65rem,4.5vw,2.85rem)] font-black leading-[1.05] text-white">
          Todos tus eventos en un lugar increíble
        </p>
      </section>

      <section className="bg-gradient-to-b from-[#4a76a8] via-[#7a5a8a] to-[#d64541] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          {/* Cards: Sociales | Escolares+Empresas | Play Dates+Posadas */}
          <div className="grid items-start gap-5 md:grid-cols-3">
            <EventTypeCard event={eventSociales} delay={40} />
            <div className="flex flex-col gap-5">
              <EventTypeCard event={eventEscolares} delay={80} />
              <EventTypeCard event={eventEmpresas} delay={140} />
            </div>
            <div className="flex flex-col gap-5">
              <EventTypeCard event={eventPlayDates} delay={100} />
              <EventTypeCard event={eventPosadas} delay={160} />
            </div>
          </div>

          <Reveal delay={120} className="mt-14 sm:mt-16">
            <h2 className="text-center font-display text-[clamp(2.25rem,6vw,3.75rem)] font-black leading-[0.95] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              Así se ven nuestros eventos
            </h2>
          </Reveal>

          <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:h-[min(22rem,36vw)] md:grid-cols-3">
              {eventGalleryTop.map((photo, i) => (
                <Reveal
                  key={photo.src}
                  delay={i * 60}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.28)] sm:rounded-3xl",
                    photo.className,
                  )}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width:768px) 100vw, 66vw"
                    className="img-zoom object-cover"
                  />
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {eventGalleryBottom.map((photo, i) => (
                <Reveal
                  key={photo.src}
                  delay={(i + 2) * 60}
                  className="group relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.28)] sm:rounded-3xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="img-zoom object-cover"
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-end pb-2 sm:mt-8">
            <Button
              asChild
              size="sm"
              className="min-h-10 rounded-full border-2 border-black bg-white px-5 text-xs font-extrabold uppercase tracking-wide text-black shadow-none hover:bg-white sm:text-sm"
            >
              <Link href="/">Ver galería completa</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#fff8e0] via-[#f5d84a] to-[#f5d84a] pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal delay={60}>
            <GalleryCarousel
              items={promos}
              eyebrow="Este mes"
              title="Promociones"
            />
          </Reveal>
          <div className="mt-8 text-center sm:mt-10">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="min-h-12 w-full border-2 border-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:w-auto"
            >
              <Link href="/promociones">Ver todas</Link>
            </Button>
          </div>
        </div>
      </section>

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
