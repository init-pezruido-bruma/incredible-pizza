"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, navLinksLeft, navLinksRight, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const pillGradient =
  "bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red shadow-[0_10px_28px_rgba(0,0,0,0.32)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      {/* Desktop — mismo en todas las páginas */}
      <div className="mx-auto hidden max-w-[1680px] px-4 pt-16 sm:px-6 lg:block lg:min-h-[200px] lg:pt-20 xl:px-8">
        <div className="relative mx-auto w-full">
          <div
            className={cn(
              "grid h-[72px] w-full grid-cols-[1fr_auto_1fr] items-center rounded-full px-4 backdrop-blur-sm xl:h-[78px] xl:px-6",
              pillGradient,
            )}
          >
            <nav className="flex items-center justify-evenly gap-x-2 pr-4 text-[13px] font-extrabold uppercase tracking-[0.05em] text-white xl:gap-x-3 xl:pr-6 xl:text-[15px]">
              {navLinksLeft.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                  external={"external" in link && link.external}
                />
              ))}
            </nav>

            <div className="w-[168px] shrink-0 xl:w-[186px]" aria-hidden />

            <nav className="flex items-center justify-evenly gap-x-2 pl-4 text-[13px] font-extrabold uppercase tracking-[0.05em] text-white xl:gap-x-3 xl:pl-6 xl:text-[15px]">
              {navLinksRight.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                />
              ))}
            </nav>
          </div>

          <Link
            href="/"
            aria-label="Incredible Pizza — Inicio"
            className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/images/brand/logo-mark.png"
              alt="Incredible Food and Fun"
              width={822}
              height={681}
              priority
              sizes="186px"
              className="h-auto max-h-[168px] w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] xl:max-h-[186px]"
            />
          </Link>
        </div>
      </div>

      {/* Mobile — mismo en todas las páginas */}
      <div className="px-3 pt-5 sm:pt-6 lg:hidden">
        <div className={cn("relative flex items-center rounded-full px-2 py-1.5", pillGradient)}>
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-white/90 bg-black/15 text-white transition active:scale-95"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" strokeWidth={2.5} />
            <span className="sr-only">Abrir menú</span>
          </button>

          <div className="flex min-w-0 flex-1 justify-center px-2">
            <p className="truncate text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">
              Incredible Pizza
            </p>
          </div>

          <Link
            href="/"
            aria-label="Incredible Pizza — Inicio"
            className="relative z-20 -my-3 shrink-0"
          >
            <Image
              src="/images/brand/logo-mark.png"
              alt="Incredible Food and Fun"
              width={822}
              height={681}
              priority
              sizes="88px"
              className="h-auto w-[72px] object-contain drop-shadow-lg sm:w-[84px]"
            />
          </Link>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {open ? (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className="fixed inset-0 z-[60] flex flex-col bg-brand-cream lg:hidden"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(255,194,14,0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(227,30,36,0.12), transparent 50%)",
            }}
            aria-hidden
          />

          <div className="relative flex items-start justify-between gap-4 px-5 pb-4 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-7">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <Image
                src="/images/brand/logo-mark.png"
                alt=""
                width={822}
                height={681}
                sizes="56px"
                className="h-auto w-12 object-contain sm:w-14"
                aria-hidden
              />
              <span className="min-w-0 text-left">
                <span className="block truncate text-base font-extrabold tracking-tight text-brand-ink">
                  Incredible Pizza
                </span>
                <span className="mt-0.5 block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-red">
                  Food and Fun
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-brand-ink/15 bg-white text-brand-ink shadow-sm transition active:scale-95"
              aria-label="Cerrar menú"
            >
              <X className="size-5" strokeWidth={2} />
            </button>
          </div>

          <nav className="relative flex-1 overflow-y-auto px-5 py-2 sm:px-7">
            <ul className="flex flex-col gap-1">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-2.5 font-display text-[clamp(2rem,9vw,2.75rem)] font-black leading-[1.05] text-brand-ink transition active:text-brand-red",
                    pathname === "/" && "text-brand-red",
                  )}
                >
                  Inicio
                </Link>
              </li>
              {navLinks.map((link) => {
                const external = "external" in link && link.external;
                const className = cn(
                  "block py-2.5 font-display text-[clamp(2rem,9vw,2.75rem)] font-black leading-[1.05] text-brand-ink transition active:text-brand-red",
                  pathname === link.href && "text-brand-red",
                );
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className={className}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={className}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="my-6 h-px bg-brand-ink/10" />

            <div className="grid gap-6 pb-4 sm:grid-cols-2">
              <div>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-brand-red">
                  [ Contacto ]
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 block text-sm font-semibold text-brand-ink/85 underline-offset-2 hover:underline"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="mt-1 block text-sm font-semibold text-brand-ink/85 underline-offset-2 hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-brand-red">
                  [ Visítanos ]
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug text-brand-ink/85">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region}
                </p>
              </div>
            </div>
          </nav>

          <div className="relative flex items-center justify-between gap-3 border-t border-brand-ink/10 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-7">
            <p className="text-xs font-semibold text-brand-ink/45">
              © {new Date().getFullYear()} {siteConfig.legalName}
            </p>
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand-ink px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white"
            >
              Cotizar
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
  external = false,
}: {
  href: string;
  label: string;
  active: boolean;
  external?: boolean;
}) {
  const className = cn(
    "whitespace-nowrap px-1 text-center text-white transition-opacity hover:opacity-90",
    active && "underline decoration-2 underline-offset-[8px]",
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
