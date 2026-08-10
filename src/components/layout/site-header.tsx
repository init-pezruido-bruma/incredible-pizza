"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, navLinksLeft, navLinksRight } from "@/lib/site";
import { cn } from "@/lib/utils";

const pillGradient =
  "bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-red shadow-[0_10px_28px_rgba(0,0,0,0.32)]";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "z-50 w-full",
        isHome ? "absolute inset-x-0 top-0" : "sticky top-0",
      )}
    >
      {/* Desktop */}
      <div
        className={cn(
          "mx-auto hidden max-w-[1680px] px-4 sm:px-6 lg:block xl:px-8",
          isHome ? "pt-16 lg:min-h-[200px] lg:pt-20" : "py-4 lg:min-h-[160px] lg:pt-6",
          !isHome && "bg-gradient-to-r from-brand-yellow/90 via-brand-orange/90 to-brand-red/90 backdrop-blur-md",
        )}
      >
        <div className="relative mx-auto w-full">
          <div
            className={cn(
              "grid h-[72px] w-full grid-cols-[1fr_auto_1fr] items-center rounded-full px-4 xl:h-[78px] xl:px-6",
              isHome ? cn(pillGradient, "backdrop-blur-sm") : "bg-black/20",
            )}
          >
            <nav className="flex items-center justify-evenly gap-x-2 pr-4 text-[13px] font-extrabold uppercase tracking-[0.05em] text-white xl:gap-x-3 xl:pr-6 xl:text-[15px]">
              {navLinksLeft.map((link) => (
                <NavItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={pathname === link.href}
                />
              ))}
            </nav>

            {/* Espacio central para el logo que se superpone */}
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
              src="/images/brand/logo-circle.png"
              alt="Incredible Food and Fun"
              width={822}
              height={681}
              priority
              sizes="186px"
              className={cn(
                "h-auto w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.4)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]",
                isHome ? "max-h-[168px] xl:max-h-[186px]" : "max-h-[138px] xl:max-h-[150px]",
              )}
            />
          </Link>
        </div>
      </div>

      {/* Mobile — misma cápsula con degradado, layout distinto */}
      <div
        className={cn(
          "lg:hidden",
          isHome ? "px-3 pt-5 sm:pt-6" : "bg-transparent px-3 py-3 sm:py-3.5",
          !isHome && "bg-gradient-to-r from-brand-yellow/95 via-brand-orange/95 to-brand-red/95",
        )}
      >
        <div className={cn("relative flex items-center rounded-full px-2 py-1.5", pillGradient)}>
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border-2 border-white/90 bg-black/15 text-white transition active:scale-95"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" strokeWidth={2.5} /> : <Menu className="size-5" strokeWidth={2.5} />}
            <span className="sr-only">Menú</span>
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
              src="/images/brand/logo-circle.png"
              alt="Incredible Food and Fun"
              width={822}
              height={681}
              priority
              sizes="88px"
              className="h-auto w-[72px] object-contain drop-shadow-lg sm:w-[84px]"
            />
          </Link>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            className={cn(
              "mt-2 max-h-[70vh] overflow-y-auto rounded-[1.75rem] p-2",
              pillGradient,
            )}
          >
            <div className="rounded-[1.35rem] bg-black/20 p-1.5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex min-h-12 items-center rounded-full px-4 py-3 text-sm font-extrabold uppercase tracking-wide text-white transition hover:bg-white/15",
                    pathname === link.href && "bg-white text-brand-ink",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap px-1 text-center text-white transition-opacity hover:opacity-90",
        active && "underline decoration-2 underline-offset-[8px]",
      )}
    >
      {label}
    </Link>
  );
}
