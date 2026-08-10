export const siteConfig = {
  name: "Incredible Pizza",
  legalName: "Incredible Pizza México",
  tagline: "Food and Fun",
  description:
    "El mejor centro de entretenimiento familiar con buffet, juegos, atracciones y fiestas inolvidables en Monterrey.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://incrediblepizza.mx",
  locale: "es_MX",
  phone: "(81) 1100-1214",
  phoneTel: "+528111001214",
  whatsapp: "528121971233",
  whatsappDisplay: "812 1971 233",
  email: "contacto@incrediblepizza.mx",
  address: {
    street: "Av. Lázaro Cárdenas 999, Brisas",
    city: "Monterrey",
    region: "Nuevo León",
    postalCode: "64000",
    country: "MX",
  },
  hours: {
    weekdays: "Lunes a viernes: 11:00 AM – 9:00 PM",
    weekend: "Sábado y domingo: 11:00 AM – 9:00 PM",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/",
  },
} as const;

/** Orden exacto del mockup de header */
export const navLinksLeft = [
  { href: "/fiestas", label: "Fiestas" },
  { href: "/juegos", label: "Juegos" },
  { href: "/eventos", label: "Eventos" },
  { href: "/tienda", label: "Tienda en línea", comingSoon: true },
] as const;

export const navLinksRight = [
  { href: "/promociones", label: "Promociones" },
  { href: "/menu", label: "Menú To Go" },
  { href: "/quienes-somos", label: "¿Quiénes somos?" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const navLinks = [...navLinksLeft, ...navLinksRight] as const;

export type NavLink = (typeof navLinks)[number];
