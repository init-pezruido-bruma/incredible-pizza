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
              <FacebookIcon />
            </SocialCircle>
            <SocialCircle href={siteConfig.social.instagram} label="Instagram">
              <InstagramIcon />
            </SocialCircle>
            <SocialCircle href={siteConfig.social.tiktok} label="TikTok">
              <TikTokIcon />
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
      className="inline-flex size-10 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <defs>
        <radialGradient id="ig-footer" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <path
        fill="url(#ig-footer)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </svg>
  );
}

function TikTokIcon() {
  const note =
    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.95-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z";
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path fill="#25F4EE" d={note} transform="translate(1.1 .9)" />
      <path fill="#FE2C55" d={note} transform="translate(-1 -.7)" />
      <path fill="#000" d={note} />
    </svg>
  );
}
