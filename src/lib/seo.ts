import { siteConfig } from "@/lib/site";

export function restaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness", "EntertainmentBusiness"],
    name: siteConfig.name,
    alternateName: "Incredible Food and Fun",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/brand/logo-circle.png`,
    servesCuisine: ["Pizza", "American", "Buffet"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.6866,
      longitude: -100.3161,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Buffet ilimitado", value: true },
      { "@type": "LocationFeatureSpecification", name: "Go Karts", value: true },
      { "@type": "LocationFeatureSpecification", name: "Laser Tag", value: true },
      { "@type": "LocationFeatureSpecification", name: "Arcade / Videojuegos", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fiestas infantiles", value: true },
      { "@type": "LocationFeatureSpecification", name: "Eventos grupales", value: true },
    ],
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
  };
}
