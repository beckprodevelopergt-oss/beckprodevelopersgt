import TiendasOnlineClient from "./TiendasOnlineClient";

export const metadata = {
  title: "Tiendas Online y E-commerce de Alta Conversión | BeckPro Developer",
  description: "Creamos tiendas online de alto impacto, rápidas, optimizadas para SEO y diseñadas para vender. Pasarelas de pago, gestión de inventario y carrito optimizado.",
  keywords: ["tiendas online", "e-commerce", "vender por internet", "carrito de compras", "shopify alternativo", "beckpro", "diseño tiendas online", "guatemala"],
  alternates: {
    canonical: "https://beckprodeveloper.com/servicios/tiendas-online"
  },
  openGraph: {
    title: "Tiendas Online y E-commerce de Alta Conversión | BeckPro Developer",
    description: "Creamos tiendas online de alto impacto, rápidas, optimizadas para SEO y diseñadas para vender. Pasarelas de pago, gestión de inventario y carrito optimizado.",
    url: "https://beckprodeveloper.com/servicios/tiendas-online",
    type: "website",
    images: [
      {
        url: "https://beckprodeveloper.com/assets/tiendas_online_hero.png",
        width: 1200,
        height: 630,
        alt: "Tiendas Online Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiendas Online y E-commerce de Alta Conversión | BeckPro Developer",
    description: "Creamos tiendas online de alto impacto, rápidas, optimizadas para SEO y diseñadas para vender. Pasarelas de pago, gestión de inventario y carrito optimizado.",
    images: ["https://beckprodeveloper.com/assets/tiendas_online_hero.png"]
  }
};

export default function TiendasOnlinePage() {
  return <TiendasOnlineClient />;
}
