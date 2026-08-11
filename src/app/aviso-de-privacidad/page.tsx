import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false, follow: true },
};

export default function AvisoPrivacidadPage() {
  return (
    <section className="bg-white py-16">
      <Container className="prose prose-neutral max-w-3xl">
 <h1 className="font-display text-3xl font-black text-brand-blue">
          Aviso de privacidad
        </h1>
        <p className="mt-4 text-brand-ink/80">
          {siteConfig.legalName} protege los datos personales que nos compartes a través del sitio
          web, formularios y WhatsApp. Esta página es un placeholder legal: sustituye este texto por
          el aviso oficial de privacidad de la empresa antes de publicar.
        </p>
      </Container>
    </section>
  );
}
