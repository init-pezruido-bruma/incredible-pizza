import Link from "next/link";
import type { Metadata } from "next";
import { PageHeading, PageSection } from "@/components/layout/page-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta a ${siteConfig.name} en Monterrey. Teléfono, WhatsApp y ubicación.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageSection clearHeader className="bg-gradient-to-b from-[#1a2b56] via-[#3f508f] to-[#2b5899] py-14 text-white sm:py-20">
        <PageHeading
          title="Contacto"
          description="Estamos listos para ayudarte con fiestas, eventos, menú to-go o cualquier duda."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="rounded-[1.5rem] bg-white/10 p-6 ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
              Teléfono
            </p>
            <p className="mt-3 font-display text-2xl font-black">{siteConfig.phone}</p>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[1.5rem] bg-white/10 p-6 ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
              WhatsApp
            </p>
            <p className="mt-3 font-display text-2xl font-black">{siteConfig.whatsappDisplay}</p>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-[1.5rem] bg-white/10 p-6 ring-1 ring-white/20 transition hover:bg-white/15"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-yellow">
              Correo
            </p>
            <p className="mt-3 break-all font-display text-xl font-black sm:text-2xl">
              {siteConfig.email}
            </p>
          </a>
        </div>
      </PageSection>

      <PageSection className="bg-brand-cream py-14 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">
              Visítanos
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] font-black leading-[0.95] text-brand-ink">
              Monterrey
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-ink/80 sm:text-lg">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
            </p>
            <div className="mt-6 space-y-2 text-sm font-semibold text-brand-ink/75">
              <p>{siteConfig.hours.weekdays}</p>
              <p>{siteConfig.hours.weekend}</p>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_12px_28px_rgba(35,31,32,0.1)] sm:p-8">
            <h3 className="font-display text-2xl font-black text-brand-blue">¿Cómo te ayudamos?</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-ink/75">
              Cotiza fiestas, eventos grupales o pide del Menú To Go. Te respondemos por WhatsApp o
              teléfono.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild size="lg" className="min-h-12 w-full">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </Button>
              <Button asChild variant="outlineDark" size="lg" className="min-h-12 w-full">
                <Link href="/eventos#cotizar">Cotizar evento</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="min-h-12 w-full">
                <Link href="/fiestas#cotizar">Cotizar fiesta</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
