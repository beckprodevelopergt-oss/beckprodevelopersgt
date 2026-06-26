import DesarrolloWebClient from "./DesarrolloWebClient";

export const metadata = {
  title: "Desarrollo Web Premium y Escalable | BeckPro Developer",
  description: "Creamos sitios web de alto impacto, rápidos, optimizados para SEO y totalmente adaptivos. Ingeniería digital para llevar tu negocio al siguiente nivel.",
  keywords: ["desarrollo web", "paginas web", "nextjs", "react", "sitios web premium", "beckpro", "diseño web profesional", "guatemala"],
  alternates: {
    canonical: "https://beckprodeveloper.com/servicios/desarrollo-web"
  },
  openGraph: {
    title: "Desarrollo Web Premium y Escalable | BeckPro Developer",
    description: "Creamos sitios web de alto impacto, rápidos, optimizados para SEO y totalmente adaptivos. Ingeniería digital para llevar tu negocio al siguiente nivel.",
    url: "https://beckprodeveloper.com/servicios/desarrollo-web",
    type: "website",
    images: [
      {
        url: "https://beckprodeveloper.com/assets/web_dev_hero.png",
        width: 1200,
        height: 630,
        alt: "Desarrollo Web Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo Web Premium y Escalable | BeckPro Developer",
    description: "Creamos sitios web de alto impacto, rápidos, optimizados para SEO y totalmente adaptivos. Ingeniería digital para llevar tu negocio al siguiente nivel.",
    images: ["https://beckprodeveloper.com/assets/web_dev_hero.png"]
  }
};

export default function DesarrolloWebPage() {
  return <DesarrolloWebClient />;
}
