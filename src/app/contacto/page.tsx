import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Contacta a ${siteConfig.name} en Monterrey. Teléfono, WhatsApp y ubicación.`,
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <section className="bg-brand-cream py-20">
      <Container className="max-w-2xl space-y-6 text-center">
        <h1 className="font-display text-4xl font-black uppercase text-brand-blue">Contacto</h1>
        <p className="text-brand-ink/80">
          Página en construcción. Mientras tanto escríbenos por WhatsApp o llámanos.
        </p>
        <div className="space-y-2 font-semibold">
          <p>{siteConfig.address.street}</p>
          <p>
            {siteConfig.address.city}, {siteConfig.address.region}
          </p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="outlineDark">
            <Link href="/eventos#cotizar">Cotizar evento</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
