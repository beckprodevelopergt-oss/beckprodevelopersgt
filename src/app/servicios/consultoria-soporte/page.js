import ConsultoriaSoporteClient from "./ConsultoriaSoporteClient";

export const metadata = {
  title: "Consultoría y Soporte Tecnológico Premium | BeckPro Developer",
  description: "Acompañamiento tecnológico de primer nivel. Consultoría de software, migración a la nube, servidores, soporte de infraestructura y optimización digital para empresas.",
  keywords: ["consultoria tecnologica", "soporte de servidores", "migracion cloud", "soporte IT", "consultoria de software", "beckpro", "mantenimiento servidores", "guatemala"],
  alternates: {
    canonical: "https://beckprodeveloper.com/servicios/consultoria-soporte"
  },
  openGraph: {
    title: "Consultoría y Soporte Tecnológico Premium | BeckPro Developer",
    description: "Acompañamiento tecnológico de primer nivel. Consultoría de software, migración a la nube, servidores, soporte de infraestructura y optimización digital para empresas.",
    url: "https://beckprodeveloper.com/servicios/consultoria-soporte",
    type: "website",
    images: [
      {
        url: "https://beckprodeveloper.com/assets/consultoria_soporte_hero.png",
        width: 1200,
        height: 630,
        alt: "Consultoría y Soporte Tecnológico Premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoría y Soporte Tecnológico Premium | BeckPro Developer",
    description: "Acompañamiento tecnológico de primer nivel. Consultoría de software, migración a la nube, servidores, soporte de infraestructura y optimización digital para empresas.",
    images: ["https://beckprodeveloper.com/assets/consultoria_soporte_hero.png"]
  }
};

export default function ConsultoriaSoportePage() {
  return <ConsultoriaSoporteClient />;
}
