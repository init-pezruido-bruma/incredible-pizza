import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/quienes-somos", label: "Acerca" },
  { href: "/contacto", label: "Empleos" },
  { href: "/aviso-de-privacidad", label: "Términos y condiciones" },
  { href: "/aviso-de-privacidad", label: "Política de privacidad" },
  { href: "/contacto", label: "Facturación" },
];

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red text-white">
      <Container className="relative grid gap-10 py-12 md:grid-cols-[1.1fr_1fr_1.2fr] md:items-start">
        <div className="space-y-4">
          <Image
            src="/images/brand/wordmark-footer.png"
            alt="Incredible Food and Fun"
            width={220}
            height={68}
            className="h-auto w-[200px]"
          />
        </div>

        <div>
          <ul className="grid gap-2 text-sm font-extrabold uppercase tracking-wide">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative space-y-2 text-sm font-semibold">
          <Image
            src="/images/brand/since-2007.png"
            alt="Since 2007"
            width={160}
            height={80}
            className="absolute -top-8 right-0 hidden h-16 w-auto rotate-6 md:block"
          />
          <p>{siteConfig.address.street}</p>
          <p>
            <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-brand-yellow">
              {siteConfig.phone}
            </a>
          </p>
          <p>WhatsApp: {siteConfig.whatsappDisplay}</p>
          <p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-yellow">
              {siteConfig.email}
            </a>
          </p>
          <div className="flex gap-3 pt-3">
            <SocialCircle href={siteConfig.social.facebook} label="Facebook">
              f
            </SocialCircle>
            <SocialCircle href={siteConfig.social.instagram} label="Instagram">
              IG
            </SocialCircle>
            <SocialCircle href={siteConfig.social.tiktok} label="TikTok">
              TK
            </SocialCircle>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/50 bg-[#9a2a1c]/80">
        <Container className="flex flex-col gap-2 py-3 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>©Incredible Pizza México {new Date().getFullYear()}. Todos los derechos Reservados.</p>
          <Link href="/aviso-de-privacidad" className="hover:text-brand-yellow">
            Aviso De Privacidad
          </Link>
        </Container>
      </div>
    </footer>
  );
}

function SocialCircle({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full bg-white text-xs font-black text-brand-orange"
    >
      {children}
    </a>
  );
}
