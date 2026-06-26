import SistemasPersonalizadosClient from "./SistemasPersonalizadosClient";

export const metadata = {
  title: "Sistemas Web Personalizados y Software a Medida | BeckPro Developer",
  description: "Desarrollamos sistemas web a la medida de tu negocio: bases de datos, reservas, inventarios, facturación y automatización de procesos. Arquitectura escalable y segura.",
  keywords: ["sistemas personalizados", "software a medida", "desarrollo de sistemas", "bases de datos", "automatizacion de procesos", "beckpro", "desarrollo a la medida", "guatemala"],
  alternates: {
    canonical: "https://beckprodeveloper.com/servicios/sistemas-personalizados"
  },
  openGraph: {
    title: "Sistemas Web Personalizados y Software a Medida | BeckPro Developer",
    description: "Desarrollamos sistemas web a la medida de tu negocio: bases de datos, reservas, inventarios, facturación y automatización de procesos. Arquitectura escalable y segura.",
    url: "https://beckprodeveloper.com/servicios/sistemas-personalizados",
    type: "website",
    images: [
      {
        url: "https://beckprodeveloper.com/assets/sistemas_personalizados_hero.png",
        width: 1200,
        height: 630,
        alt: "Sistemas Personalizados Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistemas Web Personalizados y Software a Medida | BeckPro Developer",
    description: "Desarrollamos sistemas web a la medida de tu negocio: bases de datos, reservas, inventarios, facturación y automatización de procesos. Arquitectura escalable y segura.",
    images: ["https://beckprodeveloper.com/assets/sistemas_personalizados_hero.png"]
  }
};

export default function SistemasPersonalizadosPage() {
  return <SistemasPersonalizadosClient />;
}
