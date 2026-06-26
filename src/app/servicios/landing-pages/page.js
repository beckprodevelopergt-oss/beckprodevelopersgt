import LandingPagesClient from "./LandingPagesClient";

export const metadata = {
  title: "Landing Pages de Alta Conversión | BeckPro Developer",
  description: "Diseñamos landing pages premium enfocadas en convertir visitas en clientes. Optimizadas para campañas de marketing, velocidad y máxima conversión.",
  keywords: ["landing pages", "paginas de aterrizaje", "conversion", "marketing digital", "embudos de venta", "captacion de leads", "optimizacion", "beckpro"],
  alternates: {
    canonical: "https://beckprodeveloper.com/servicios/landing-pages"
  },
  openGraph: {
    title: "Landing Pages de Alta Conversión | BeckPro Developer",
    description: "Diseñamos landing pages premium enfocadas en convertir visitas en clientes. Optimizadas para campañas de marketing, velocidad y máxima conversión.",
    url: "https://beckprodeveloper.com/servicios/landing-pages",
    type: "website",
    images: [
      {
        url: "https://beckprodeveloper.com/assets/landing_pages_hero.png",
        width: 1200,
        height: 630,
        alt: "Landing Pages Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Pages de Alta Conversión | BeckPro Developer",
    description: "Diseñamos landing pages premium enfocadas en convertir visitas en clientes. Optimizadas para campañas de marketing, velocidad y máxima conversión.",
    images: ["https://beckprodeveloper.com/assets/landing_pages_hero.png"]
  }
};

export default function LandingPagesPage() {
  return <LandingPagesClient />;
}
