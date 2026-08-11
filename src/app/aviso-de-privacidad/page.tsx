import type { Metadata } from "next";
import { PageSection } from "@/components/layout/page-section";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  robots: { index: false, follow: true },
};

export default function AvisoPrivacidadPage() {
  return (
    <PageSection clearHeader className="bg-brand-cream py-16 sm:py-20" reveal={false}>
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-red">Legal</p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,6vw,3.5rem)] font-black leading-[0.95] text-brand-ink">
          Aviso de privacidad
        </h1>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-brand-ink/80">
          <p>
            {siteConfig.legalName} protege los datos personales que nos compartes a través del sitio
            web, formularios y WhatsApp.
          </p>
          <p>
            Esta página es un placeholder legal: sustituye este texto por el aviso oficial de
            privacidad de la empresa antes de publicar.
          </p>
          <p>
            Para ejercer derechos ARCO o dudas sobre el tratamiento de datos, contáctanos en{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-brand-blue underline-offset-2 hover:underline"
            >
              {siteConfig.email}
            </a>{" "}
            o al teléfono {siteConfig.phone}.
          </p>
        </div>
      </article>
    </PageSection>
  );
}
