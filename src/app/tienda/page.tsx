import type { Metadata } from "next";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Tienda en línea",
  description: "Tienda en línea de Incredible Pizza — próximamente.",
  alternates: { canonical: "/tienda" },
};

export default function TiendaPage() {
  return (
    <section className="bg-brand-cream py-20">
      <Container className="max-w-xl text-center">
        <h1 className="font-display text-4xl font-black uppercase text-brand-blue">
          Tienda en línea
        </h1>
        <p className="mt-4 text-brand-ink/80">Próximamente. Mientras tanto revisa el Menú To Go.</p>
      </Container>
    </section>
  );
}
