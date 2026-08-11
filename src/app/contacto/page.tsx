import Link from "next/link";
import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta a ${siteConfig.name} en Monterrey. Teléfono, WhatsApp y ubicación.`,
  alternates: { canonical: "/contacto" },
};

const channels = [
  {
    label: "Teléfono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneTel}`,
    external: false,
    nowrap: false,
    icon: "phone" as const,
  },
  {
    label: "WhatsApp",
    value: siteConfig.whatsappDisplay,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
    nowrap: false,
    icon: "whatsapp" as const,
  },
  {
    label: "Correo",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
    nowrap: true,
    icon: "mail" as const,
  },
] as const;

const mapsQuery = encodeURIComponent(siteConfig.mapsQuery);
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&hl=es&z=16&output=embed`;
const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

export default function ContactoPage() {
  return (
    <>
      {/* Hero — naranja→rojo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-orange via-[#e85a2a] to-brand-red text-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-40 sm:px-8 sm:pb-14 sm:pt-48 lg:px-10 lg:pb-16 lg:pt-56">
          <Reveal>
            <h1 className="hero-copy-in text-center font-display text-[clamp(3rem,9vw,5rem)] font-black leading-[0.92] drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]">
              Contacto
            </h1>
            <p className="hero-copy-in hero-copy-in-delay-1 mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-white/95 sm:text-lg">
              Estamos listos para ayudarte con fiestas, eventos, menú to-go o cualquier duda.
            </p>
          </Reveal>

          <Reveal delay={80} className="mt-8 flex justify-center sm:mt-10">
            <div className="hero-copy-in hero-copy-in-delay-2">
              <Button
                asChild
                size="lg"
                className="min-h-12 rounded-full border-2 border-black bg-brand-yellow px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-yellow sm:min-h-14 sm:px-10 sm:text-base"
              >
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escríbenos
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Canales — azul→rojo + cards blancas */}
      <section className="bg-gradient-to-b from-brand-blue via-[#7a4a78] to-brand-red py-14 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="max-w-[14ch] font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black italic leading-[0.95]">
              Habla con nosotros
            </h2>
            <p className="mt-3 max-w-xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
              Elige el canal que te acomode. Respondemos por teléfono, WhatsApp o correo.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={80 + i * 50} className="relative pt-2">
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hover-lift flex h-full flex-col rounded-[1.35rem] bg-white px-5 py-6 text-brand-ink shadow-[0_10px_28px_rgba(0,0,0,0.18)] sm:px-6 sm:py-7"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-red text-white sm:size-12">
                      <ChannelIcon name={channel.icon} />
                    </span>
                    <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-brand-red">
                      {channel.label}
                    </p>
                  </div>
                  <p
                    className={
                      channel.nowrap
                        ? "mt-4 whitespace-nowrap font-display text-[clamp(0.85rem,1.9vw,1.15rem)] font-black leading-none tracking-tight"
                        : "mt-4 font-display text-[clamp(1.35rem,2.8vw,1.85rem)] font-black leading-[1.05]"
                    }
                  >
                    {channel.value}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visítanos — blanco + borde rojo + mapa */}
      <section className="border-b-[3px] border-brand-red bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:px-10 lg:py-20">
          <Reveal className="flex flex-col justify-center">
            <h2 className="font-display text-[clamp(2.5rem,7vw,4rem)] font-black leading-[0.92] text-brand-blue sm:-rotate-1">
              Visítanos
            </h2>
            <p className="mt-2 font-display text-[clamp(1.75rem,4vw,2.5rem)] font-black leading-[1.05] text-brand-ink">
              Monterrey
            </p>
            <p className="mt-5 text-base leading-relaxed text-brand-ink/85 sm:text-lg">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region}{" "}
              {siteConfig.address.postalCode}
            </p>
            <div className="mt-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">
                Horarios
              </p>
              <div className="mt-3 space-y-2 text-base font-semibold leading-relaxed text-brand-ink sm:text-lg">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.weekend}</p>
              </div>
            </div>
            <Button
              asChild
              variant="outlineDark"
              size="lg"
              className="mt-8 min-h-12 w-fit rounded-full border-2 border-black px-8 text-sm font-extrabold uppercase tracking-wide transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:min-h-14 sm:px-10 sm:text-base"
            >
              <a href={mapsLinkUrl} target="_blank" rel="noopener noreferrer">
                Cómo llegar
              </a>
            </Button>
          </Reveal>

          <Reveal delay={60} className="min-h-[280px] overflow-hidden rounded-[1.35rem] shadow-[0_12px_28px_rgba(35,31,32,0.12)] sm:min-h-[340px] lg:min-h-full">
            <iframe
              title="Ubicación de Incredible Pizza en Google Maps"
              src={mapsEmbedUrl}
              className="h-full min-h-[280px] w-full border-0 sm:min-h-[340px] lg:min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>

      {/* CTA final — rojo→naranja */}
      <section className="bg-gradient-to-r from-brand-red via-[#e85a2a] to-brand-orange py-14 text-white sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <Reveal>
            <h2 className="max-w-[12ch] font-display text-[clamp(2rem,5.5vw,3.25rem)] font-black leading-[0.95] sm:-rotate-2">
              ¿Cómo te ayudamos?
            </h2>
            <p className="mt-3 max-w-md text-sm font-extrabold uppercase tracking-wide text-white/90 sm:text-base">
              Cotiza fiestas, eventos o pide del Menú To Go
            </p>
          </Reveal>

          <Reveal delay={80} className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[16rem]">
            <Button
              asChild
              size="lg"
              className="min-h-12 w-full rounded-full border-2 border-black bg-white px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white sm:min-h-14 sm:px-10 sm:text-base"
            >
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="min-h-12 w-full rounded-full border-2 border-black bg-brand-yellow px-8 text-sm font-extrabold uppercase tracking-wide text-black transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-brand-yellow sm:min-h-14 sm:px-10 sm:text-base"
            >
              <Link href="/eventos#cotizar">Cotizar evento</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-h-12 w-full rounded-full border-2 border-white px-8 text-sm font-extrabold uppercase tracking-wide text-white transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white/10 sm:min-h-14 sm:px-10 sm:text-base"
            >
              <Link href="/fiestas">Cotizar fiesta</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ChannelIcon({ name }: { name: "phone" | "whatsapp" | "mail" }) {
  if (name === "phone") {
    return <Phone className="size-5" strokeWidth={2.4} aria-hidden />;
  }
  if (name === "mail") {
    return <Mail className="size-5" strokeWidth={2.4} aria-hidden />;
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
